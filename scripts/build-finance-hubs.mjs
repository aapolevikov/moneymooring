import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  articleAssignments,
  checkedDate,
  existingArticleTitles,
  hubs,
  isoDate,
  newArticles
} from "../content/finance-hubs.mjs";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const hubByKey = Object.fromEntries(hubs.map((hub) => [hub.key, hub]));

function articleVisual(hub, articlePath) {
  const index = Math.max(0, hub.articles.findIndex((article) => article[1] === articlePath));
  return index % 2 === 0
    ? { src: hub.image, alt: hub.alt }
    : { src: hub.articleImage, alt: hub.articleAlt };
}

function renderArticleVisual(hub, articlePath) {
  const visual = articleVisual(hub, articlePath);
  return `<figure class="article-visual">
      <img src="${visual.src}" alt="${escapeHtml(visual.alt)}" width="1536" height="1024" loading="eager" decoding="async">
      <figcaption>MoneyMooring editorial visual · ${escapeHtml(hub.short)}</figcaption>
    </figure>`;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function stripTags(value) {
  return String(value)
    .replace(/<[^>]+>/g, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function cleanPath(value) {
  if (value === "/index.html") return "/";
  return String(value).replace(/\.html$/, "") || "/";
}

function publicUrl(value) {
  return `https://moneymooring.com${cleanPath(value)}`;
}

const seoTitles = {
  "annual-credit-reports-guide": "Annual Credit Reports: Request and Review",
  "avalanche-vs-snowball": "Debt Avalanche vs. Snowball",
  "auto-insurance-coverage-types": "Auto Insurance Coverage Types Explained",
  "balance-transfer-credit-cards": "Balance Transfer Credit Cards Guide",
  "bill-calendar-guide": "Bill Calendar Guide for Pay Cycles",
  "car-insurance-for-seniors": "Car Insurance for Older Drivers",
  "cd-vs-savings-account": "CDs vs. Savings Accounts",
  "checking-account-fees-guide": "Checking Account Fees Comparison Guide",
  "credit-card-apr-interest-explained": "Credit Card APR and Interest Explained",
  "credit-card-grace-period": "Credit Card Grace Periods Explained",
  "credit-freeze-guide": "Credit Freezes: How They Work",
  "credit-utilization-explained": "Credit Utilization Explained",
  "debt-collection-validation-rights": "Debt Validation Notice Response Checklist",
  "emergency-fund-how-much": "Emergency Fund Savings Target",
  "fdic-deposit-insurance-explained": "FDIC Deposit Insurance Coverage Guide",
  "fha-vs-conventional-loans": "FHA vs. Conventional Loans",
  "flood-insurance-basics": "Flood Insurance Coverage Basics",
  "high-yield-savings-accounts": "High-Yield Savings Accounts Guide",
  "home-insurance-what-it-covers": "Homeowners Insurance Coverage Guide",
  "how-much-house-can-you-afford": "How Much House Can You Afford?",
  "how-to-build-a-monthly-budget": "How to Build a Monthly Budget",
  "joint-bank-accounts-beneficiaries": "Joint Bank Accounts and FDIC Insurance",
  "life-insurance-needs-framework": "How Much Life Insurance Do You Need?",
  "minimum-credit-card-payment-cost": "Minimum Credit Card Payment Cost",
  "mortgage-closing-costs": "Mortgage Closing Costs Explained",
  "mortgage-preapproval-documents": "Mortgage Preapproval Document Checklist",
  "mortgage-refinance-guide": "Mortgage Refinance Break-Even Guide",
  "nonprofit-credit-counseling-guide": "Nonprofit Credit Counseling Guide",
  "personal-loan-payment-calculator": "Personal Loan Payment Calculator",
  "personal-loan-prequalification": "Personal Loan Prequalification Guide",
  "renters-insurance-guide": "Renters Insurance Coverage Guide",
  "required-minimum-distributions-basics": "Required Minimum Distributions Guide",
  "secured-vs-unsecured-personal-loans": "Secured vs. Unsecured Personal Loans",
  "sinking-funds-guide": "Sinking Funds for Irregular Expenses",
  "social-security-retirement-basics": "Social Security Retirement Benefits",
  "term-vs-whole-life-insurance": "Term vs. Whole Life Insurance",
  "traditional-vs-roth-ira": "Traditional vs. Roth IRA Guide"
};

function head({
  title,
  description,
  canonical,
  type = "website",
  cssPath = "/style.css",
  schema = []
}) {
  const schemas = schema.map((item) =>
    `<script type="application/ld+json">${JSON.stringify(item)}</script>`
  ).join("\n");
  return `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>${escapeHtml(title)}</title>
<meta name="description" content="${escapeHtml(description)}">
<link rel="canonical" href="${canonical}">
<meta property="og:type" content="${type}">
<meta property="og:site_name" content="MoneyMooring">
<meta property="og:title" content="${escapeHtml(title)}">
<meta property="og:description" content="${escapeHtml(description)}">
<meta property="og:url" content="${canonical}">
<meta property="og:image" content="https://moneymooring.com/assets/moneymooring-social.png">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="MoneyMooring — clear personal finance guides">
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${escapeHtml(title)}">
<meta name="twitter:description" content="${escapeHtml(description)}">
<meta name="twitter:image" content="https://moneymooring.com/assets/moneymooring-social.png">
<meta name="twitter:image:alt" content="MoneyMooring — clear personal finance guides">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Inter:wght@400;500;600;650&display=swap" rel="stylesheet">
<link rel="stylesheet" href="${cssPath}">
${schemas}
<script defer src="/site.js"></script>
<script defer src="/analytics.js"></script>
</head>`;
}

function header() {
  return `<header class="masthead" data-site-header>
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
      <a href="/#topics">Topics</a>
      <a href="/savings.html">Banking</a>
      <a href="/credit-scores.html">Credit</a>
      <a href="/debt.html">Debt</a>
      <a href="/mortgages.html">Home buying</a>
      <a href="/retirement-taxes-benefits.html">Retirement</a>
      <a class="mobile-only" href="/faq.html">FAQ</a>
      <a class="mobile-only" href="/about.html">About</a>
      <a class="mobile-only" href="/editorial-policy.html">Editorial standards</a>
      <a class="mobile-only" href="/contact.html">Contact</a>
    </nav>
  </div>
</header>`;
}

function footer() {
  const topicLinks = hubs.map((hub) =>
    `<a href="${hub.path}">${escapeHtml(hub.title)}</a>`
  );
  return `<footer>
  <div class="wrap">
    <div class="footer-grid footer-grid-expanded">
      <div class="footer-brand">
        <a class="wordmark" href="/">Money<span>Mooring</span><small>Clear money guides</small></a>
        <p class="foot-note">MoneyMooring publishes general personal finance education for US readers. We are not a bank, lender, insurer, broker, tax preparer or financial adviser. Content is educational and is not individual financial, legal or tax advice.</p>
        <a href="mailto:editor@moneymooring.com">editor@moneymooring.com</a>
      </div>
      <nav aria-label="Money topics one">
        <strong>Money topics</strong>
        ${topicLinks.slice(0, 5).join("\n        ")}
      </nav>
      <nav aria-label="Money topics two">
        <strong>More topics</strong>
        ${topicLinks.slice(5).join("\n        ")}
      </nav>
      <nav aria-label="Publication and legal">
        <strong>Publication</strong>
        <a href="/about.html">About</a>
        <a href="/editorial-team.html">Editorial team</a>
        <a href="/editorial-policy.html">Editorial standards</a>
        <a href="/contact.html">Contact</a>
        <a href="/privacy.html">Privacy policy</a>
        <a href="/terms.html">Terms of use</a>
        <a href="/faq.html">FAQ</a>
      </nav>
    </div>
    <div class="footer-bottom">
      <span>© 2026 MoneyMooring</span>
      <span>Educational information for US readers · Sources checked and dated</span>
    </div>
  </div>
</footer>`;
}

function cookieBanner() {
  return `<aside id="ck" class="cookie-banner" style="display:none">
  <strong>Your privacy choices</strong>
  <p>Essential storage remembers this choice. Optional analytics stays off unless you allow it. <a href="/privacy.html">Privacy policy</a>.</p>
  <div class="cookie-actions">
    <button class="cookie-accept" type="button" onclick="ckSet('all')">Allow optional analytics</button>
    <button class="cookie-essential" type="button" onclick="ckSet('ess')">Essential only</button>
  </div>
</aside>`;
}

function renderHub(hub) {
  const canonical = `https://moneymooring.com${hub.path}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        name: hub.title,
        description: hub.description,
        url: canonical,
        isPartOf: {
          "@type": "WebSite",
          name: "MoneyMooring",
          url: "https://moneymooring.com/"
        },
        hasPart: hub.articles.map((article) => ({
          "@type": "Article",
          headline: article[0],
          url: `https://moneymooring.com${article[1]}`
        }))
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Home",
            item: "https://moneymooring.com/"
          },
          {
            "@type": "ListItem",
            position: 2,
            name: hub.title,
            item: canonical
          }
        ]
      }
    ]
  };
  const cards = hub.articles.map((article, index) => {
    const visual = articleVisual(hub, article[1]);
    return `
      <article class="card hub-article-card">
        <a class="hub-card-media" href="${article[1]}" aria-label="${escapeHtml(article[0])}">
          <img src="${visual.src}" alt="" width="1536" height="1024" ${index > 0 ? 'loading="lazy"' : ""} decoding="async">
          <span class="card-number" aria-hidden="true">0${index + 1}</span>
        </a>
        <div class="card-body">
          <span class="tag">${escapeHtml(hub.short)}</span>
          <h2><a href="${article[1]}">${escapeHtml(article[0])}</a></h2>
          <p>${escapeHtml(article[2])}</p>
          <a class="more" href="${article[1]}">Read the guide →</a>
        </div>
      </article>`;
  }).join("");
  const sources = hub.sources.map((source) =>
    `<li><a href="${source[1]}" target="_blank" rel="noopener noreferrer">${escapeHtml(source[0])} ↗</a></li>`
  ).join("");

  return `${head({
    title: `${hub.title} Guides | MoneyMooring`,
    description: hub.description,
    canonical,
    schema: [schema]
  })}
<body class="category-page hub-page" data-hub="${escapeHtml(hub.key)}">
<a class="skip-link" href="#main-content">Skip to content</a>
<span class="harbor-line" aria-hidden="true"></span>
${header()}
<main id="main-content" tabindex="-1">
  <section class="article-hero hub-hero">
    <div class="wrap">
      <nav class="breadcrumbs" aria-label="Breadcrumb">
        <ol><li><a href="/">Home</a></li><li aria-current="page">${escapeHtml(hub.title)}</li></ol>
      </nav>
      <span class="tag">${escapeHtml(hub.short)}</span>
      <h1>${escapeHtml(hub.title)}</h1>
      <p class="byline">${escapeHtml(hub.description)}</p>
      <figure class="category-visual">
        <img src="${hub.image}" alt="${escapeHtml(hub.alt)}" width="1536" height="1024" decoding="async">
      </figure>
    </div>
  </section>
  <section class="hub-intro wrap" aria-labelledby="hub-guides-title">
    <div class="hub-intro-copy">
      <span class="eyebrow">Start here</span>
      <h2 id="hub-guides-title">Five practical guides</h2>
      <p>${escapeHtml(hub.intro)}</p>
    </div>
    <div class="hub-standard">
      <strong>Every guide includes</strong>
      <span>Worked examples</span>
      <span>Official sources</span>
      <span>Clear limitations</span>
    </div>
  </section>
  <section class="wrap hub-guides">
    <div class="hub-guide-grid">${cards}
    </div>
  </section>
  <section class="wrap hub-sources" aria-labelledby="hub-sources-title">
    <div>
      <span class="eyebrow">Source standard</span>
      <h2 id="hub-sources-title">Primary guidance first</h2>
      <p>We check official government and regulator materials before publication. Product terms and laws can change, so confirm current details before acting.</p>
    </div>
    <ul>${sources}</ul>
  </section>
</main>
${footer()}
${cookieBanner()}
</body>
</html>`;
}

