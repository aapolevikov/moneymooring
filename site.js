(function () {
  "use strict";

  var GUIDE_LIBRARY = {
    Savings: [
      ["High-Yield Savings Accounts: How to Compare APYs and Fees", "/articles/high-yield-savings-accounts.html"],
      ["Emergency Funds: A Practical Savings Target", "/articles/emergency-fund-how-much.html"],
      ["CDs vs. Savings Accounts: When Locking Money Makes Sense", "/articles/cd-vs-savings-account.html"]
    ],
    Insurance: [
      ["Car Insurance for Seniors: A Smarter Comparison Process", "/articles/car-insurance-for-seniors.html"],
      ["Homeowners Insurance: Coverage and Common Gaps", "/articles/home-insurance-what-it-covers.html"],
      ["Term vs. Whole Life Insurance: The Core Trade-offs", "/articles/term-vs-whole-life-insurance.html"]
    ],
    Debt: [
      ["Debt Consolidation Loans: Benefits, Fees and Risks", "/articles/debt-consolidation-loans.html"],
      ["Debt Avalanche vs. Snowball: Choosing a Payoff Method", "/articles/avalanche-vs-snowball.html"],
      ["Personal Loans: Rates, Fees and Prequalification", "/articles/personal-loans-explained.html"]
    ],
    "Credit cards": [
      ["Balance Transfer Cards: The 0% APR Timeline", "/articles/balance-transfer-credit-cards.html"],
      ["How Credit Scores Change: Fast and Slow Factors", "/articles/improve-credit-score-fast.html"],
      ["Cash Back Cards: Rewards, Fees and Interest", "/articles/cash-back-credit-cards-guide.html"]
    ],
    Mortgages: [
      ["Mortgage Refinance: Running the Break-even Math", "/articles/mortgage-refinance-guide.html"],
      ["How Much House Can You Afford?", "/articles/how-much-house-can-you-afford.html"],
      ["FHA vs. Conventional Loans: A Side-by-side Guide", "/articles/fha-vs-conventional-loans.html"]
    ]
  };

  var SOURCE_LIBRARY = {
    Savings: [
      ["FDIC deposit insurance", "https://www.fdic.gov/resources/deposit-insurance"],
      ["CFPB consumer financial tools", "https://www.consumerfinance.gov/consumer-tools/"]
    ],
    Insurance: [
      ["NAIC consumer insurance resources", "https://content.naic.org/consumer"],
      ["Federal Trade Commission consumer advice", "https://consumer.ftc.gov/"]
    ],
    Debt: [
      ["CFPB debt collection resources", "https://www.consumerfinance.gov/consumer-tools/debt-collection/"],
      ["CFPB personal finance tools", "https://www.consumerfinance.gov/consumer-tools/"]
    ],
    "Credit cards": [
      ["CFPB credit card resources", "https://www.consumerfinance.gov/consumer-tools/credit-cards/"],
      ["CFPB credit reports and scores", "https://www.consumerfinance.gov/consumer-tools/credit-reports-and-scores/"]
    ],
    Mortgages: [
      ["CFPB mortgage resources", "https://www.consumerfinance.gov/consumer-tools/mortgages/"],
      ["HUD home loan resources", "https://www.hud.gov/helping-americans/loans"]
    ]
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

    var categoryPath = "/" + category.toLowerCase().replace(/\s+/g, "-") + ".html";
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
    var category = categoryNode ? categoryNode.textContent.trim() : "";
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
