import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const homePath = path.join(root, "index.html");
let home = fs.readFileSync(homePath, "utf8");

home = home.replace(
  /<div class="hero-art" aria-hidden="true">[\s\S]*?<\/svg>\s*<\/div>/,
  `<div class="hero-art" aria-hidden="true">
      <img src="/assets/hero-editorial-v1.jpg" alt="" width="1536" height="1024" fetchpriority="high" decoding="async">
    </div>`,
);

home = home.replace(
  /<div class="featured-cover" aria-hidden="true">[\s\S]*?<\/svg>\s*<\/div>/,
  `<div class="featured-cover" aria-hidden="true">
      <img src="/assets/topic-savings-v1.jpg" alt="" width="1536" height="1024" loading="lazy" decoding="async">
    </div>`,
);

const homeCovers = [
  ["insurance.html", "topic-insurance-v1.jpg"],
  ["debt.html", "topic-debt-v1.jpg"],
  ["credit-cards.html", "topic-credit-cards-v1.jpg"],
  ["mortgages.html", "topic-mortgages-v1.jpg"],
];

for (const [categoryHref, image] of homeCovers) {
  home = home.replace(/<article class="card">[\s\S]*?<\/article>/g, (article) => {
    if (!article.includes(`href="${categoryHref}"`) || !article.includes('class="card-cover"')) return article;
    return article.replace(
      /<div class="card-cover" aria-hidden="true">[\s\S]*?<\/div>/,
      `<div class="card-cover" aria-hidden="true">
        <img src="/assets/${image}" alt="" width="1536" height="1024" loading="lazy" decoding="async">
      </div>`,
    );
  });
}

fs.writeFileSync(homePath, home);

const categoryPages = {
  "savings.html": ["topic-savings-v1.jpg", "Savings planning still life with a glass savings vessel and notebook"],
  "insurance.html": ["topic-insurance-v1.jpg", "Architectural home and car model protected beneath a glass canopy"],
  "debt.html": ["topic-debt-v1.jpg", "Editorial concept showing financial papers moving into an ordered descending plan"],
  "credit-cards.html": ["topic-credit-cards-v1.jpg", "Unbranded credit cards arranged for comparison"],
  "mortgages.html": ["topic-mortgages-v1.jpg", "Architectural home model, plans and a key"],
};

for (const [fileName, [image, alt]] of Object.entries(categoryPages)) {
  const filePath = path.join(root, fileName);
  let html = fs.readFileSync(filePath, "utf8");
  if (html.includes("category-visual")) continue;
  html = html.replace(
    /(<p class="byline">[\s\S]*?<\/p>)/,
    `$1
    <figure class="category-visual">
      <img src="/assets/${image}" alt="${alt}" width="1536" height="1024" decoding="async">
    </figure>`,
  );
  fs.writeFileSync(filePath, html);
}

console.log("Installed generated topic imagery.");