function renderNewArticle(article) {
  const hub = hubByKey[article.hub];
  const canonical = `https://moneymooring.com/articles/${article.slug}.html`;
  const seoTitle = seoTitles[article.slug] || article.title;
  const visual = articleVisual(hub, `/articles/${article.slug}.html`);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: canonical,
    datePublished: isoDate,
    dateModified: isoDate,
    author: {
      "@type": "Organization",
      name: "MoneyMooring Editorial Team",
      url: "https://moneymooring.com/editorial-team.html"
    },
    reviewedBy: {
      "@type": "Organization",
      name: "MoneyMooring Editorial Team",
      url: "https://moneymooring.com/editorial-policy.html"
    },
    publisher: {
      "@type": "Organization",
      name: "MoneyMooring",
      url: "https://moneymooring.com/"
    },
    image: `https://moneymooring.com${visual.src}`
  };
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: article.faqs.map((faq) => ({
      "@type": "Question",
      name: faq[0],
      acceptedAnswer: {
        "@type": "Answer",
        text: stripTags(faq[1])
      }
    }))
  };
  const takeaways = article.takeaways.map((item) => `<li>${escapeHtml(item)}</li>`).join("");
  const sections = article.sections.map((section) => `<h2>${escapeHtml(section[0])}</h2>\n${section[1]}`).join("\n");
  const faqs = article.faqs.map((faq) =>
    `<details><summary>${escapeHtml(faq[0])}</summary><p>${escapeHtml(faq[1])}</p></details>`
  ).join("");
  const sources = article.sources.map((source) =>
    `<li><a href="${source[1]}" target="_blank" rel="noopener noreferrer">${escapeHtml(source[0])} ↗</a><span>Checked ${checkedDate}</span></li>`
  ).join("");

  return `${head({
    title: `${seoTitle} | MoneyMooring`,
    description: article.description,
    canonical,
    type: "article",
    cssPath: "../style.css",
    schema: [articleSchema, faqSchema]
  })}
<body class="article-page" data-hub="${escapeHtml(article.hub)}">
<a class="skip-link" href="#main-content">Skip to content</a>
<span class="harbor-line" aria-hidden="true"></span>
${header()}
<section class="article-hero" id="main-content" tabindex="-1">
  <div class="wrap">
    <nav class="breadcrumbs" aria-label="Breadcrumb">
      <ol>
        <li><a href="/">Home</a></li>
        <li><a href="${hub.path}">${escapeHtml(hub.title)}</a></li>
        <li aria-current="page">${escapeHtml(article.title)}</li>
      </ol>
    </nav>
    <a class="tag" href="${hub.path}">${escapeHtml(hub.short)}</a>
    <h1>${escapeHtml(article.title)}</h1>
    <p class="byline">By <b><a href="/editorial-team.html">MoneyMooring Editorial Team</a></b> · Updated ${checkedDate} · ${article.readTime} min read<span class="byline-note">Educational content · Official sources checked ${checkedDate}</span></p>
  </div>
</section>
<div class="wrap">
  <article class="article-body">
    <div class="disclosure">Editorial disclosure: this guide is educational and is not individual financial, legal, tax or insurance advice. MoneyMooring does not sell or recommend a specific financial product.</div>
    ${renderArticleVisual(hub, `/articles/${article.slug}.html`)}
    <div class="takeaways">
      <span class="eyebrow">Key takeaways</span>
      <ul>${takeaways}</ul>
    </div>
    <p>${escapeHtml(article.description)} The examples below are explanatory, not product quotes or promises of approval, savings, coverage or investment performance.</p>
    ${sections}
    <h2>Use the guide for a documented decision</h2>
    <p>Before acting on <em>${escapeHtml(article.title)}</em>, write down the facts that apply to your household: the current balance or coverage, the relevant deadline, the exact contract or account terms and the amount your budget can support. Then compare those facts with the official sources below and the latest documents from the institution, insurer, employer or government agency involved.</p>
    <ul class="checklist">
      <li>Save the dated statement, disclosure, policy or plan document used in the comparison.</li>
      <li>Separate confirmed terms from estimates, marketing language and assumptions.</li>
      <li>Record the question that remains unresolved and who can answer it.</li>
      <li>Recheck the numbers after a rate, balance, income, law or household change.</li>
    </ul>
    <div class="rsoc-slot" id="rsoc-article-primary" data-rsoc-unit="article-primary" data-rsoc-provider="" hidden aria-hidden="true"></div>
    <h2>Frequently asked questions</h2>
    <div class="faq">${faqs}</div>
    <section class="article-resources" aria-labelledby="sources-heading">
      <h2 id="sources-heading">Sources and methodology</h2>
      <p>Primary official materials used for this guide. Checked ${checkedDate}. Rules, limits and product terms can change.</p>
      <ul class="source-list" data-source-list>${sources}</ul>
    </section>
    <aside class="editorial-card" aria-label="Editorial standards">
      <div class="editorial-card-mark" aria-hidden="true">MM</div>
      <div>
        <strong>MoneyMooring Editorial Team</strong>
        <p>Prepared under our editorial standards and checked against the official sources listed above. No named individual expert review is claimed.</p>
        <a href="/editorial-team.html">Editorial process</a> · <a href="/editorial-policy.html">Read our standards</a>
      </div>
    </aside>
  </article>
</div>
<section class="related-guides" data-related-guides aria-labelledby="related-guides-title"></section>
${footer()}
${cookieBanner()}
</body>
</html>`;
}

