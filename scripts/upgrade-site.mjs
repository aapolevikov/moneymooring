import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const categories = new Set([
  "savings.html",
  "insurance.html",
  "debt.html",
  "credit-cards.html",
  "mortgages.html",
]);

const header = `<a class="skip-link" href="#main-content">Skip to content</a>
<span class="harbor-line" aria-hidden="true"></span>
<header class="masthead" data-site-header>
  <div class="masthead-meta">
    <div class="wrap">
      <strong>Independent personal finance education</strong>
      <nav aria-label="Publication">
        <a href="/about.html">About</a>
        <a href="/editorial-policy.html">Editorial standards</a>
        <a href="/contact.html">Contact</a>
      </nav>
    </div>
  </div>
  <div class="masthead-main wrap">
    <a class="wordmark" href="/">Money<span>Mooring</span><small>Clear money guides</small></a>
    <button class="menu-toggle" type="button" data-menu-toggle aria-expanded="false" aria-controls="site-nav" aria-label="Open menu">
      <span>Menu</span>
      <span class="menu-toggle-icon" aria-hidden="true"><span></span></span>
    </button>
    <nav class="nav" id="site-nav" aria-label="Primary navigation">
      <a href="/savings.html">Savings</a>
      <a href="/insurance.html">Insurance</a>
      <a href="/debt.html">Debt &amp; loans</a>
      <a href="/credit-cards.html">Credit cards</a>
      <a href="/mortgages.html">Mortgages</a>
      <a class="mobile-only" href="/faq.html">FAQ</a>
      <a class="mobile-only" href="/about.html">About</a>
      <a class="mobile-only" href="/editorial-policy.html">Editorial standards</a>
      <a class="mobile-only" href="/contact.html">Contact</a>
    </nav>
  </div>
</header>`;

const footer = `<footer>
  <div class="wrap">
    <div class="footer-grid">
      <div class="footer-brand">
        <a class="wordmark" href="/">Money<span>Mooring</span><small>Clear money guides</small></a>
        <p class="foot-note">MoneyMooring is a publisher of general personal finance information for US readers. We are not a bank, lender, insurer, broker or financial adviser. Content is educational and is not individual financial advice.</p>
        <a href="mailto:editor@moneymooring.com">editor@moneymooring.com</a>
      </div>
      <nav aria-label="Guide categories">
        <strong>Guides</strong>
        <a href="/savings.html">Savings</a>
        <a href="/insurance.html">Insurance</a>
        <a href="/debt.html">Debt &amp; loans</a>
        <a href="/credit-cards.html">Credit cards</a>
        <a href="/mortgages.html">Mortgages</a>
      </nav>
      <nav aria-label="Publication pages">
        <strong>Publication</strong>
        <a href="/about.html">About</a>
        <a href="/editorial-team.html">Editorial team</a>
        <a href="/editorial-policy.html">Editorial standards</a>
        <a href="/contact.html">Contact</a>
      </nav>
      <nav aria-label="Legal and help">
        <strong>Legal &amp; help</strong>
        <a href="/privacy.html">Privacy policy</a>
        <a href="/terms.html">Terms of use</a>
        <a href="/faq.html">FAQ</a>
      </nav>
    </div>
    <div class="footer-bottom">
      <span>© 2026 MoneyMooring</span>
      <span>Educational information for US readers · Not individual financial advice</span>
    </div>
  </div>
</footer>`;

const cookie = `<aside id="ck" class="cookie-banner" style="display:none">
  <strong>Your privacy choices</strong>
  <p>We use essential storage to remember your choice. Optional analytics loads only after consent and only when configured. <a href="/privacy.html">Privacy policy</a>.</p>
  <div class="cookie-actions">
    <button class="cookie-accept" type="button" onclick="ckSet('all')">Allow optional analytics</button>
    <button class="cookie-essential" type="button" onclick="ckSet('ess')">Essential only</button>
  </div>
</aside>`;

const articleResources = `<section class="article-resources" aria-labelledby="sources-heading">
      <h2 id="sources-heading">Sources and methodology</h2>
      <p>We use primary regulator guidance and public product documentation. Rates and product terms change, so verify current details with the provider before acting.</p>
      <ul class="source-list" data-source-list></ul>
    </section>
    <aside class="editorial-card" aria-label="Editorial standards">
      <div class="editorial-card-mark" aria-hidden="true">MM</div>
      <div>
        <strong>MoneyMooring Editorial Team</strong>
        <p>This educational guide is human-reviewed. Advertising and future sponsored placements do not determine our editorial conclusions.</p>
        <a href="/editorial-team.html">Meet the editorial team</a> · <a href="/editorial-policy.html">Read our standards</a>
      </div>
    </aside>`;

