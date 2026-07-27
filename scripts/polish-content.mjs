import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(full);
    return entry.isFile() && entry.name.endsWith(".html") ? [full] : [];
  });
}

const replacements = [
  [
    "We use essential storage to remember your choice. Optional analytics loads only after consent and only when configured.",
    "Essential storage remembers this choice. Optional analytics stays off unless you allow it.",
  ],
  [
    "Yes. All guides are free to read. The site is supported by advertising, including sponsored search suggestions displayed within articles, which are always distinguishable from editorial content.",
    "Yes. All guides are free to read. MoneyMooring may add clearly labeled advertising or sponsored search suggestions in the future; no advertising provider is currently configured in the site code.",
  ],
  [
    "Through advertising, including sponsored search units embedded in our content. Advertisers never review, approve or influence our editorial conclusions — see our editorial policy.",
    "The publication may be supported in the future by clearly labeled advertising or sponsored search placements. Any future advertiser will not review, approve or influence our editorial conclusions — see our editorial policy.",
  ],
  [
    "Why online banks pay 8–10x more than big branches, and the fine print that erodes your rate.",
    "Why online banks can pay materially more than branch banks, and the fine print that can erode your return.",
  ],
  [
    "Top online savings accounts currently pay roughly 8–10 times the national average offered by big branch banks.",
    "Competitive online savings accounts can pay materially more than standard branch savings accounts; compare current APYs before opening an account.",
  ],
  [
    "Why term costs 5–15x less, where whole life genuinely fits, and how commissions shape the sales pitch.",
    "Why term insurance can cost substantially less, where permanent coverage may fit, and which trade-offs to compare.",
  ],
  [
    "Term life costs 5–15x less than whole life for the same death benefit. When permanent insurance actually makes sense — and for whom it doesn’t.",
    "Term life can cost substantially less than whole life for the same death benefit. Compare duration, cash value, flexibility and total premiums.",
  ],
  [
    "Premiums run five to fifteen times higher for the same death benefit — think $400–$600 a month for that same $500,000 —",
    "Premiums can run substantially higher for the same death benefit —",
  ],
  [
    "APR ranges by credit band, origination-fee math, and the pre-qualification strategy that saves four figures.",
    "APR ranges by credit band, origination-fee math, and how pre-qualification can reduce comparison risk.",
  ],
  [
    "Studies of consolidation borrowers consistently show a large minority end up with more total debt than they started with. ",
    "",
  ],
  [
    "Seniors typically have more assets to protect, not fewer. State minimums are rarely adequate; many advisors suggest limits of at least 100/300/100, and an umbrella policy if you have significant assets.",
    "Legal minimums may not match the amount of protection a household needs. Compare higher limits and ask a licensed insurance professional how an umbrella policy would interact with your assets and existing coverage.",
  ],
  [
    "Analytics data is retained per the default retention settings of our analytics providers.",
    "If optional analytics is configured, its provider and retention period will be disclosed here before collection begins.",
  ],
];

for (const file of walk(root)) {
  if (path.basename(file).startsWith("google")) continue;
  let html = fs.readFileSync(file, "utf8");
  for (const [from, to] of replacements) {
    html = html.replaceAll(from, to);
  }
  if (!html.includes('property="og:image"')) {
    html = html.replace(
      /(<meta property="og:url" content="[^"]+">)/,
      `$1
<meta property="og:image" content="https://moneymooring.com/assets/moneymooring-social.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="MoneyMooring — personal finance, made clear">`,
    );
  }
  html = html.replace('<meta name="twitter:card" content="summary">', '<meta name="twitter:card" content="summary_large_image">');
  if (!html.includes('name="twitter:image"')) {
    html = html.replace(
      /(<meta name="twitter:description" content="[^"]+">)/,
      `$1
<meta name="twitter:image" content="https://moneymooring.com/assets/moneymooring-social.png">
<meta name="twitter:image:alt" content="MoneyMooring — personal finance, made clear">`,
    );
  }
  fs.writeFileSync(file, html);
}

const sitemapPath = path.join(root, "sitemap.xml");
let sitemap = fs.readFileSync(sitemapPath, "utf8");
sitemap = sitemap.replace(/<lastmod>[^<]+<\/lastmod>/g, "<lastmod>2026-07-27</lastmod>");
sitemap = sitemap.replace(/(<loc>[^<]+<\/loc>)(?!<lastmod>)/g, "$1<lastmod>2026-07-27</lastmod>");
fs.writeFileSync(sitemapPath, sitemap);

console.log("Polished high-risk and prelaunch wording.");
