// Event listener for form submission
document.getElementById("moodForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form behavior

  const name = document.getElementById("username").value.trim();
  const mood = document.getElementById("mood").value;

  // Custom validation logic
  if (name === "") {
    alert("Please enter your name.");
    return;
  }
  if (mood === "") {
    alert("Please select a mood.");
    return;
  }

  // Add mood entry to history
  const moodList = document.getElementById("moodList");
  const entry = document.createElement("li");
  entry.textContent = `${name} feels ${mood}`;
  moodList.appendChild(entry);

  // Clear form
  document.getElementById("username").value = "";
  document.getElementById("mood").value = "";
});

// Interactive Feature 1: Live slider update
const slider = document.getElementById("daySlider");
const sliderValue = document.getElementById("sliderValue");

slider.addEventListener("input", function() {
  sliderValue.textContent = slider.value;
});

// Interactive Feature 2: Highlight mood history on hover
document.getElementById("moodList").addEventListener("mouseover", function(e) {
  if (e.target.tagName === "LI") {
    e.target.style.backgroundColor = "#f0f8ff";
  }
});
document.getElementById("moodList").addEventListener("mouseout", function(e) {
  if (e.target.tagName === "LI") {
    e.target.style.backgroundColor = "";
  }
});