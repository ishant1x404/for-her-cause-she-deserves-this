const cards = [...document.querySelectorAll(".memory-card")];
const lightbox = document.getElementById("lightbox");
const lightboxImage = document.getElementById("lightboxImage");
let selected = 0;

function showMemory(index) {
  selected = (index + cards.length) % cards.length;
  lightboxImage.src = cards[selected].querySelector("img").src;
  lightboxImage.alt = cards[selected].querySelector("img").alt;
  lightbox.classList.add("open");
  lightbox.setAttribute("aria-hidden", "false");
}
function closeMemory() {
  lightbox.classList.remove("open");
  lightbox.setAttribute("aria-hidden", "true");
}
cards.forEach(card => card.addEventListener("click", () => showMemory(Number(card.dataset.index))));
document.getElementById("closeLightbox").addEventListener("click", closeMemory);
document.getElementById("lightboxPrev").addEventListener("click", () => showMemory(selected - 1));
document.getElementById("lightboxNext").addEventListener("click", () => showMemory(selected + 1));
lightbox.addEventListener("click", e => { if (e.target === lightbox) closeMemory(); });
document.addEventListener("keydown", e => {
  if (!lightbox.classList.contains("open")) return;
  if (e.key === "Escape") closeMemory();
  if (e.key === "ArrowLeft") showMemory(selected - 1);
  if (e.key === "ArrowRight") showMemory(selected + 1);
});
