const tracks = [
  { title: "Her Song ♡", src: "assets/music/song-01.mp3" },
  { title: "Her Tune ♡", src: "assets/music/song-02.mp3" },
  { title: "That One ♡", src: "assets/music/song-03.mp3" },
  { title: "On Repeat ♡", src: "assets/music/song-04.mp3" },
  { title: "Just This ♡", src: "assets/music/song-05.mp3" }
];

const audio = document.getElementById("audio");
const play = document.getElementById("play");
const prev = document.getElementById("prev");
const next = document.getElementById("next");
const progress = document.getElementById("progress");
const currentTime = document.getElementById("currentTime");
const duration = document.getElementById("duration");
const status = document.getElementById("playerStatus");
const trackButtons = [...document.querySelectorAll(".track")];
let current = 0;
let shuffle = false;
let repeat = false;

const format = seconds => {
  if (!Number.isFinite(seconds)) return "0:00";
  const m = Math.floor(seconds / 60);
  const s = Math.floor(seconds % 60).toString().padStart(2, "0");
  return `${m}:${s}`;
};

function loadTrack(index, autoplay = false) {
  current = (index + tracks.length) % tracks.length;
  audio.src = tracks[current].src;
  trackButtons.forEach((b,i) => b.classList.toggle("active", i === current));
  status.textContent = `Selected: ${tracks[current].title}`;
  if (autoplay) audio.play().catch(() => {});
}

function nextTrack() {
  if (shuffle) {
    let nextIndex;
    do nextIndex = Math.floor(Math.random() * tracks.length); while (tracks.length > 1 && nextIndex === current);
    loadTrack(nextIndex, true);
  } else loadTrack(current + 1, true);
}

play.addEventListener("click", () => {
  if (audio.paused) audio.play().catch(() => { status.textContent = "Add the MP3 files to assets/music/ first."; });
  else audio.pause();
});
prev.addEventListener("click", () => loadTrack(current - 1, true));
next.addEventListener("click", nextTrack);

document.getElementById("shuffle").addEventListener("click", e => {
  shuffle = !shuffle;
  e.currentTarget.classList.toggle("active", shuffle);
});
document.getElementById("repeat").addEventListener("click", e => {
  repeat = !repeat;
  e.currentTarget.classList.toggle("active", repeat);
});

trackButtons.forEach(button => {
  button.addEventListener("click", () => loadTrack(Number(button.dataset.index), true));
});

audio.addEventListener("play", () => play.textContent = "Ⅱ");
audio.addEventListener("pause", () => play.textContent = "▶");
audio.addEventListener("loadedmetadata", () => duration.textContent = format(audio.duration));
audio.addEventListener("timeupdate", () => {
  currentTime.textContent = format(audio.currentTime);
  progress.value = audio.duration ? (audio.currentTime / audio.duration) * 100 : 0;
});
progress.addEventListener("input", () => {
  if (audio.duration) audio.currentTime = (Number(progress.value) / 100) * audio.duration;
});
audio.addEventListener("ended", () => repeat ? loadTrack(current, true) : nextTrack());
audio.addEventListener("error", () => {
  status.textContent = `Missing file: ${tracks[current].src}`;
});

loadTrack(0);
