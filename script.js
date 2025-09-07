// 🌗 Toggle Light/Dark Mode
document.getElementById("themeToggle").addEventListener("click", () => {
  document.body.classList.toggle("dark");
});

// 📂 Collapsible FAQ Section
const faqButtons = document.querySelectorAll(".faq-question");
faqButtons.forEach(button => {
  button.addEventListener("click", () => {
    const answer = button.nextElementSibling;
    answer.classList.toggle("visible");
  });
});

// 🧪 Custom Form Validation
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // Prevent default form submission

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;
  const feedback = document.getElementById("formFeedback");

  let errors = [];

  // Name validation
  if (name === "") {
    errors.push("Name is required.");
  }

  // Email validation using regex
  const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Invalid email format.");
  }

  // Password validation
  if (password.length < 6) {
    errors.push("Password must be at least 6 characters.");
  }

  // Show feedback
  if (errors.length > 0) {
    feedback.textContent = errors.join(" ");
    feedback.style.color = "red";
  } else {
    feedback.textContent = "Form submitted successfully!";
    feedback.style.color = "green";
    this.reset();
  }
});