function renderHome() {
  const canonical = "https://moneymooring.com/";
  const newest = newArticles.slice(-12).reverse();
  const topicCards = hubs.map((hub, index) => `
      <a class="topic-card" href="${hub.path}">
        <img src="${hub.image}" alt="" width="1536" height="1024" ${index > 1 ? 'loading="lazy"' : ""} decoding="async">
        <span class="topic-card-shade" aria-hidden="true"></span>
        <span class="topic-card-content"><b>${String(index + 1).padStart(2, "0")}</b><strong>${escapeHtml(hub.title)}</strong><em>5 in-depth guides →</em></span>
      </a>`).join("");
  const guideCards = newest.map((article) => {
    const hub = hubByKey[article.hub];
    return `<article class="card card-text">
        <div class="card-body">
          <span class="tag">${escapeHtml(hub.short)}</span>
          <h3><a href="/articles/${article.slug}.html">${escapeHtml(article.title)}</a></h3>
          <p>${escapeHtml(article.description)}</p>
          <a class="more" href="/articles/${article.slug}.html">Read the guide →</a>
        </div>
      </article>`;
  }).join("");
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "MoneyMooring",
    url: canonical,
    description: "Independent personal finance education for US readers across banking, budgeting, credit, debt, loans, mortgages, insurance and retirement."
  };

  return `${head({
    title: "MoneyMooring — Clear Personal Finance Guides for US Readers",
    description: "Fifty in-depth guides across ten personal finance topics, with worked examples, official sources and clear limitations.",
    canonical,
    schema: [schema]
  })}
<body class="home-page">
<a class="skip-link" href="#main-content">Skip to content</a>
<span class="harbor-line" aria-hidden="true"></span>
${header()}
<main id="main-content" tabindex="-1">
  <section class="hero">
    <div class="wrap">
      <div class="hero-copy">
        <span class="eyebrow">Personal finance, without the jargon</span>
        <h1>Make financial decisions with <em>clearer</em> information.</h1>
        <p>Fifty in-depth guides across banking, budgeting, credit, debt, mortgages, insurance and retirement—built from official sources and worked examples.</p>
        <div class="hero-ctas">
          <a class="btn btn-solid" href="#topics">Explore the topics</a>
          <a class="btn btn-ghost" href="/editorial-policy.html">How we work</a>
        </div>
        <div class="hero-stats" aria-label="Publication facts">
          <div><b>50</b><span>in-depth guides</span></div>
          <div><b>10</b><span>structured topic hubs</span></div>
          <div><b>Primary</b><span>official sources first</span></div>
        </div>
      </div>
      <figure class="hero-art">
        <img src="/assets/hero-editorial-v1.jpg" alt="Editorial finance desk with notebook, charts, coins and compass" width="1536" height="1024" fetchpriority="high" decoding="async">
      </figure>
    </div>
  </section>
  <section class="trust" aria-label="Editorial commitments">
    <div class="wrap">
      <div><span aria-hidden="true">✓</span> Official sources checked and dated</div>
      <div><span aria-hidden="true">✓</span> No lender, insurer or adviser relationship</div>
      <div><span aria-hidden="true">✓</span> No fake offers or guaranteed outcomes</div>
    </div>
  </section>
  <section class="section topics-section" id="topics">
    <div class="wrap">
      <div class="section-heading">
        <div><span class="eyebrow">Browse by decision</span><h2>Ten focused money topics</h2></div>
        <p>Start with the section closest to the decision in front of you. Each hub now includes five substantial, source-checked guides.</p>
      </div>
      <div class="topics-grid">${topicCards}
      </div>
    </div>
  </section>
  <section class="section section-featured" id="guides">
    <div class="wrap">
      <div class="section-heading compact"><div><span class="eyebrow">New cornerstone guide</span><h2>Deposit insurance, decoded</h2></div></div>
      <article class="featured">
        <a class="featured-cover" href="/articles/fdic-deposit-insurance-explained.html">
          <img src="/assets/topic-savings-v1.jpg" alt="Savings vessel and planning notebook in soft window light" width="1536" height="1024" loading="lazy" decoding="async">
        </a>
        <div class="featured-body">
          <span class="tag">Banking</span>
          <h2><a href="/articles/fdic-deposit-insurance-explained.html">FDIC Deposit Insurance: Coverage Rules and Common Mistakes</a></h2>
          <p>The standard amount is not simply “per account.” See how depositor, bank and ownership category work together.</p>
          <a class="more" href="/articles/fdic-deposit-insurance-explained.html">Read the guide →</a>
        </div>
      </article>
    </div>
  </section>
  <section class="section latest-section">
    <div class="wrap">
      <div class="section-heading compact"><div><span class="eyebrow">Published ${checkedDate}</span><h2>Latest guides</h2></div><a href="#topics">View all topics ↑</a></div>
      <div class="grid">${guideCards}
      </div>
    </div>
  </section>
  <section class="method">
    <div class="wrap">
      <div><span class="eyebrow">Editorial method</span><h2>Useful before comprehensive</h2></div>
      <p>We publish a smaller number of complete, source-checked guides before expanding a topic. MoneyMooring does not publish placeholder pages, invented offers or promises of approval, savings or performance.</p>
      <a class="btn btn-solid" href="/editorial-policy.html">Read our standards</a>
    </div>
  </section>
</main>
${footer()}
${cookieBanner()}
</body>
</html>`;
}

