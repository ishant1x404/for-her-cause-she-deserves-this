document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("a[href]").forEach(link => {
    link.addEventListener("click", () => {
      document.body.classList.add("page-leaving");
    });
  });
});
