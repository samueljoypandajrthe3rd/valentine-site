const messages = [
  "Are you sure?",
  "Really sure?",
  "Pleaseeee 🥺",
  "Think again...",
  "I’ll be sad 😔",
  "Very very sad...",
  "Okay last chance!",
  "Just say yes ❤️"
];

let messageIndex = 0;
let musicStarted = false;
let isMuted = false;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const muteBtn = document.getElementById("muteBtn");

const bgMusic = new Audio("mySong.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.3;

function startMusic() {
  if (!musicStarted) {
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}

muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  bgMusic.muted = isMuted;
  muteBtn.textContent = isMuted ? "🔇" : "🔊";
});

noBtn.addEventListener("click", () => {
  startMusic();

  if (navigator.vibrate) {
    navigator.vibrate([100, 50, 100]);
  }

  noBtn.style.opacity = 0;
  setTimeout(() => {
    noBtn.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    noBtn.style.opacity = 1;
  }, 200);

  const size = parseFloat(getComputedStyle(yesBtn).fontSize);
  yesBtn.style.fontSize = size * 1.15 + "px";
});

yesBtn.addEventListener("click", () => {
  startMusic();
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 600);
});