function extractFaqs(html) {
  const block = html.match(/<div class="faq">([\s\S]*?)<\/div>/);
  if (!block) return [];
  return [...block[1].matchAll(/<details><summary>([\s\S]*?)<\/summary><p>([\s\S]*?)<\/p><\/details>/g)]
    .map((match) => [stripTags(match[1]), stripTags(match[2])]);
}

const existingEvergreenReplacements = {
  "high-yield-savings-accounts.html": [
    [
      `<p>If your emergency fund is sitting in a checking account or a standard savings account at a large national bank, there is a good chance it is earning close to nothing. The national average savings rate has hovered well under half a percent for years, while online banks routinely pay several full percentage points more for exactly the same product: an insured deposit account.</p>`,
      `<p>If your emergency fund sits in a low-yield checking or savings account, compare its current APY with insured alternatives. Online and branch institutions can price deposits differently, but the account fee, balance rules, transfer access and insurance status matter alongside the headline APY.</p>`
    ],
    [
      `<p>On a $20,000 emergency fund, the difference between a 0.05% branch account and a competitive high-yield account is hundreds of dollars a year — for filling out one online form. This guide explains how these accounts work, how to compare them, and where the catches hide.</p>`,
      `<p>Even a small APY gap compounds across a larger cash balance. The worked table below uses fixed hypothetical APYs only to show the calculation; it is not a current market quote.</p>`
    ],
    [
      `<tr><th>Balance</th><th>0.05% branch average</th><th>~4.00% competitive HYSA</th><th>Difference per year</th></tr>`,
      `<tr><th>Balance</th><th>Illustrative 0.05% APY</th><th>Illustrative 4.00% APY</th><th>Illustrative difference</th></tr>`
    ]
  ],
  "cd-vs-savings-account.html": [
    [
      `<li>CDs shine when rates are expected to fall — you freeze today’s yield; savings accounts win when rates rise or money may be needed.</li>`,
      `<li>A CD can preserve a quoted rate for its term; a savings account preserves access but its APY can change.</li>`
    ],
    [
      `<li>Early withdrawal penalties of 3–12 months of interest can erase the CD’s entire advantage — match terms to real timelines.</li>`,
      `<li>Early-withdrawal penalties vary by institution and term and can erase the rate advantage — read the account agreement before funding.</li>`
    ],
    [
      `<li><strong>Rates are peaking or expected to decline.</strong> Locking a multi-year rate before cuts is the classic CD play — it converts a temporary rate environment into a guaranteed multi-year return.</li>`,
      `<li><strong>You value a fixed quoted rate.</strong> A CD preserves the stated rate until maturity, subject to the agreement and any early-withdrawal terms.</li>`
    ],
    [
      `<li><strong>Rates are rising.</strong> Floating APYs capture each increase; a locked CD watches from below.</li>`,
      `<li><strong>You value flexibility.</strong> A savings APY can move in either direction, while the money remains accessible under the account terms.</li>`
    ]
  ],
  "emergency-fund-how-much.html": [
    [
      `As a bonus, competitive accounts currently pay meaningful interest, so a full fund quietly earns a few hundred dollars a year.`,
      `An insured savings account may also earn interest, but compare the current APY, fees and transfer rules rather than assuming a particular return.`
    ]
  ],
  "cash-back-credit-cards-guide.html": [
    [
      `<p><strong>Flat-rate cards</strong> pay the same on everything — the competitive standard is around 2%, with no categories to track, no quarterly activations, no caps. Spend $2,500 a month and a 2% card returns $600 a year for zero effort.</p>`,
      `<p><strong>Flat-rate cards</strong> apply one rewards rate across eligible purchases, while terms, exclusions and redemption rules vary. As a purely illustrative calculation, $2,500 of eligible monthly spending at 2% would equal $600 over a year before fees or interest; verify the actual agreement.</p>`
    ]
  ],
  "improve-credit-score-fast.html": [
    [
      `<li>Get total and per-card utilization below 30%; the strongest scores typically sit below 10%.</li>`,
      `<li>Lower reported revolving utilization can help some scoring models, but no single percentage guarantees a particular score change.</li>`
    ]
  ],
  "debt-consolidation-loans.html": [
    [
      `<li>Consolidation works when the new APR is meaningfully below your blended card APR — usually requiring a credit score above ~670.</li>`,
      `<li>Consolidation works only when the new APR and fees improve the full repayment comparison; a credit score alone does not determine the result.</li>`
    ],
    [
      `<li>Origination fees of 1–10% are common and must be included in any comparison; compare APR, not the interest rate.</li>`,
      `<li>An origination fee can reduce the cash delivered and must be included in the comparison; use the disclosed APR and total repayment.</li>`
    ],
    [
      `<p>The average credit card APR has sat above 20% for several years. Against that backdrop, a debt consolidation loan — a personal loan used to pay off several card balances at once — looks like an obvious win: one fixed payment, a lower rate, a defined end date. Often it is. But consolidation is a refinancing tool, not a debt reduction tool, and the difference matters more than most marketing admits.</p>`,
      `<p>A debt consolidation loan replaces several balances with one installment loan. It may simplify payment timing or reduce borrowing cost, but only the disclosed APR, fees, term and total repayment can show whether a specific offer improves the situation. Consolidation is refinancing, not debt forgiveness.</p>`
    ],
    [
      `<p>Personal loan pricing is driven overwhelmingly by credit score, then by income and existing debt load. Indicative APR ranges look roughly like this:</p>`,
      `<p>Personal loan pricing varies by lender, credit profile, income, debt load, term and fee structure. The table below is a comparison checklist, not a rate forecast:</p>`
    ],
    [
      `<table>
      <tr><th>Credit band</th><th>Typical APR range</th><th>Does consolidation usually beat 22–25% card APR?</th></tr>
      <tr><td>Excellent (740+)</td><td>~8–14%</td><td>Yes, clearly</td></tr>
      <tr><td>Good (670–739)</td><td>~12–19%</td><td>Usually yes</td></tr>
      <tr><td>Fair (600–669)</td><td>~18–28%</td><td>Marginal — do the math carefully</td></tr>
      <tr><td>Poor (below 600)</td><td>~26–36%</td><td>Rarely</td></tr>
    </table>`,
      `<table>
      <tr><th>Compare</th><th>Why it matters</th><th>Question to answer</th></tr>
      <tr><td>APR</td><td>Combines the interest rate with certain finance charges</td><td>Is it below the weighted cost of the debts being replaced?</td></tr>
      <tr><td>Net proceeds</td><td>A deducted fee can leave less cash than the face amount</td><td>Will the loan actually pay every target balance?</td></tr>
      <tr><td>Term and total repayment</td><td>A lower payment can still cost more over a longer term</td><td>What is the total of all scheduled payments?</td></tr>
      <tr><td>Prepayment and late terms</td><td>Contract details affect flexibility and downside</td><td>What happens if payment timing changes?</td></tr>
    </table>`
    ]
  ],
  "personal-loans-explained.html": [
    [
      `<ul><li>Personal loans are unsecured fixed-rate installment loans of typically $1,000–$50,000 over 2–7 years.</li><li>APR spreads are enormous: roughly 8% for excellent credit to 36% at the legal ceiling many lenders charge weaker profiles.</li><li>Pre-qualify with soft pulls at 3–5 lenders before any formal application — spreads between offers routinely reach several points.</li><li>The monthly payment is a design choice: shorter terms cost less in total but more per month. Pick deliberately.</li></ul>`,
      `<ul><li>Many personal loans are unsecured installment loans with fixed payments, but amounts, terms and pricing vary by lender.</li><li>Compare APR, fees, net proceeds, monthly payment and total repayment rather than relying on a credit-score range.</li><li>Where available, prequalification can help compare estimated terms, but it is not approval and the final offer can change.</li><li>A longer term can lower the monthly payment while increasing total cost.</li></ul>`
    ],
    [
      `<p>A personal loan delivers a lump sum — usually $1,000 to $50,000, sometimes $100,000 — repaid in equal monthly installments over two to seven years at a fixed APR. Most are unsecured: no collateral, which is why your credit profile does nearly all the pricing work. Funding is fast, often one to three business days from approval.</p>`,
      `<p>A personal loan generally delivers a lump sum repaid in scheduled installments. Many products are unsecured, while available amounts, terms, funding time, APR and fees depend on the lender and application. Read the final disclosures before treating an estimated offer as available funds.</p>`
    ],
    [
      `<h2>What rates actually look like</h2>
<table>
<tr><th>Credit band</th><th>Indicative APR range</th></tr>
<tr><td>Excellent (740+)</td><td>~8–14%</td></tr>
<tr><td>Good (670–739)</td><td>~12–19%</td></tr>
<tr><td>Fair (600–669)</td><td>~18–28%</td></tr>
<tr><td>Poor (below 600)</td><td>~26–36%</td></tr>
</table>
<p>Beyond the score, lenders weigh debt-to-income ratio (most want total debt payments below ~40% of gross income), income stability, and existing relationship — banks and credit unions often shave rates for their own customers.</p>`,
      `<h2>What changes the final offer</h2>
<table>
<tr><th>Factor</th><th>What to compare</th></tr>
<tr><td>Credit and payment history</td><td>How the lender describes eligibility and pricing</td></tr>
<tr><td>Income and existing obligations</td><td>The payment’s fit within the full household budget</td></tr>
<tr><td>Loan amount and term</td><td>Monthly payment and total repayment on identical assumptions</td></tr>
<tr><td>Fees and optional products</td><td>APR, net proceeds and whether add-ons can be declined</td></tr>
</table>
<p>A credit score is only one input. Lenders may also evaluate income, existing obligations, term, amount and their own underwriting rules.</p>`
    ]
  ],
  "how-much-house-can-you-afford.html": [
    [
      `<li>A lender’s pre-approval is the maximum they’ll lend — not what you can comfortably afford. The two numbers routinely differ by $100,000+.</li>`,
      `<li>A lender’s pre-approval is an underwriting estimate, not a household comfort target. Build the purchase limit from your own cash flow.</li>`
    ],
    [
      `<li>The classic guardrail: housing under 28% of gross income, total debts under 36% — with your real budget built from take-home pay.</li>`,
      `<li>Ratio benchmarks can be useful for orientation, but underwriting rules and a sustainable take-home budget are not the same test.</li>`
    ],
    [
      `<li>The mortgage is only 65–80% of true ownership cost once taxes, insurance, maintenance and utilities are counted.</li>`,
      `<li>Principal and interest are only part of ownership cost; include taxes, insurance, association charges, maintenance and utilities.</li>`
    ]
  ],
  "car-insurance-for-seniors.html": [
    [
      `<p>Car insurance follows a U-shaped curve over a lifetime. Rates are punishing for teenagers, fall steadily through your 30s and 40s, hit their lowest point in your 50s and early 60s — and then begin climbing again. By your mid-70s, premiums can look uncomfortably close to what a driver in their late 20s pays.</p>`,
      `<p>Age can be one rating factor where state law permits, but a premium also reflects location, vehicle, driving record, mileage, coverage limits, deductibles and insurer methodology. Compare matched quotes rather than assuming a universal age curve.</p>`
    ]
  ],
  "home-insurance-what-it-covers.html": [
    [
      `replacement cost (ideally with extended replacement cost of 125–150% for post-disaster price spikes) is the setting that determines whether you can actually rebuild.`,
      `replacement-cost terms and any extended-coverage amount can materially affect whether the available limit is sufficient to rebuild. Confirm the dollar limit and contract language.`
    ]
  ],
  "term-vs-whole-life-insurance.html": [
    [
      `builds “cash value” that grows at a modest guaranteed rate plus potential dividends, which you can borrow against or surrender the policy to collect.`,
      `may build contractual cash value subject to the policy’s guarantees, costs and any non-guaranteed elements. Loans and surrender can reduce benefits or create tax consequences.`
    ]
  ]
};