function getHtmlFiles(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return getHtmlFiles(full);
    return entry.isFile() && entry.name.endsWith(".html") ? [full] : [];
  });
}

function breadcrumbForArticle(html) {
  const match = html.match(/<a class="tag" href="\.\.\/([^"]+\.html)">([^<]+)<\/a>/);
  if (!match) return "";
  const title = (html.match(/<h1>([\s\S]*?)<\/h1>/) || [])[1] || "Guide";
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li><a href="/${match[1]}">${match[2]}</a></li>
        <li aria-current="page">${title.replace(/<[^>]+>/g, "")}</li>
      </ol>
    </nav>`;
}

function breadcrumbForPage(fileName, html) {
  const tag = (html.match(/<span class="tag">([^<]+)<\/span>/) || [])[1];
  const title = (html.match(/<h1>([\s\S]*?)<\/h1>/) || [])[1] || tag || "Page";
  return `<nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li aria-current="page">${(tag || title).replace(/<[^>]+>/g, "")}</li>
      </ol>
    </nav>`;
}

for (const file of getHtmlFiles(root)) {
  const relative = path.relative(root, file).replaceAll(path.sep, "/");
  if (relative.startsWith("scripts/") || path.basename(file).startsWith("google")) continue;

  let html = fs.readFileSync(file, "utf8");
  const isHome = relative === "index.html";
  const isArticle = relative.startsWith("articles/");
  const isCategory = categories.has(relative);
  const bodyClass = isHome ? "home-page" : isArticle ? "article-page" : isCategory ? "category-page" : "static-page";

  html = html.replace('<script defer src="/analytics.js"></script>', '<script defer src="/site.js"></script>\n<script defer src="/analytics.js"></script>');
  html = html.replace(/<body(?:\s[^>]*)?>/, `<body class="${bodyClass}">`);
  html = html.replace(/<span class="harbor-line"><\/span>\s*<header[\s\S]*?<\/header>/, header);
  html = html.replace(/<footer[\s\S]*?<\/footer>/, footer);
  html = html.replace(/<div id="ck"[\s\S]*?<\/div><\/div>\s*(?=<\/body>)/, cookie);

  if (isHome) {
    html = html.replace('<section class="hero">', '<section class="hero" id="main-content" tabindex="-1">');
    html = html.replace(/<div class="hero-stats">[\s\S]*?<\/div>\s*<\/div>\s*<\/div>(?=\s*<div class="hero-art")/, `<div class="hero-proof">
        <div><b>15</b><span>in-depth guides</span></div>
        <div><b>Updated</b><span>dates shown on every guide</span></div>
        <div><b>Publisher</b><span>not a bank or financial adviser</span></div>
      </div>
    </div>`);
    html = html.replace(
      "explained with real math, honest trade-offs and the fine print everyone else buries.",
      "explained with clear assumptions, worked examples and the limitations that matter.",
    );
    html = html.replace(
      /<div class="trust">[\s\S]*?<\/div>\s*<\/div>(?=\s*<main)/,
      `<div class="trust">
  <div class="wrap">
    <div><svg viewBox="0 0 24 24" fill="none" stroke="#0E8A5F" stroke-width="2.4" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>Financial education for US readers</div>
    <div><svg viewBox="0 0 24 24" fill="none" stroke="#0E8A5F" stroke-width="2.4" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>Sources, assumptions and update dates shown</div>
    <div><svg viewBox="0 0 24 24" fill="none" stroke="#0E8A5F" stroke-width="2.4" aria-hidden="true"><path d="M20 6L9 17l-5-5"/></svg>Not a bank, lender, insurer or financial adviser</div>
  </div>
