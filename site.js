(function () {
  "use strict";

  var GUIDE_LIBRARY = {
    "Savings & banking": [
        [
            "High-Yield Savings Accounts: How to Compare APYs and Fees",
            "/articles/high-yield-savings-accounts"
        ],
        [
            "CDs vs. Savings Accounts: Liquidity, Rates and Trade-Offs",
            "/articles/cd-vs-savings-account"
        ],
        [
            "FDIC Deposit Insurance: Coverage Rules and Common Mistakes",
            "/articles/fdic-deposit-insurance-explained"
        ],
        [
            "Checking Account Fees: A Practical Comparison Guide",
            "/articles/checking-account-fees-guide"
        ],
        [
            "Joint Bank Accounts and Beneficiaries: Ownership and FDIC Basics",
            "/articles/joint-bank-accounts-beneficiaries"
        ]
    ],
    "Budgeting & emergency funds": [
        [
            "How to Build a Monthly Budget That Matches Your Pay Cycle",
            "/articles/how-to-build-a-monthly-budget"
        ],
        [
            "Sinking Funds: A Practical System for Irregular Expenses",
            "/articles/sinking-funds-guide"
        ],
        [
            "Emergency Funds: How to Set a Practical Savings Target",
            "/articles/emergency-fund-how-much"
        ],
        [
            "How to Budget With Variable Income",
            "/articles/variable-income-budget"
        ],
        [
            "Bill Calendar Guide: Match Due Dates to Your Pay Cycle",
            "/articles/bill-calendar-guide"
        ]
    ],
    "Credit scores & reports": [
        [
            "How to Dispute Errors on Your Credit Reports",
            "/articles/how-to-dispute-credit-report-errors"
        ],
        [
            "Credit Freezes: What They Block and How to Manage Them",
            "/articles/credit-freeze-guide"
        ],
        [
            "How Credit Scores Change: Fast and Slow Factors",
            "/articles/improve-credit-score-fast"
        ],
        [
            "Annual Credit Reports: How to Request and Review All Three",
            "/articles/annual-credit-reports-guide"
        ],
        [
            "Credit Utilization Explained: Balances, Limits and Reporting Dates",
            "/articles/credit-utilization-explained"
        ]
    ],
    "Credit cards": [
        [
            "Credit Card APR and Interest: A Statement-by-Statement Guide",
            "/articles/credit-card-apr-interest-explained"
        ],
        [
            "Balance Transfer Credit Cards: Fees, Timelines and Payoff Planning",
            "/articles/balance-transfer-credit-cards"
        ],
        [
            "Cash-Back Credit Cards: Rewards, Fees and Interest",
            "/articles/cash-back-credit-cards-guide"
        ],
        [
            "Credit Card Grace Periods: How Purchase Interest Can Be Avoided",
            "/articles/credit-card-grace-period"
        ],
        [
            "Minimum Credit Card Payments: Cost, Timing and a Payoff Plan",
            "/articles/minimum-credit-card-payment-cost"
        ]
    ],
    "Debt management": [
        [
            "Debt-to-Income Ratio: Calculation, Uses and Limits",
            "/articles/debt-to-income-ratio"
        ],
        [
            "Debt Avalanche vs. Debt Snowball: How the Two Payoff Methods Compare",
            "/articles/avalanche-vs-snowball"
        ],
        [
            "Debt Consolidation Loans: Benefits, Fees and Risks",
            "/articles/debt-consolidation-loans"
        ],
        [
            "Debt Collection Validation Notices: A Response Checklist",
            "/articles/debt-collection-validation-rights"
        ],
        [
            "Nonprofit Credit Counseling and Debt Management Plans",
            "/articles/nonprofit-credit-counseling-guide"
        ]
    ],
    "Personal loans": [
        [
            "Secured vs. Unsecured Personal Loans: Risk and Cost",
            "/articles/secured-vs-unsecured-personal-loans"
        ],
        [
            "Personal Loan APR and Fees: How to Compare Offers",
            "/articles/personal-loan-apr-fees"
        ],
        [
            "Personal Loans: Rates, Fees and Prequalification",
            "/articles/personal-loans-explained"
        ],
        [
            "Personal Loan Prequalification: What to Compare Before Applying",
            "/articles/personal-loan-prequalification"
        ],
        [
            "Personal Loan Payment Calculator: Formula, Fees and Total Cost",
            "/articles/personal-loan-payment-calculator"
        ]
    ],
    "Mortgages & home buying": [
        [
            "FHA vs. Conventional Loans: Down Payments, Insurance and Eligibility",
            "/articles/fha-vs-conventional-loans"
        ],
        [
            "How Much House Can You Afford? A Practical Budget Framework",
            "/articles/how-much-house-can-you-afford"
        ],
        [
            "Mortgage Refinancing: Costs, Break-Even Math and Timing",
            "/articles/mortgage-refinance-guide"
        ],
        [
            "Mortgage Closing Costs: Read the Loan Estimate and Cash to Close",
            "/articles/mortgage-closing-costs"
        ],
        [
            "Mortgage Preapproval Documents and Questions to Prepare",
            "/articles/mortgage-preapproval-documents"
        ]
    ],
    "Auto insurance": [
        [
            "Auto Insurance Coverage Types: Liability, Collision and Comprehensive",
            "/articles/auto-insurance-coverage-types"
        ],
        [
            "Auto Insurance Deductibles and Quote Comparison",
            "/articles/auto-insurance-deductibles-quotes"
        ],
        [
            "Car Insurance for Older Drivers: Coverage and Quote Comparison",
            "/articles/car-insurance-for-seniors"
        ],
        [
            "Uninsured and Underinsured Motorist Coverage",
            "/articles/uninsured-underinsured-motorist-coverage"
        ],
        [
            "Auto Insurance Claim Checklist After a Crash",
            "/articles/auto-insurance-claim-checklist"
        ]
    ],
    "Home & life insurance": [
        [
            "Homeowners Insurance: Coverage, Limits and Common Gaps",
            "/articles/home-insurance-what-it-covers"
        ],
        [
            "Renters Insurance: Property, Liability and Loss-of-Use Coverage",
            "/articles/renters-insurance-guide"
        ],
        [
            "Term vs. Whole Life Insurance: Costs and Trade-Offs",
            "/articles/term-vs-whole-life-insurance"
        ],
        [
            "Flood Insurance Basics: Building, Contents and Waiting Periods",
            "/articles/flood-insurance-basics"
        ],
        [
            "How Much Life Insurance? A Needs-Based Planning Framework",
            "/articles/life-insurance-needs-framework"
        ]
    ],
    "Retirement, taxes & benefits": [
        [
            "401(k) Basics: Contributions, Matching and Vesting",
            "/articles/401k-basics"
        ],
        [
            "Traditional vs. Roth IRA: Tax Timing and Withdrawal Rules",
            "/articles/traditional-vs-roth-ira"
        ],
        [
            "Social Security Retirement Benefits: Eligibility and Claiming Age",
            "/articles/social-security-retirement-basics"
        ],
        [
            "401(k) Employer Match and Vesting: Read Your Plan",
            "/articles/employer-match-vesting"
        ],
        [
            "Required Minimum Distributions: Accounts, Timing and Calculation",
            "/articles/required-minimum-distributions-basics"
        ]
    ]
};

  var SOURCE_LIBRARY = {
    "Savings & banking": [
        [
            "FDIC deposit insurance resources",
            "https://www.fdic.gov/resources/deposit-insurance/"
        ],
        [
            "CFPB bank account resources",
            "https://www.consumerfinance.gov/consumer-tools/bank-accounts/"
        ]
    ],
    "Budgeting & emergency funds": [
        [
            "CFPB Your Money, Your Goals toolkit",
            "https://www.consumerfinance.gov/consumer-tools/educator-tools/your-money-your-goals/toolkit/"
        ],
        [
            "CFPB emergency fund guide",
            "https://www.consumerfinance.gov/an-essential-guide-to-building-an-emergency-fund/"
        ]
    ],
    "Credit scores & reports": [
        [
            "CFPB credit reports and scores",
            "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/"
        ],
        [
            "FTC identity theft recovery",
            "https://www.identitytheft.gov/"
        ]
    ],
    "Credit cards": [
        [
            "CFPB credit card resources",
            "https://www.consumerfinance.gov/consumer-tools/credit-cards/"
        ],
        [
            "Federal Reserve consumer credit information",
            "https://www.federalreserve.gov/consumerscommunities.htm"
        ]
    ],
    "Debt management": [
        [
            "CFPB debt collection resources",
            "https://www.consumerfinance.gov/consumer-tools/debt-collection/"
        ],
        [
            "CFPB debt-to-income explanation",
            "https://www.consumerfinance.gov/ask-cfpb/what-is-a-debt-to-income-ratio-en-1791/"
        ]
    ],
    "Personal loans": [
        [
            "CFPB personal installment loan fees",
            "https://www.consumerfinance.gov/ask-cfpb/do-personal-installment-loans-have-fees-en-2120/"
        ],
        [
            "CFPB APR explanation",
            "https://www.consumerfinance.gov/ask-cfpb/what-is-the-difference-between-a-loan-interest-rate-and-the-apr-en-733/"
        ]
    ],
    "Mortgages & home buying": [
        [
            "CFPB mortgage resources",
            "https://www.consumerfinance.gov/consumer-tools/mortgages/"
        ],
        [
            "HUD homebuyer resources",
            "https://www.hud.gov/helping-americans/loans"
        ]
    ],
    "Auto insurance": [
        [
            "NAIC auto insurance consumer guide",
            "https://content.naic.org/consumer/auto-insurance.htm"
        ],
        [
            "NAIC auto insurance topics",
            "https://content.naic.org/insurance-topics/auto-insurance"
        ]
    ],
    "Home & life insurance": [
        [
            "NAIC homeowners insurance resources",
            "https://content.naic.org/consumer/homeowners-insurance.htm"
        ],
        [
            "NAIC life insurance resources",
            "https://content.naic.org/consumer/life-insurance.htm"
        ]
    ],
    "Retirement, taxes & benefits": [
        [
            "IRS retirement plan resources",
            "https://www.irs.gov/retirement-plans"
        ],
        [
            "Social Security retirement benefits",
            "https://www.ssa.gov/retirement"
        ]
    ]
};

  var HUB_PATHS = {
    "Savings & banking": "/savings",
    "Budgeting & emergency funds": "/budgeting",
    "Credit scores & reports": "/credit-scores",
    "Credit cards": "/credit-cards",
    "Debt management": "/debt",
    "Personal loans": "/personal-loans",
    "Mortgages & home buying": "/mortgages",
    "Auto insurance": "/auto-insurance",
    "Home & life insurance": "/insurance",
    "Retirement, taxes & benefits": "/retirement-taxes-benefits"
};

  function normalizePath(value) {
    var path = (value || "/").split("?")[0].split("#")[0];
    if (path === "/index.html") return "/";
    return path.replace(/\.html$/, "").replace(/\/$/, "") || "/";
  }

  function setupHeader() {
    var header = document.querySelector("[data-site-header]");
    var toggle = document.querySelector("[data-menu-toggle]");
    var nav = document.getElementById("site-nav");
    if (!header || !toggle || !nav) return;

    function setOpen(open) {
      document.body.classList.toggle("nav-open", open);
      toggle.setAttribute("aria-expanded", String(open));
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    }

    toggle.addEventListener("click", function () {
      var open = toggle.getAttribute("aria-expanded") !== "true";
      setOpen(open);
      if (open) {
        var firstLink = nav.querySelector("a");
        if (firstLink) firstLink.focus();
      }
    });

    nav.addEventListener("click", function (event) {
      if (event.target.closest("a")) setOpen(false);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key !== "Escape" || !document.body.classList.contains("nav-open")) return;
      setOpen(false);
      toggle.focus();
    });

    window.addEventListener("resize", function () {
      if (window.innerWidth > 820) setOpen(false);
    });
  }

  function markCurrentNavigation() {
    var current = normalizePath(window.location.pathname);
    document.querySelectorAll(".masthead a[href]").forEach(function (link) {
      var destination;
      try {
        destination = new URL(link.getAttribute("href"), window.location.href);
      } catch (error) {
        return;
      }
      if (destination.origin !== window.location.origin) return;
      if (normalizePath(destination.pathname) === current && !link.classList.contains("wordmark")) {
        link.setAttribute("aria-current", "page");
      }
    });
  }

  function slugify(value) {
    return String(value || "")
      .toLowerCase()
      .replace(/[’'"]/g, "")
      .replace(/[^a-z0-9]+/g, "-")
      .replace(/^-+|-+$/g, "")
      .slice(0, 70);
  }

  function setupArticleToc(article) {
    var headings = Array.prototype.slice.call(article.querySelectorAll("h2"));
    if (headings.length < 4) return;

    var used = {};
    headings.forEach(function (heading, index) {
      var base = heading.id || slugify(heading.textContent) || "section-" + (index + 1);
      var id = base;
      var suffix = 2;
      while (used[id] || document.getElementById(id)) {
        id = base + "-" + suffix;
        suffix += 1;
      }
      used[id] = true;
      heading.id = id;
    });

    var details = document.createElement("details");
    details.className = "article-toc";
    details.open = window.innerWidth > 620;
    var summary = document.createElement("summary");
    summary.textContent = "In this guide";
    var list = document.createElement("ol");
    headings.forEach(function (heading) {
      var item = document.createElement("li");
      var link = document.createElement("a");
      link.href = "#" + heading.id;
      link.textContent = heading.textContent;
      item.appendChild(link);
      list.appendChild(item);
    });
    details.appendChild(summary);
    details.appendChild(list);

    var takeaways = article.querySelector(".takeaways");
    var disclosure = article.querySelector(".disclosure");
    if (takeaways) {
      takeaways.insertAdjacentElement("afterend", details);
    } else if (disclosure) {
      disclosure.insertAdjacentElement("afterend", details);
    } else {
      article.insertAdjacentElement("afterbegin", details);
    }
  }

  function setupTables(article) {
    article.querySelectorAll("table").forEach(function (table, index) {
      if (table.parentElement && table.parentElement.classList.contains("table-scroll")) return;
      var wrapper = document.createElement("div");
      wrapper.className = "table-scroll";
      wrapper.tabIndex = 0;
      wrapper.setAttribute("role", "region");
      wrapper.setAttribute("aria-label", "Scrollable comparison table " + (index + 1));
      table.parentNode.insertBefore(wrapper, table);
      wrapper.appendChild(table);
      var hint = document.createElement("p");
      hint.className = "table-scroll-hint";
      hint.textContent = "Swipe horizontally to view the full table.";
      wrapper.insertAdjacentElement("afterend", hint);
    });
  }

  function setupSources(category) {
    var list = document.querySelector("[data-source-list]");
    if (!list) return;
    if (list.children.length) return;
    if (list.children.length) return;
    if (list.children.length) return;
    if (list.children.length) return;
    if (list.children.length) return;
    if (list.children.length) return;
    if (list.children.length) return;
    if (list.children.length) return;
    if (list.children.length) return;
    if (list.children.length) return;
    var sources = SOURCE_LIBRARY[category] || [];
    sources.forEach(function (source) {
      var item = document.createElement("li");
      var link = document.createElement("a");
      link.href = source[1];
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      link.textContent = source[0] + " ↗";
      item.appendChild(link);
      list.appendChild(item);
    });
  }

  function setupRelated(category) {
    var container = document.querySelector("[data-related-guides]");
    if (!container) return;
    var current = normalizePath(window.location.pathname);
    var guides = (GUIDE_LIBRARY[category] || []).filter(function (guide) {
      return normalizePath(guide[1]) !== current;
    }).slice(0, 2);
    if (!guides.length) {
      container.hidden = true;
      return;
    }

    var categoryPath = HUB_PATHS[category] || "/";
    var head = document.createElement("div");
    head.className = "related-guides-head";
    var title = document.createElement("h2");
    title.id = "related-guides-title";
    title.textContent = "Continue reading";
    var allLink = document.createElement("a");
    allLink.href = categoryPath;
    allLink.textContent = "All " + category.toLowerCase() + " guides →";
    head.appendChild(title);
    head.appendChild(allLink);

    var grid = document.createElement("div");
    grid.className = "related-grid";
    guides.forEach(function (guide) {
      var link = document.createElement("a");
      link.className = "related-card";
      link.href = guide[1];
      var label = document.createElement("span");
      label.textContent = category;
      var guideTitle = document.createElement("strong");
      guideTitle.textContent = guide[0];
      var action = document.createElement("em");
      action.textContent = "Read the guide →";
      link.appendChild(label);
      link.appendChild(guideTitle);
      link.appendChild(action);
      grid.appendChild(link);
    });
    container.appendChild(head);
    container.appendChild(grid);
  }

  function setupRsocSlots() {
    document.querySelectorAll(".rsoc-slot").forEach(function (slot) {
      function hasProviderContent() {
        return slot.children.length > 0 || slot.textContent.trim().length > 0;
      }
      function sync() {
        var ready = hasProviderContent();
        slot.hidden = !ready;
        slot.setAttribute("aria-hidden", String(!ready));
      }
      sync();
      if ("MutationObserver" in window) {
        new MutationObserver(sync).observe(slot, {
          childList: true,
          subtree: true,
          characterData: true
        });
      }
    });
  }

  function setupArticle() {
    var article = document.querySelector(".article-body");
    if (!article) return;
    var categoryNode = document.querySelector(".article-hero .tag");
    var category = document.body.getAttribute("data-hub") || (categoryNode ? categoryNode.textContent.trim() : "");
    setupArticleToc(article);
    setupTables(article);
    setupSources(category);
    setupRelated(category);
  }

  function setupCookieBanner() {
    var banner = document.getElementById("ck");
    if (!banner) return;
    banner.setAttribute("role", "dialog");
    banner.setAttribute("aria-label", "Privacy choices");
    banner.setAttribute("aria-live", "polite");
  }

  function polishEditorialLayout() {
    document.querySelectorAll(".card").forEach(function (card) {
      if (!card.querySelector(".card-cover")) card.classList.add("card-text");
    });

    var staticBody = document.querySelector(".static-page .page-body");
    if (staticBody) {
      var labels = {
        "/about": "About the publication",
        "/contact": "Editorial contact",
        "/editorial-policy": "Editorial standards",
        "/editorial-team": "Editorial process",
        "/privacy": "Privacy & consent",
        "/terms": "Terms of use"
      };
      staticBody.dataset.pageLabel = labels[normalizePath(window.location.pathname)] || "MoneyMooring";
    }

    if (!("IntersectionObserver" in window) || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    var items = document.querySelectorAll(".featured, .card, .takeaways, .article-toc, .related-card");
    items.forEach(function (item) {
      item.classList.add("reveal-ready");
    });
    var observer = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (!entry.isIntersecting) return;
        entry.target.classList.add("reveal-in");
        observer.unobserve(entry.target);
      });
    }, { rootMargin: "0px 0px -45px", threshold: 0.06 });
    items.forEach(function (item) {
      observer.observe(item);
    });
  }

  function init() {
    setupHeader();
    markCurrentNavigation();
    setupRsocSlots();
    setupArticle();
    setupCookieBanner();
    polishEditorialLayout();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
