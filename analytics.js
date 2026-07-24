/* MoneyMooring analytics bootstrap.
 * IDs are intentionally centralized here. Tags load only after explicit consent.
 */
(function () {
  "use strict";

  var config = {
    ga4Id: "",
    metaPixelId: "",
  };

  var consentKey = "mm_consent";
  var campaignKey = "mm_campaign";
  var started = false;
  var campaign = {};

  function readStorage(storage, key) {
    try {
      return storage.getItem(key);
    } catch (error) {
      return null;
    }
  }

  function writeStorage(storage, key, value) {
    try {
      storage.setItem(key, value);
    } catch (error) {
      // Storage can be blocked; the page must remain usable.
    }
  }

  function getConsent() {
    return readStorage(window.localStorage, consentKey);
  }

  function captureCampaign() {
    var params = new URLSearchParams(window.location.search);
    var current = {
      utm_source: params.get("utm_source") || "",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_content: params.get("utm_content") || "",
      utm_term: params.get("utm_term") || "",
      provider_click_id: params.get("click_id") || params.get("subid") || "",
    };
    var hasCurrent = Object.keys(current).some(function (key) {
      return current[key];
    });

    if (hasCurrent) {
      writeStorage(window.sessionStorage, campaignKey, JSON.stringify(current));
      campaign = current;
      return;
    }

    var stored = readStorage(window.sessionStorage, campaignKey);
    if (!stored) return;

    try {
      campaign = JSON.parse(stored) || {};
    } catch (error) {
      campaign = {};
    }
  }

  function articleSlug() {
    var path = window.location.pathname.replace(/\/$/, "");
    return path.split("/").pop() || "home";
  }

  function loadScript(src) {
    var script = document.createElement("script");
    script.async = true;
    script.src = src;
    document.head.appendChild(script);
  }

  function loadGa4() {
    if (!config.ga4Id) return;

    window.dataLayer = window.dataLayer || [];
    window.gtag = window.gtag || function () {
      window.dataLayer.push(arguments);
    };
    window.gtag("js", new Date());
    window.gtag("consent", "update", {
      analytics_storage: "granted",
      ad_storage: "granted",
      ad_user_data: "granted",
      ad_personalization: "granted",
    });
    window.gtag("config", config.ga4Id, {
      send_page_view: true,
      anonymize_ip: true,
    });
    loadScript("https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(config.ga4Id));
  }

  function loadMetaPixel() {
    if (!config.metaPixelId || window.fbq) return;

    var fbq = function () {
      fbq.callMethod
        ? fbq.callMethod.apply(fbq, arguments)
        : fbq.queue.push(arguments);
    };
    window.fbq = fbq;
    window._fbq = fbq;
    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];
    loadScript("https://connect.facebook.net/en_US/fbevents.js");
    fbq("init", config.metaPixelId);
    fbq("track", "PageView");
  }

  function track(name, params) {
    if (getConsent() !== "all") return;

    var payload = Object.assign(
      {
        article_slug: articleSlug(),
      },
      campaign,
      params || {},
    );

    if (window.gtag && config.ga4Id) {
      window.gtag("event", name, payload);
    }
  }

  function installEngagementTracking() {
    var article = document.querySelector(".article-body");
    if (!article) return;

    window.setTimeout(function () {
      track("article_engaged", { engagement_seconds: 30 });
    }, 30000);

    var sentDepths = {};
    var thresholds = [25, 50, 75, 90];
    var onScroll = function () {
      var maxScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (maxScroll <= 0) return;
      var percent = Math.round((window.scrollY / maxScroll) * 100);

      thresholds.forEach(function (threshold) {
        if (percent >= threshold && !sentDepths[threshold]) {
          sentDepths[threshold] = true;
          track("scroll_depth", { percent_scrolled: threshold });
        }
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function installRsocTracking() {
    var units = document.querySelectorAll(".related-search");
    if (!units.length) return;

    units.forEach(function (unit, index) {
      unit.setAttribute("data-rsoc-unit", unit.getAttribute("data-rsoc-unit") || "article-main-" + (index + 1));
    });

    if ("IntersectionObserver" in window) {
      var observer = new IntersectionObserver(
        function (entries) {
          entries.forEach(function (entry) {
            if (!entry.isIntersecting) return;
            track("rsoc_unit_view", {
              rsoc_unit: entry.target.getAttribute("data-rsoc-unit"),
            });
            observer.unobserve(entry.target);
          });
        },
        { threshold: 0.5 },
      );
      units.forEach(function (unit) {
        observer.observe(unit);
      });
    }

    document.addEventListener("click", function (event) {
      var unit = event.target.closest && event.target.closest(".related-search");
      if (!unit) return;
      track("rsoc_interaction", {
        rsoc_unit: unit.getAttribute("data-rsoc-unit"),
        measurement_note: "top_level_only",
      });
    });
  }

  function installOutboundTracking() {
    document.addEventListener("click", function (event) {
      var link = event.target.closest && event.target.closest("a[href]");
      if (!link) return;

      var destination;
      try {
        destination = new URL(link.href, window.location.href);
      } catch (error) {
        return;
      }

      if (!/^https?:$/.test(destination.protocol) || destination.hostname === window.location.hostname) {
        return;
      }

      track("outbound_click", {
        destination_host: destination.hostname,
        destination_url: destination.href,
      });
    });
  }

  function startAnalytics() {
    if (started || getConsent() !== "all") return;
    started = true;
    captureCampaign();
    loadGa4();
    loadMetaPixel();
    installEngagementTracking();
    installRsocTracking();
    installOutboundTracking();
  }

  function syncBanner() {
    var banner = document.getElementById("ck");
    if (!banner) return;
    banner.style.display = getConsent() ? "none" : "block";
  }

  window.ckSet = function (value) {
    writeStorage(window.localStorage, consentKey, value);
    syncBanner();
    if (value === "all") startAnalytics();
  };

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", function () {
      syncBanner();
      startAnalytics();
    });
  } else {
    syncBanner();
    startAnalytics();
  }
})();
