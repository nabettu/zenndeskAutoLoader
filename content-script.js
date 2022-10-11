document.addEventListener("visibilitychange", function () {
  if (document.visibilityState === "visible") {
    document
      .querySelector('button[data-test-id="views_views-list_header-refresh"]')
      .click();
  }
});
