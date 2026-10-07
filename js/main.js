/* ==================================================================
   Haul — Moving Company Template
   Vanilla JavaScript only. No jQuery. No plugins.
   One function per feature, guard clauses, IntersectionObserver,
   respects prefers-reduced-motion.
   ================================================================== */
(function () {
  "use strict";

  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  /* ---------- Mobile navigation ---------- */
  function initNav() {
    var toggle = document.querySelector(".nav-toggle");
    var panel = document.getElementById("mobile-panel");
    if (!toggle || !panel) return;

    function close() {
      panel.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    }
    toggle.addEventListener("click", function () {
      var open = panel.classList.toggle("open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
    panel.querySelectorAll("a").forEach(function (a) {
      a.addEventListener("click", close);
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape") close();
    });
    window.addEventListener("resize", function () {
      if (window.innerWidth >= 992) close();
    });
  }

  /* ---------- Sticky navbar shadow ---------- */
  function initStickyNav() {
    var nav = document.querySelector(".site-nav");
    if (!nav) return;
    var onScroll = function () {
      nav.classList.toggle("is-stuck", window.scrollY > 8);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  /* ---------- Active section highlight (scrollspy) ---------- */
  function initScrollSpy() {
    var links = Array.prototype.slice.call(document.querySelectorAll(".nav-links a[href^='#']"));
    if (!links.length || !("IntersectionObserver" in window)) return;
    var map = {};
    links.forEach(function (l) {
      var id = l.getAttribute("href").slice(1);
      var sec = document.getElementById(id);
      if (sec) map[id] = l;
    });
    var obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (en) {
        if (en.isIntersecting) {
          links.forEach(function (l) { l.classList.remove("active"); });
          var active = map[en.target.id];
          if (active) active.classList.add("active");
        }
      });
    }, { rootMargin: "-45% 0px -50% 0px", threshold: 0 });
    Object.keys(map).forEach(function (id) { obs.observe(document.getElementById(id)); });
  }

  /* ---------- Scroll reveal ---------- */
  function initReveal() {
    var els = document.querySelectorAll(".reveal");
    if (!els.length) return;
    if (reduceMotion || !("IntersectionObserver" in window)) {
      els.forEach(function (el) { el.classList.add("in"); });
      return;
    }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { en.target.classList.add("in"); o.unobserve(en.target); }
      });
    }, { threshold: 0.12, rootMargin: "0px 0px -8% 0px" });
    els.forEach(function (el) { obs.observe(el); });
  }

  /* ---------- Count-up stats ---------- */
  function initCountUp() {
    var nums = document.querySelectorAll("[data-count]");
    if (!nums.length) return;
    function run(el) {
      var target = parseFloat(el.getAttribute("data-count"));
      var dec = (el.getAttribute("data-decimals") | 0);
      var fmt = function (n) {
        return Number(n.toFixed(dec)).toLocaleString("en-US", { minimumFractionDigits: dec, maximumFractionDigits: dec });
      };
      if (reduceMotion) { el.textContent = fmt(target); return; }
      var dur = 1500, start = null;
      function tick(ts) {
        if (!start) start = ts;
        var p = Math.min((ts - start) / dur, 1);
        var eased = 1 - Math.pow(1 - p, 3);
        el.textContent = fmt(target * eased);
        if (p < 1) requestAnimationFrame(tick);
        else el.textContent = fmt(target);
      }
      requestAnimationFrame(tick);
    }
    if (!("IntersectionObserver" in window)) { nums.forEach(run); return; }
    var obs = new IntersectionObserver(function (entries, o) {
      entries.forEach(function (en) {
        if (en.isIntersecting) { run(en.target); o.unobserve(en.target); }
      });
    }, { threshold: 0.5 });
    nums.forEach(function (n) { obs.observe(n); });
  }

  /* ---------- Move-cost estimator ---------- */
  function initEstimator() {
    var form = document.getElementById("estimator");
    if (!form) return;
    var sizeLabels = { studio: "Studio / 1 room", one: "1 BHK", two: "2 BHK", three: "3 BHK", four: "4+ BHK" };
    var distanceLabels = { local: "Within the city", nearby: "Nearby city", intercity: "Intercity", long: "Longer route" };
    var extraLabels = { packing: "Packing", storage: "Storage", piano: "Special item", stairs: "Stairs / no lift", supplies: "Packing materials", vehicle: "Vehicle transport" };
    var priceEl = document.getElementById("est-price");
    var lowEl = document.getElementById("est-low");
    var highEl = document.getElementById("est-high");
    var summaryEl = document.getElementById("est-summary");

    function selected(name) {
      var el = form.querySelector("input[name='" + name + "']:checked");
      return el ? el.value : null;
    }

    function recalc() {
      var sizeKey = selected("size") || "two";
      var distKey = selected("distance") || "local";
      var rows = [
        { k: "Home size", v: sizeLabels[sizeKey] || sizeKey },
        { k: "Route", v: distanceLabels[distKey] || distKey }
      ];

      form.querySelectorAll("input[name='extra']:checked").forEach(function (cb) {
        rows.push({ k: "Additional service", v: extraLabels[cb.value] || cb.value });
      });

      if (priceEl) priceEl.textContent = "Rates to be confirmed";
      if (lowEl) lowEl.textContent = "Rates to be confirmed";
      if (highEl) highEl.textContent = "";

      if (summaryEl) {
        summaryEl.innerHTML = "";
        rows.forEach(function (r) {
          var li = document.createElement("li");
          var s = document.createElement("span"); s.textContent = r.k;
          var b = document.createElement("b"); b.textContent = r.v;
          li.appendChild(s); li.appendChild(b);
          summaryEl.appendChild(li);
        });
      }
    }

    form.addEventListener("change", recalc);
    form.addEventListener("input", recalc);
    recalc();
  }

  /* ---------- Hero instant-quote mini form ---------- */
  async function initQuoteForm() {
    var form = document.getElementById("quote-form");
    if (!form) return;
    var ok = form.querySelector(".form-success");
    var error = form.querySelector(".form-error");
    var button = form.querySelector("[type='submit']");
    var originalButtonText = button ? button.textContent : "Request a quote";
    var date = form.querySelector("input[type='date']");
    if (date) {
      var today = new Date();
      date.min = [today.getFullYear(), String(today.getMonth() + 1).padStart(2, "0"), String(today.getDate()).padStart(2, "0")].join("-");
    }

    form.addEventListener("submit", async function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll("[required]").forEach(function (input) {
        var wrap = input.closest(".field");
        var good = input.checkValidity();
        if (wrap) wrap.classList.toggle("field-error", !good);
        if (!good) valid = false;
      });
      if (!valid) {
        var firstBad = form.querySelector(".field-error .control, .field-error input[type='checkbox']");
        if (firstBad) firstBad.focus();
        return;
      }
      if (ok) { ok.hidden = true; ok.classList.remove("show"); }
      if (error) error.hidden = true;
      if (button) { button.disabled = true; button.textContent = "Sending request…"; }
      form.setAttribute("aria-busy", "true");

      try {
        await new Promise(function (resolve) { setTimeout(resolve, 250); });
        var endpoint = window.MOVE_CONFIG && window.MOVE_CONFIG.quoteApiUrl;
        if (!endpoint) throw new Error("The quote request form is not connected yet. Your details have not been sent.");
        var data = new FormData(form);
        var payload = {
          moveType: data.get("moveType"),
          from: { locality: data.get("fromLocality"), pin: data.get("fromPin") },
          to: { locality: data.get("toLocality"), pin: data.get("toPin") },
          preferredDate: data.get("date") || null,
          inventory: data.get("inventory") || null,
          name: data.get("name") || null,
          mobile: data.get("phone"),
          contactConsent: data.get("contactConsent") === "on"
        };
        var response = await fetch(endpoint, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(payload) });
        if (!response.ok) throw new Error("We could not send your request. Please try again later.");
        if (ok) { ok.hidden = false; ok.classList.add("show"); }
        form.reset();
      } catch (err) {
        if (error) {
          error.textContent = err.message || "We could not send your request. Please try again later.";
          error.hidden = false;
        }
      } finally {
        form.removeAttribute("aria-busy");
        if (button) { button.disabled = false; button.textContent = originalButtonText; }
      }
    });

    form.querySelectorAll(".control, input[type='checkbox']").forEach(function (c) {
      c.addEventListener("input", function () {
        var wrap = c.closest(".field");
        if (wrap) wrap.classList.remove("field-error");
        if (error) error.hidden = true;
      });
      c.addEventListener("change", function () {
        var wrap = c.closest(".field");
        if (wrap) wrap.classList.remove("field-error");
        if (error) error.hidden = true;
      });
    });
  }

  /* ---------- Booking form validation (services.html) ---------- */
  function initBookingForm() {
    var form = document.getElementById("booking-form");
    if (!form) return;
    var ok = form.querySelector(".form-success");

    form.addEventListener("submit", function (e) {
      e.preventDefault();
      var valid = true;
      form.querySelectorAll("[required]").forEach(function (input) {
        var wrap = input.closest(".field") || input.parentElement;
        var val = input.value.trim();
        var good = val !== "";
        if (input.type === "email") good = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
        if (input.type === "tel") good = /[\d]{7,}/.test(val.replace(/\D/g, ""));
        if (wrap) wrap.classList.toggle("field-error", !good);
        if (!good) valid = false;
      });
      if (!valid) {
        var firstBad = form.querySelector(".field-error .control");
        if (firstBad) firstBad.focus();
        return;
      }
      if (ok) { ok.classList.add("show"); ok.setAttribute("role", "status"); ok.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "center" }); }
      form.reset();
    });

    form.querySelectorAll(".control").forEach(function (c) {
      c.addEventListener("input", function () {
        var wrap = c.closest(".field") || c.parentElement;
        if (wrap) wrap.classList.remove("field-error");
      });
    });
  }

  /* ---------- Testimonials slider ---------- */
  function initTestimonials() {
    var root = document.querySelector(".tst");
    if (!root) return;
    var track = root.querySelector(".tst__track");
    var slides = Array.prototype.slice.call(root.querySelectorAll(".tst__slide"));
    var prev = root.querySelector(".tst__prev");
    var next = root.querySelector(".tst__next");
    var dotsWrap = root.querySelector(".tst__dots");
    if (!track || slides.length < 2) return;

    var index = 0, timer = null;

    // build dots
    var dots = [];
    if (dotsWrap) {
      slides.forEach(function (_, i) {
        var b = document.createElement("button");
        b.type = "button";
        b.className = "tst__dot" + (i === 0 ? " active" : "");
        b.setAttribute("aria-label", "Go to review " + (i + 1));
        b.addEventListener("click", function () { go(i); });
        dotsWrap.appendChild(b);
        dots.push(b);
      });
    }

    function go(i) {
      index = (i + slides.length) % slides.length;
      track.style.transform = "translateX(" + (-index * 100) + "%)";
      dots.forEach(function (d, di) { d.classList.toggle("active", di === index); });
      slides.forEach(function (s, si) { s.setAttribute("aria-hidden", si === index ? "false" : "true"); });
    }

    if (next) next.addEventListener("click", function () { go(index + 1); restart(); });
    if (prev) prev.addEventListener("click", function () { go(index - 1); restart(); });

    function start() {
      if (reduceMotion) return;
      timer = setInterval(function () { go(index + 1); }, 6000);
    }
    function restart() { if (timer) clearInterval(timer); start(); }

    root.addEventListener("mouseenter", function () { if (timer) clearInterval(timer); });
    root.addEventListener("mouseleave", start);

    // keyboard
    root.setAttribute("tabindex", "0");
    root.addEventListener("keydown", function (e) {
      if (e.key === "ArrowRight") { go(index + 1); restart(); }
      if (e.key === "ArrowLeft") { go(index - 1); restart(); }
    });

    go(0);
    start();
  }

  /* ---------- Single-open FAQ accordion (native details) ---------- */
  function initFaq() {
    var items = document.querySelectorAll(".faq-item");
    if (!items.length) return;
    items.forEach(function (item) {
      item.addEventListener("toggle", function () {
        if (!item.open) return;
        items.forEach(function (other) {
          if (other !== item) other.open = false;
        });
      });
    });
  }

  /* ---------- Smooth in-page anchor scroll ---------- */
  function initSmoothScroll() {
    document.querySelectorAll("a[href^='#']:not([href='#'])").forEach(function (a) {
      a.addEventListener("click", function (e) {
        var id = a.getAttribute("href").slice(1);
        var target = document.getElementById(id);
        if (!target) return;
        e.preventDefault();
        target.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "start" });
        history.replaceState(null, "", "#" + id);
      });
    });
  }

  /* ---------- Boot ---------- */
  function boot() {
    initNav();
    initStickyNav();
    initScrollSpy();
    initReveal();
    initCountUp();
    initEstimator();
    initQuoteForm();
    initBookingForm();
    initTestimonials();
    initFaq();
    initSmoothScroll();
    var y = document.getElementById("year");
    if (y) y.textContent = "2026";
  }

  window.HaulTemplate = { init: boot };
  if (!document.getElementById("root")) {
    if (document.readyState === "loading") document.addEventListener("DOMContentLoaded", boot);
    else boot();
  }
})();