</div>`,
    );
    html = html.replace("Why online banks pay 8–10x more than the big branches, what APY really means, and the teaser-rate fine print that quietly erodes your return.", "Why online banks can pay materially more than branch banks, what APY really means, and the teaser-rate fine print that can erode your return.");
    html = html.replace('<span class="count">14 guides</span>', '<span class="count">15 guides in the library</span>');
  } else if (isArticle || html.includes('<section class="article-hero">')) {
    html = html.replace('<section class="article-hero">', '<section class="article-hero" id="main-content" tabindex="-1">');
    const breadcrumb = isArticle ? breadcrumbForArticle(html) : breadcrumbForPage(relative, html);
    html = html.replace(/(<section class="article-hero"[^>]*>\s*<div class="wrap">)/, `$1\n    ${breadcrumb}`);
  } else {
    html = html.replace('<div class="wrap"><div class="page-body">', '<div class="wrap"><div class="page-body" id="main-content" tabindex="-1">');
  }

  if (isArticle) {
    html = html.replace(
      /<p class="byline">([\s\S]*?)<\/p>/,
      '<p class="byline">$1<span class="byline-note">Educational content · Reviewed against public regulatory and product information</span></p>',
    );
    html = html.replace(
      /<!-- RSOC RELATED SEARCH UNIT: paste feed provider code here -->\s*<div class="related-search">[\s\S]*?<\/div>/,
      '<div class="rsoc-slot" id="rsoc-article-primary" data-rsoc-unit="article-primary" data-rsoc-provider="" hidden aria-hidden="true"></div>',
    );
    html = html.replace(/\s*<\/article>/, `\n\n    ${articleResources}\n  </article>`);
    html = html.replace(
      /(<\/div>\s*)(?=<footer>)/,
      `$1<section class="related-guides" data-related-guides aria-labelledby="related-guides-title"></section>\n\n`,
    );
  }

  html = html.replace(
    "MoneyMooring is supported by advertising, including sponsored search suggestions displayed within our content. Advertising never determines our editorial conclusions, and advertisers do not review or approve our guides before publication.",
    "MoneyMooring may in the future be supported by clearly labeled advertising or sponsored search suggestions. Advertising does not determine our editorial conclusions, and advertisers do not review or approve our guides before publication.",
  );
  html = html.replace(
    "Advertising on MoneyMooring, including sponsored search units embedded in articles, is clearly distinguishable from editorial content. Advertisers have no input into what we cover, what we conclude, or how we rank options.",
    "If MoneyMooring introduces advertising or sponsored search units, they will be clearly distinguishable from editorial content. Advertisers have no input into what we cover, what we conclude, or how we rank options.",
  );
  html = html.replace(
    "The site displays advertising, including sponsored search suggestions, and may link to third-party websites.",
    "The site may display clearly labeled advertising or sponsored search suggestions in the future and may link to third-party websites.",
  );

  if (relative === "contact.html") {
    html = html.replace(
      /<h1>Contact<\/h1>[\s\S]*?<p><em>Please note:[\s\S]*?<\/em><\/p>/,
      `<h1>Contact the editorial team</h1>
<p>Use the email below for corrections, questions about our methodology, or partnership inquiries.</p>
<h2>Email</h2>
<p><a href="mailto:editor@moneymooring.com">editor@moneymooring.com</a></p>
<p>You can add “Correction”, “Editorial question”, or “Partnership” to the subject line so we can route your message.</p>
<h2>What to expect</h2>
<p>We review correction reports first. Response times vary.</p>
<p><em>Please note: we cannot provide individual financial advice, review personal situations, or recommend specific products for your circumstances.</em></p>`,
    );
  }

  if (relative === "privacy.html") {
    html = html.replace(
      /<li><strong>Advertising data:<\/strong>[\s\S]*?<\/li>/,
      "<li><strong>Advertising data:</strong> if advertising or sponsored search providers are added in the future, they may process cookies or identifiers only as described in an updated policy and subject to your consent where required.</li>",
    );
    html = html.replace(
      "To operate and improve the site, measure content performance, display and measure advertising, and respond to inquiries. We do not sell personal information as the term is commonly understood; advertising partners may process identifiers for ad delivery and measurement as described above.",
      "To operate and improve the site, measure content performance when optional analytics is configured and consented to, and respond to inquiries. We do not sell personal information as the term is commonly understood.",
    );
    html = html.replace(
      /<p>The site may use Google AdSense[\s\S]*?<\/p>/,
      "<p>No advertising or sponsored-search provider is currently configured in this site code. If that changes, this policy and the consent controls will be updated before non-essential technology is enabled.</p>",
    );
  }

  fs.writeFileSync(file, html);
}

console.log("Upgraded MoneyMooring HTML templates.");
