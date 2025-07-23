// 🌗 Theme Toggle (Night/Day Mode)
const themeToggle = document.getElementById("theme-toggle");
const body = document.body;

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light-mode");
  if (body.classList.contains("light-mode")) {
    themeToggle.textContent = "🌙 Night Mode";
  } else {
    themeToggle.textContent = "☀️ Day Mode";
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