const existingArticleDescriptions = {
  "high-yield-savings-accounts.html": "How to compare savings APYs, fees, access and deposit insurance without relying on a promotional headline.",
  "cd-vs-savings-account.html": "Compare certificates of deposit and savings accounts by liquidity, rate structure, maturity terms and early-withdrawal costs.",
  "emergency-fund-how-much.html": "Set an emergency savings target from essential expenses, household risks and realistic monthly contributions.",
  "improve-credit-score-fast.html": "How payment history, reported balances, account age, applications and credit report errors can affect credit scores over time.",
  "balance-transfer-credit-cards.html": "How balance transfer offers, fees, promotional timelines and payoff math fit together before an application.",
  "cash-back-credit-cards-guide.html": "Compare cash-back credit card rewards, annual fees, interest costs, category limits and redemption rules before applying.",
  "avalanche-vs-snowball.html": "Compare avalanche and snowball debt payoff methods with a worked example and a practical hybrid approach.",
  "debt-consolidation-loans.html": "How to compare debt consolidation APR, fees, net proceeds, term and total repayment without relying on score-based rate promises.",
  "personal-loans-explained.html": "How personal loans work and how to compare APR, fees, net proceeds, payments, term and prequalification.",
  "fha-vs-conventional-loans.html": "Compare FHA and conventional mortgages by eligibility, down payment, mortgage insurance and total cost.",
  "how-much-house-can-you-afford.html": "Build a home-buying budget from take-home cash flow, full ownership costs, reserves and lender disclosures.",
  "mortgage-refinance-guide.html": "Evaluate mortgage refinancing with closing costs, monthly savings, break-even time, remaining term and total repayment.",
  "car-insurance-for-seniors.html": "Compare auto insurance for older drivers using matched coverage, deductibles, discounts and state-specific rules.",
  "home-insurance-what-it-covers.html": "What homeowners insurance commonly covers, important exclusions and questions to ask about limits and endorsements.",
  "term-vs-whole-life-insurance.html": "Compare term and whole life insurance by coverage period, premiums, cash value, flexibility and policy terms."
};

