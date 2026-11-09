/**
 * Steven Balalis Portfolio - Interactive Filtering, Theme Toggle & IntersectionObserver Reveal
 * Honors prefers-reduced-motion and avoids scroll listeners.
 */
(function () {
  "use strict";

  // 1. Theme Toggle (persists in localStorage, defaults to dark or system preference)
  const root = document.documentElement;
  const toggleBtn = document.getElementById("theme-toggle");
  const savedTheme = localStorage.getItem("sb_portfolio_theme");

  if (savedTheme === "light" || savedTheme === "dark") {
    root.setAttribute("data-theme", savedTheme);
  } else if (window.matchMedia && window.matchMedia("(prefers-color-scheme: light)").matches) {
    root.setAttribute("data-theme", "dark"); // Default dark editorial look, toggleable anytime
  }

  if (toggleBtn) {
    toggleBtn.addEventListener("click", function () {
      const current = root.getAttribute("data-theme") === "light" ? "light" : "dark";
      const next = current === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try {
        localStorage.setItem("sb_portfolio_theme", next);
      } catch (_) {}
    });
  }

  // 2. Case Study Domain Filter
  const filterPills = document.querySelectorAll(".filter-pill");
  const caseCards = document.querySelectorAll(".case-card");

  filterPills.forEach(function (pill) {
    pill.addEventListener("click", function () {
      const filter = pill.getAttribute("data-filter") || "all";

      filterPills.forEach(function (p) {
        const isActive = p === pill;
        p.classList.toggle("active", isActive);
        p.setAttribute("aria-selected", isActive ? "true" : "false");
      });

      caseCards.forEach(function (card) {
        const cats = (card.getAttribute("data-category") || "").split(/\s+/);
        const match = filter === "all" || cats.indexOf(filter) !== -1;
        if (match) {
          card.removeAttribute("hidden");
        } else {
          card.setAttribute("hidden", "");
        }
      });
    });
  });

  // 3. Hardware-accelerated IntersectionObserver reveal (disabled if prefers-reduced-motion)
  const prefersReduced =
    window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (!prefersReduced && "IntersectionObserver" in window) {
    const targets = document.querySelectorAll(
      ".bento-card, .leader-card, .case-card, .creds-panel, .stack-cluster"
    );

    targets.forEach(function (el) {
      el.classList.add("reveal-ready");
    });

    const observer = new IntersectionObserver(
      function (entries, obs) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -30px 0px" }
    );

    targets.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
