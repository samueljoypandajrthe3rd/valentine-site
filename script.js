const messages = [
  "Are you sure?",
  "bery bery sure?",
  "Pleaseuuuu 🥺",
  " Mf Think again...",
  "me sad 😔",
  "Very very sad...",
  "imma go cry huhuhuhhu",
  "Just say yes phak u"
];

let messageIndex = 0;
let musicStarted = false;
let isMuted = false;

const noBtn = document.getElementById("noBtn");
const yesBtn = document.getElementById("yesBtn");
const muteBtn = document.getElementById("muteBtn");

/* 🎵 Background music (add later if you want) */
const bgMusic = new Audio("mySong.mp3");
bgMusic.loop = true;
bgMusic.volume = 0.3;

function startMusic() {
  if (!musicStarted) {
    bgMusic.play().catch(() => {});
    musicStarted = true;
  }
}

/* 🔇 Mute */
muteBtn.addEventListener("click", () => {
  isMuted = !isMuted;
  bgMusic.muted = isMuted;
  muteBtn.textContent = isMuted ? "🔇" : "🔊";
});

/* 🎉 Confetti */
function launchConfetti() {
  const colors = ["#ff4d6d", "#ffd166", "#4caf50", "#4dabf7", "#f783ac"];

  for (let i = 0; i < 120; i++) {
    const c = document.createElement("div");
    c.className = "confetti";
    c.style.left = Math.random() * 100 + "vw";
    c.style.backgroundColor = colors[Math.floor(Math.random() * colors.length)];
    c.style.animationDuration = Math.random() * 2 + 2 + "s";
    document.body.appendChild(c);
    setTimeout(() => c.remove(), 4000);
  }
}

/* ❌ NO button */
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

/* ✅ YES button */
yesBtn.addEventListener("click", () => {
  startMusic();
  launchConfetti();
  setTimeout(() => {
    window.location.href = "yes.html";
  }, 800);
});