function patchExistingArticle(file) {
  const basename = path.basename(file);
  const hubKey = articleAssignments[basename];
  const newTitle = existingArticleTitles[basename];
  const seoTitle = seoTitles[basename.replace(/\.html$/, "")] || newTitle;
  if (!hubKey || !newTitle) throw new Error(`Missing assignment or title for ${basename}`);
  const hub = hubByKey[hubKey];
  const visualData = articleVisual(hub, `/articles/${basename}`);
  let html = fs.readFileSync(file, "utf8");
  const description = existingArticleDescriptions[basename]
    || (html.match(/<meta name="description" content="([^"]+)">/) || [])[1]
    || hub.description;
  const canonical = `https://moneymooring.com/articles/${basename}`;
  const faqs = extractFaqs(html);
  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: newTitle,
    description,
    mainEntityOfPage: canonical,
    datePublished: (html.match(/"datePublished":"([^"]+)"/) || [])[1] || "2026-07-19",
    dateModified: isoDate,
    author: {
      "@type": "Organization",
      name: "MoneyMooring Editorial Team",
      url: "https://moneymooring.com/editorial-team.html"
    },
    publisher: {
      "@type": "Organization",
      name: "MoneyMooring",
      url: "https://moneymooring.com/"
    },
    image: `https://moneymooring.com${visualData.src}`
  };
  const faqSchema = faqs.length ? {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq[0],
      acceptedAnswer: { "@type": "Answer", text: faq[1] }
    }))
  } : null;
  const schemaBlock = `<script type="application/ld+json">${JSON.stringify(articleSchema)}</script>${faqSchema ? `\n<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>` : ""}`;

  html = html
    .replace(/<title>[\s\S]*?<\/title>/, `<title>${escapeHtml(seoTitle)} | MoneyMooring</title>`)
    .replace(/<meta name="description" content="[^"]+">/, `<meta name="description" content="${escapeHtml(description)}">`)
    .replace(/<meta property="og:title" content="[^"]+">/, `<meta property="og:title" content="${escapeHtml(seoTitle)} | MoneyMooring">`)
    .replace(/<meta property="og:description" content="[^"]+">/, `<meta property="og:description" content="${escapeHtml(description)}">`)
    .replace(/<meta name="twitter:title" content="[^"]+">/, `<meta name="twitter:title" content="${escapeHtml(seoTitle)} | MoneyMooring">`)
    .replace(/<meta name="twitter:description" content="[^"]+">/, `<meta name="twitter:description" content="${escapeHtml(description)}">`)
    .replace(/<script type="application\/ld\+json">[\s\S]*?"@type":"Article"[\s\S]*?<\/script>(?:\s*<script type="application\/ld\+json">[\s\S]*?"@type":"FAQPage"[\s\S]*?<\/script>)?/, schemaBlock)
    .replace(/<body class="article-page"(?:\s+data-hub="[^"]+")?>/, `<body class="article-page" data-hub="${escapeHtml(hubKey)}">`)
    .replace(/<header class="masthead"[\s\S]*?<\/header>/, header())
    .replace(/<li><a href="\/">Home<\/a><\/li>\s*<li><a href="[^"]+">[^<]+<\/a><\/li>/, `<li><a href="/">Home</a></li>\n        <li><a href="${hub.path}">${escapeHtml(hub.title)}</a></li>`)
    .replace(/<li aria-current="page">[\s\S]*?<\/li>/, `<li aria-current="page">${escapeHtml(newTitle)}</li>`)
    .replace(/<a class="tag" href="[^"]+">[^<]+<\/a>/, `<a class="tag" href="${hub.path}">${escapeHtml(hub.short)}</a>`)
    .replace(/<h1>[\s\S]*?<\/h1>/, `<h1>${escapeHtml(newTitle)}</h1>`)
    .replace(/Updated [A-Z][a-z]+ \d{1,2}, \d{4} · \d+ min read/, `Updated ${checkedDate} · 8 min read`)
    .replace(/<footer>[\s\S]*?<\/footer>/, footer())
    .replace(/<p>This educational guide is human-reviewed\.[\s\S]*?<\/p>/, `<p>Prepared under our editorial standards and checked against the official sources listed on this page. No named individual expert review is claimed.</p>`);

  for (const [from, to] of existingEvergreenReplacements[basename] || []) {
    html = html.replace(from, to);
  }

  const articlePath = `/articles/${basename}`;
  const visual = renderArticleVisual(hub, articlePath);
  if (html.includes('class="article-visual"')) {
    html = html.replace(/<figure class="article-visual">[\s\S]*?<\/figure>/, visual);
  } else {
    html = html.replace(
      /(<div class="disclosure">[\s\S]*?<\/div>)/,
      `$1\n    ${visual}`
    );
  }

  fs.writeFileSync(file, html);
}

