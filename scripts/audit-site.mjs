import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const failures = [];
const notes = [];

function fail(message) {
  failures.push(message);
}

function matches(html, pattern) {
  return [...html.matchAll(pattern)];
}

function pagePath(file) {
  return "/" + path.relative(root, file).replaceAll(path.sep, "/");
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.name === ".git" || entry.name === "scripts") return [];
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith(".html") ? [full] : [];
  });
}

function resolveLocalLink(fromFile, href) {
  if (!href || /^(?:https?:|mailto:|tel:|javascript:|#)/i.test(href)) return null;
  const clean = href.split("#")[0].split("?")[0];
  if (!clean) return null;
  if (clean.startsWith("/")) {
    if (clean === "/") return path.join(root, "index.html");
    return path.join(root, clean.slice(1));
  }
  return path.resolve(path.dirname(fromFile), clean);
}

const htmlFiles = walk(root).filter((file) => !path.basename(file).startsWith("google"));
const sitemap = fs.readFileSync(path.join(root, "sitemap.xml"), "utf8");
const sitemapUrls = matches(sitemap, /<loc>([^<]+)<\/loc>/g).map((match) => match[1]);
const titles = new Map();
const headings = new Map();
const descriptions = new Map();
const hubPages = [
  "savings.html",
  "budgeting.html",
  "credit-scores.html",
  "credit-cards.html",
  "debt.html",
  "personal-loans.html",
  "mortgages.html",
  "auto-insurance.html",
  "insurance.html",
  "retirement-taxes-benefits.html",
];

if (htmlFiles.length !== sitemapUrls.length) {
  fail(`HTML/sitemap count mismatch: ${htmlFiles.length} HTML pages, ${sitemapUrls.length} sitemap URLs`);
}

for (const file of htmlFiles) {
  const relative = path.relative(root, file).replaceAll(path.sep, "/");
  const html = fs.readFileSync(file, "utf8");
  const canonical = relative === "index.html"
    ? "https://moneymooring.com/"
    : `https://moneymooring.com/${relative}`;

  for (const [label, pattern, expected] of [
    ["title", /<title>[\s\S]*?<\/title>/g, 1],
    ["description", /<meta\s+name="description"\s+content="[^"]+">/g, 1],
    ["canonical", /<link\s+rel="canonical"\s+href="[^"]+">/g, 1],
    ["Open Graph image", /<meta\s+property="og:image"\s+content="[^"]+">/g, 1],
    ["Twitter image", /<meta\s+name="twitter:image"\s+content="[^"]+">/g, 1],
    ["H1", /<h1(?:\s[^>]*)?>[\s\S]*?<\/h1>/g, 1],
    ["site.js", /<script defer src="\/site\.js"><\/script>/g, 1],
    ["analytics.js", /<script defer src="\/analytics\.js"><\/script>/g, 1],
    ["main target", /id="main-content"/g, 1],
    ["privacy banner", /id="ck"/g, 1],
  ]) {
    const count = matches(html, pattern).length;
    if (count !== expected) fail(`${relative}: expected ${expected} ${label}, found ${count}`);
  }

  if (!html.includes(`rel="canonical" href="${canonical}"`)) {
    fail(`${relative}: canonical should be ${canonical}`);
  }
  if (!sitemapUrls.includes(canonical)) fail(`${relative}: canonical missing from sitemap`);

  const titleText = stripMarkup((html.match(/<title>([\s\S]*?)<\/title>/) || [])[1] || "");
  const h1Text = stripMarkup((html.match(/<h1(?:\s[^>]*)?>([\s\S]*?)<\/h1>/) || [])[1] || "");
  const descriptionText = (html.match(/<meta\s+name="description"\s+content="([^"]+)">/) || [])[1] || "";
  if (titles.has(titleText)) fail(`${relative}: duplicate title with ${titles.get(titleText)}`);
  else titles.set(titleText, relative);
  if (headings.has(h1Text)) fail(`${relative}: duplicate H1 with ${headings.get(h1Text)}`);
  else headings.set(h1Text, relative);
  if (descriptions.has(descriptionText)) fail(`${relative}: duplicate description with ${descriptions.get(descriptionText)}`);
  else descriptions.set(descriptionText, relative);

  for (const block of matches(html, /<script type="application\/ld\+json">([\s\S]*?)<\/script>/g)) {
    try {
      JSON.parse(block[1]);
    } catch (error) {
      fail(`${relative}: invalid JSON-LD (${error.message})`);
    }
  }

  const ids = matches(html, /\sid="([^"]+)"/g).map((match) => match[1]);
  const duplicates = ids.filter((id, index) => ids.indexOf(id) !== index);
  if (duplicates.length) fail(`${relative}: duplicate IDs ${[...new Set(duplicates)].join(", ")}`);

  for (const match of matches(html, /<a\b[^>]*\shref="([^"]+)"/g)) {
    const target = resolveLocalLink(file, match[1]);
    if (target && !fs.existsSync(target)) fail(`${relative}: broken link ${match[1]}`);
  }

  for (const match of matches(html, /<img\b([^>]+)>/g)) {
    const attributes = match[1];
    const src = (attributes.match(/\ssrc="([^"]+)"/) || [])[1];
    if (!src) {
      fail(`${relative}: image without src`);
      continue;
    }
    if (!/\salt="[^"]*"/.test(attributes)) fail(`${relative}: image ${src} is missing alt`);
    if (!/\swidth="\d+"/.test(attributes) || !/\sheight="\d+"/.test(attributes)) {
      fail(`${relative}: image ${src} is missing intrinsic dimensions`);
    }
    const target = resolveLocalLink(file, src);
    if (target && !fs.existsSync(target)) fail(`${relative}: missing image ${src}`);
  }

  if (html.includes("Related search unit placeholder") || html.includes('class="related-search"')) {
    fail(`${relative}: visible RSOC placeholder remains`);
  }

  if (relative.startsWith("articles/")) {
    for (const required of [
      'class="breadcrumbs"',
      'class="article-visual"',
      'class="article-resources"',
      'data-source-list',
      'class="editorial-card"',
      'data-related-guides',
      'class="rsoc-slot"',
      "hidden aria-hidden=\"true\"",
    ]) {
      if (!html.includes(required)) fail(`${relative}: missing article element ${required}`);
    }
    if (!html.includes('"@type":"Article"')) fail(`${relative}: Article schema is missing`);
    if (!html.includes('"@type":"FAQPage"')) fail(`${relative}: FAQPage schema is missing`);
    if (!html.includes('class="faq"')) fail(`${relative}: visible FAQ section is missing`);
    const articleText = stripMarkup((html.match(/<article class="article-body">([\s\S]*?)<\/article>/) || [])[1] || "");
    const articleWords = articleText.split(/\s+/).filter(Boolean).length;
    if (articleWords < 500) fail(`${relative}: article body is too short (${articleWords} words)`);
  }

  if (relative === "index.html") {
    const latestCards = matches(html, /<article class="card card-text">/g).length;
    if (latestCards !== 12) fail(`index.html: expected 12 latest-guide cards, found ${latestCards}`);
    const topicCards = matches(html, /class="topic-card"/g).length;
    if (topicCards !== 10) fail(`index.html: expected 10 topic cards, found ${topicCards}`);
    for (const image of [
      "hero-editorial-v1.jpg",
      "topic-savings-v1.jpg",
      "topic-budgeting-v1.jpg",
      "topic-credit-scores-v1.jpg",
      "topic-personal-loans-v1.jpg",
      "topic-auto-insurance-v1.jpg",
      "topic-retirement-v1.jpg",
      "topic-insurance-v1.jpg",
      "topic-debt-v1.jpg",
      "topic-credit-cards-v1.jpg",
      "topic-mortgages-v1.jpg",
      "article-savings-v1.jpg",
      "article-budgeting-v1.jpg",
      "article-credit-reports-v1.jpg",
      "article-credit-cards-v1.jpg",
      "article-debt-v1.jpg",
      "article-personal-loans-v1.jpg",
      "article-mortgages-v1.jpg",
      "article-auto-insurance-v1.jpg",
      "article-home-life-insurance-v1.jpg",
      "article-retirement-v1.jpg",
    ]) {
      if (!fs.existsSync(path.join(root, "assets", image))) fail(`assets: missing generated image ${image}`);
    }
  }

  if (hubPages.includes(relative)) {
    if (!html.includes('class="category-visual"')) fail(`${relative}: category image is missing`);
    const guideCards = matches(html, /class="card hub-article-card"/g).length;
    if (guideCards !== 5) fail(`${relative}: expected 5 complete guide cards, found ${guideCards}`);
    if (!html.includes('"@type":"CollectionPage"')) fail(`${relative}: CollectionPage schema is missing`);
  }
}

