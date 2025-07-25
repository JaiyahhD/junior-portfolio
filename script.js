// 🌗 Theme Toggle (Night/Day Mode)
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

// Start in dark mode (no .light-mode class)
body.classList.remove("light-mode");
themeToggle.textContent = "☀️ Day Mode"; // show "Day Mode" option

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");

  if (body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌙 Night Mode"; // show option to go back to night
  } else {
    themeToggle.textContent = "☀️ Day Mode"; // show option to switch to day
  }
});


// 🧠 Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start"
      });
    }
  });
});

// 🖱️ Project Card Hover Effect (extra sparkle ✨)
const cards = document.querySelectorAll(".project-card");

cards.forEach(card => {
  card.addEventListener("mouseenter", () => {
    card.classList.add("active");
  });
  card.addEventListener("mouseleave", () => {
    card.classList.remove("active");
  });
});

function updateTaglineTheme() {
  const tagline = document.getElementById("tagline");
  const hour = new Date().getHours();

  if (hour >= 6 && hour < 12) {
    // Morning
    tagline.style.color = "#A5DEE5"; // Soft teal
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    tagline.style.color = "#FFB6B9"; // Soft pink
  } else if (hour >= 18 && hour < 21) {
    // Evening
    tagline.style.color = "#D8B4FE"; // Lavender
  } else {
    // Night
    tagline.style.color = "#9CA3AF"; // Cool gray
  }
}

// Run on page load
updateTaglineTheme();

document.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();
  const body = document.body;

  if (hour >= 6 && hour < 12) {
    // Morning
    body.classList.add("theme-morning");
  } else if (hour >= 12 && hour < 18) {
    // Afternoon
    body.classList.add("theme-afternoon");
  } else {
    // Evening/Night
    body.classList.add("theme-night");
  }
});

// ⌨️ Typewriter Effect for Main Header
const typewriterEl = document.getElementById("typewriter-text");
const phrases = [
    "Hi, I'm Jaiyah!",
  "Front-End Developer",
  "Mother of 4",
  "Healthcare Techie"
];
let index = 0;
let charIndex = 0;

function typeWriter() {
  if (charIndex < phrases[index].length) {
    typewriterEl.textContent += phrases[index].charAt(charIndex);
    charIndex++;
    setTimeout(typeWriter, 100);
  } else {
    setTimeout(() => {
      typewriterEl.textContent = "";
      charIndex = 0;
      index = (index + 1) % phrases.length;
      typeWriter();
    }, 2000);
  }
}

typeWriter();

document.addEventListener("DOMContentLoaded", () => {
  const vibeToggle = document.getElementById("vibeToggle");
  const vibeWidget = document.getElementById("vibeWidget");
  const moodButtons = document.querySelectorAll(".mood-btn");
  const vibeResponse = document.getElementById("vibe-response");

  const moodMessages = {
    happy: "You’re glowing today! Keep that smile going 🌞",
    tired: "Rest is productive too. Slow down, Softie 😴",
    overit: "Girl. Say less. Mood: ‘Don't talk to me’ 😒",
    focused: "Big brain energy! Go build your empire 🧠✨",
    softgirl: "Soft. Sweet. Unbothered. Protected 💅🏽💖"
  };

  // Toggle panel open/close by toggling 'open' on vibeWidget (matches CSS)
  vibeToggle.addEventListener("click", () => {
    vibeWidget.classList.toggle("open");
  });

  // Update vibe response when a mood button is clicked
  moodButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const mood = btn.getAttribute("data-mood");
      vibeResponse.textContent = moodMessages[mood] || "Pick a mood to get a vibe 💫";
    });
  });
});