function patchSharedChrome() {
  const rootPages = fs.readdirSync(root)
    .filter((name) => name.endsWith(".html") && !name.startsWith("google") && name !== "index.html")
    .map((name) => path.join(root, name));
  for (const file of rootPages) {
    if (hubs.some((hub) => path.basename(hub.path) === path.basename(file))) continue;
    let html = fs.readFileSync(file, "utf8");
    html = html
      .replace(/<header class="masthead"[\s\S]*?<\/header>/, header())
      .replace(/<footer>[\s\S]*?<\/footer>/, footer());
    fs.writeFileSync(file, html);
  }
}

function patchSiteJs() {
  const guideLibrary = Object.fromEntries(hubs.map((hub) => [
    hub.key,
    hub.articles.map((article) => [article[0], cleanPath(article[1])])
  ]));
  const sourceLibrary = Object.fromEntries(hubs.map((hub) => [hub.key, hub.sources]));
  const hubPaths = Object.fromEntries(hubs.map((hub) => [hub.key, cleanPath(hub.path)]));
  const libraryBlock = `var GUIDE_LIBRARY = ${JSON.stringify(guideLibrary, null, 4)};\n\n  var SOURCE_LIBRARY = ${JSON.stringify(sourceLibrary, null, 4)};\n\n  var HUB_PATHS = ${JSON.stringify(hubPaths, null, 4)};\n\n  `;
  const file = path.join(root, "site.js");
  let js = fs.readFileSync(file, "utf8");
  js = js
    .replace(/var GUIDE_LIBRARY = \{[\s\S]*?\n  function normalizePath/, `${libraryBlock}function normalizePath`)
    .replace(/var sources = SOURCE_LIBRARY\[category\] \|\| \[\];/, `if (list.children.length) return;\n    var sources = SOURCE_LIBRARY[category] || [];`)
    .replace(/var categoryPath = "\/" \+ category\.toLowerCase\(\)\.replace\(\/\\s\+\/g, "-"\) \+ "\.html";/, `var categoryPath = HUB_PATHS[category] || "/";`)
    .replace(/var category = categoryNode \? categoryNode\.textContent\.trim\(\) : "";/, `var category = document.body.getAttribute("data-hub") || (categoryNode ? categoryNode.textContent.trim() : "");`);
  fs.writeFileSync(file, js);
}

function walkHtml(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    if ([".git", "content", "docs", "scripts"].includes(entry.name)) return [];
    if (entry.isDirectory()) return walkHtml(full);
    return entry.isFile() && entry.name.endsWith(".html") && !entry.name.startsWith("google") ? [full] : [];
  });
}

