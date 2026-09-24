const wishButton = document.getElementById("wishButton");
const hiddenWish = document.getElementById("hiddenWish");
wishButton.addEventListener("click", () => {
  hiddenWish.classList.toggle("show");
  wishButton.textContent = hiddenWish.classList.contains("show") ? "♡" : "open your wish ♡";
});