function stripMarkup(value) {
  return value.replace(/<[^>]+>/g, " ").replace(/\s+/g, " ").trim();
}

const articleCount = htmlFiles.filter((file) => path.relative(root, file).startsWith("articles" + path.sep)).length;
if (articleCount !== 50) fail(`expected 50 article pages, found ${articleCount}`);
if (hubPages.some((page) => !fs.existsSync(path.join(root, page)))) {
  fail("one or more required topic hubs are missing");
}

const robots = fs.readFileSync(path.join(root, "robots.txt"), "utf8");
if (!robots.includes("Sitemap: https://moneymooring.com/sitemap.xml")) {
  fail("robots.txt: sitemap declaration missing");
}

const analytics = fs.readFileSync(path.join(root, "analytics.js"), "utf8");
if (!/ga4Id:\s*""/.test(analytics) || !/metaPixelId:\s*""/.test(analytics)) {
  fail("analytics.js: analytics IDs must remain blank before configuration");
}
if (analytics.includes('querySelectorAll(".related-search")')) {
  fail("analytics.js: old visible RSOC selector remains");
}

const verification = path.join(root, "google5cc0e6bad5fa68fb.html");
if (!fs.existsSync(verification)) fail("Search Console verification file is missing");
if (!fs.existsSync(path.join(root, "assets", "moneymooring-social.png"))) {
  fail("Social preview image is missing");
}

notes.push(`${htmlFiles.length} public HTML pages`);
notes.push(`${sitemapUrls.length} sitemap URLs`);
notes.push(`${articleCount} article pages across ${hubPages.length} topic hubs`);
notes.push("unique title/description/H1, canonical, JSON-LD and internal links checked");
notes.push("RSOC hooks hidden; GA4 and Meta IDs blank");

if (failures.length) {
  console.error(`Audit failed with ${failures.length} issue(s):`);
  failures.forEach((failure) => console.error(`- ${failure}`));
  process.exit(1);
}

console.log("Audit passed:");
notes.forEach((note) => console.log(`- ${note}`));
