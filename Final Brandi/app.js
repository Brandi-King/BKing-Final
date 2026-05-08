let moodData = {
  delighted: 0,
  melancholy: 0,
  anxious: 0
};

let currentMood = null;

// Load saved data
function loadData() {
  const saved = localStorage.getItem("moodStats");
  if (saved) {
    moodData = JSON.parse(saved);
  }
}

// Save data
function saveData() {
  localStorage.setItem("moodStats", JSON.stringify(moodData));
}

// Change background
function changeBackground(mood) {
  if (mood === "delighted") {
    document.body.style.backgroundColor = "#ffd43b";
  } else if (mood === "melancholy") {
    document.body.style.backgroundColor = "#6693ee";
  } else if (mood === "anxious") {
    document.body.style.backgroundColor = "#faa2c1";
  }
}

// Track mood
function trackMood(mood) {
  moodData[mood]++;
  saveData();
}

// Display stats
function displayStats() {
  document.getElementById("stats").textContent =
    `Delighted: ${moodData.delighted} | Melancholy: ${moodData.melancholy} | Anxious: ${moodData.anxious}`;
}

// Handle mood click
function handleMoodClick(mood) {
  currentMood = mood;

  trackMood(mood);
  changeBackground(mood);

  document.getElementById("message").textContent =
    `You're feeling ${mood} right now`;

  displayStats();
}

// Run when page loads
document.addEventListener("DOMContentLoaded", () => {
  loadData();
  displayStats();

  document.getElementById("delightedBtn").addEventListener("click", () => {
    handleMoodClick("delighted");
  });

  document.getElementById("melancholyBtn").addEventListener("click", () => {
    handleMoodClick("melancholy");
  });

  document.getElementById("anxiousBtn").addEventListener("click", () => {
    handleMoodClick("anxious");
  });
});