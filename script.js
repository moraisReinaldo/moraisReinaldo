(function () {
  "use strict";

  // ----- Ano atual no footer -----
  var yearEl = document.getElementById("currentYear");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // ----- Menu mobile -----
  var menuToggle = document.getElementById("menuToggle");
  var navMobile = document.getElementById("navMobile");
  if (menuToggle && navMobile) {
    menuToggle.addEventListener("click", function () {
      var isOpen = navMobile.classList.toggle("is-open");
      menuToggle.setAttribute("aria-expanded", isOpen);
      menuToggle.setAttribute("aria-label", isOpen ? "Fechar menu" : "Abrir menu");
    });
  }

  // ----- Navegação suave (scroll para seção) -----
  function scrollToSection(id) {
    if (id === "home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      return;
    }
    var el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  }

  document.querySelectorAll("[data-nav]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var id = this.getAttribute("data-nav");
      scrollToSection(id);
      if (navMobile && navMobile.classList.contains("is-open")) {
        navMobile.classList.remove("is-open");
        if (menuToggle) {
          menuToggle.setAttribute("aria-expanded", "false");
          menuToggle.setAttribute("aria-label", "Abrir menu");
        }
      }
    });
  });

  // ----- Filtro de projetos -----
  var filterBtns = document.querySelectorAll(".filter-btn");
  var projectCards = document.querySelectorAll(".project-card");
  if (filterBtns.length && projectCards.length) {
    filterBtns.forEach(function (btn) {
      btn.addEventListener("click", function () {
        var filter = this.getAttribute("data-filter");
        filterBtns.forEach(function (b) { b.classList.remove("active"); });
        this.classList.add("active");
        projectCards.forEach(function (card) {
          var category = card.getAttribute("data-category");
          if (filter === "all" || category === filter) {
            card.classList.remove("hidden");
          } else {
            card.classList.add("hidden");
          }
        });
      });
    });
  }

  // ----- Scroll reveal (IntersectionObserver) -----
  var animateEls = document.querySelectorAll("[data-animate]");
  if (animateEls.length && "IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-in");
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -100px 0px" }
    );
    animateEls.forEach(function (el) {
      observer.observe(el);
    });
  }
})();
