document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  const email = document.getElementById("email");
  const password = document.getElementById("password");

  // Function to show toast
  function showToast(message, type = "success") {
    const toast = document.createElement("div");
    toast.className = `toast ${type}`;
    toast.textContent = message;
    document.body.appendChild(toast);

    setTimeout(() => {
      toast.classList.add("show");
    }, 100);

    setTimeout(() => {
      toast.classList.remove("show");
      setTimeout(() => toast.remove(), 500);
    }, 3000);
  }

  // Remove existing error message for a single input
  function removeError(input) {
    input.classList.remove("error");
    const existingMsg = input.parentElement.querySelector(".error-msg");
    if (existingMsg) existingMsg.remove();
  }

  // Show error message for a single input
  function showError(input, message) {
    input.classList.add("error");
    removeError(input);
    const errorMsg = document.createElement("p");
    errorMsg.className = "error-msg";
    errorMsg.textContent = message;
    input.parentElement.appendChild(errorMsg);
  }

  // Real-time validation for individual fields
  email.addEventListener("input", () => {
    removeError(email);
    if (email.value.length > 0 && !email.value.includes("@")) {
      showError(email, "Please enter a valid email.");
    }
  });

  password.addEventListener("input", () => {
    removeError(password);
    if (password.value.length > 0 && password.value.length < 6) {
      showError(password, "Password must be at least 6 characters.");
    }
  });

  // Submit validation
  form.addEventListener("submit", (e) => {
    e.preventDefault();

    let hasError = false;

    // Validate email individually
    removeError(email);
    if (!email.value.includes("@")) {
      showError(email, "Please enter a valid email.");
      hasError = true;
    }

    // Validate password individually
    removeError(password);
    if (password.value.length < 6) {
      showError(password, "Password must be at least 6 characters.");
      hasError = true;
    }

    // Success toast if no errors
    if (!hasError) {
      form.reset();
      showToast("Login Successful!", "success");
    }
  });
});