function writeSitemap() {
  const files = walkHtml(root).sort((a, b) => {
    if (path.basename(a) === "index.html") return -1;
    if (path.basename(b) === "index.html") return 1;
    return a.localeCompare(b);
  });
  const urls = files.map((file) => {
    const relative = path.relative(root, file).replaceAll(path.sep, "/");
    const loc = relative === "index.html"
      ? "https://moneymooring.com/"
      : publicUrl(`/${relative}`);
    return `  <url><loc>${loc}</loc><lastmod>${isoDate}</lastmod></url>`;
  });
  fs.writeFileSync(path.join(root, "sitemap.xml"), `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${urls.join("\n")}\n</urlset>\n`);
}

function writeContentMap() {
  const rows = hubs.flatMap((hub) =>
    hub.articles.map((article) => {
      const isNew = newArticles.some((item) => `/articles/${item.slug}.html` === article[1]);
      return `| ${hub.title} | [${article[0]}](..${cleanPath(article[1])}) | ${isNew ? "New cornerstone" : "Existing, reassigned"} |`;
    })
  );
  fs.writeFileSync(path.join(root, "docs", "content-map.md"), `# MoneyMooring content map\n\nUpdated ${checkedDate}.\n\n| Hub | Article | Status |\n|---|---|---|\n${rows.join("\n")}\n\nAll ten hubs include five real, linked guides. No placeholder cards are published.\n`);
}

function normalizePublishedUrls() {
  for (const file of walkHtml(root)) {
    const relative = path.relative(root, file).replaceAll(path.sep, "/");
    let html = fs.readFileSync(file, "utf8");
    html = html
      .replace(
        /https:\/\/moneymooring\.com\/([^"'<>\s]+?)\.html(?=["'<>\s])/g,
        "https://moneymooring.com/$1"
      )
      .replace(
        /href="((?:\/|\.\.\/|\.\/)?[^":?#]+?)\.html([?#][^"]*)?"/g,
        (_, target, suffix = "") => `href="${target}${suffix}"`
      );
    if (relative === "index.html") {
      html = html.replaceAll("https://moneymooring.com/index", "https://moneymooring.com/");
    }
    fs.writeFileSync(file, html);
  }
}

function writeRedirects() {
  const rules = walkHtml(root).map((file) => {
    const relative = path.relative(root, file).replaceAll(path.sep, "/");
    if (relative === "index.html") return "/index.html / 301!";
    return `/${relative} ${cleanPath(`/${relative}`)} 301!`;
  });
  fs.writeFileSync(path.join(root, "_redirects"), `${rules.join("\n")}\n`);
}

for (const hub of hubs) {
  fs.writeFileSync(path.join(root, hub.path.slice(1)), renderHub(hub));
}

for (const article of newArticles) {
  fs.writeFileSync(path.join(root, "articles", `${article.slug}.html`), renderNewArticle(article));
}

for (const basename of Object.keys(existingArticleTitles)) {
  patchExistingArticle(path.join(root, "articles", basename));
}

fs.writeFileSync(path.join(root, "index.html"), renderHome());
patchSharedChrome();
patchSiteJs();
writeSitemap();
writeContentMap();
normalizePublishedUrls();
writeRedirects();

console.log(`Built ${hubs.length} hubs, ${newArticles.length} new articles and a ${hubs.reduce((sum, hub) => sum + hub.articles.length, 0)}-guide content map.`);
