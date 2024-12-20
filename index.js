javascript: (function () {
  const style = document.createElement("style");
  style.id = "clean-habr";
  style.textContent = `
    .tm-page {
      padding: 30px 0;
      margin: 0;
    }
    .tm-scroll-top,
    .tm-feature,
    .tm-company-profile-card,
    .tm-header,
    .tm-base-layout__header,
    .tm-footer-menu,
    .tm-footer,
    .tm-page__header,
    .tm-page__sidebar,
    .tm-page__top,
    .tm-articles-list__after-article,
    .tm-article-presenter__footer,
    .tm-article-sticky-panel {
      display: none;
    }
    .tm-page__main,
    .tm-article-presenter,
    .tm-article-presenter__body,
    .tm-article-snippet__cover_cover,
    figure > img {
      max-width: 100%;
      width: 100%;
      margin: 0;
    }
  `;
  document.querySelector("#clean-habr")?.remove();
  document.head.append(style);

  removeScripts(/google-analytics|gtag/);

  function removeScripts(pattern) {
    document.querySelectorAll("script").forEach(script => (script.src && pattern.test(script.src)) && script.remove());
  }
})();
