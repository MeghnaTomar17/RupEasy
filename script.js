// script.js
// Add this at top of script.js
document.addEventListener('DOMContentLoaded', () => {
  const protectedPages = ['dashboard.html', 'apply.html'];
  const currentPage = window.location.pathname.split('/').pop();
  
  if (protectedPages.includes(currentPage)) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      alert('Please sign in first.');
      window.location.href = 'signin.html';
    }
  }
});


// SIGN UP FORM VALIDATION
document.addEventListener('DOMContentLoaded', () => {
  const signupForm = document.getElementById('signupForm');
  const signinForm = document.getElementById('signinForm');

  if (signupForm) {
    signupForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const name = this.fullname.value.trim();
      const email = this.email.value.trim();
      const password = this.password.value;
      const confirm = this.confirm.value;

      if (!name || !email || !password || !confirm) {
        alert('Please fill all the fields!');
        return;
      }

      if (password.length < 6) {
        alert('Password must be at least 6 characters!');
        return;
      }

      if (password !== confirm) {
        alert('Passwords do not match!');
        return;
      }

      // Simulate account creation
      alert(`Welcome to Rupeezy, ${name}! Redirecting to Sign In...`);
      window.location.href = 'signin.html';
    });
  }

  // SIGN IN FORM VALIDATION
  if (signinForm) {
    signinForm.addEventListener('submit', function (e) {
      e.preventDefault();

      const email = this.email.value.trim();
      const password = this.password.value;

      if (!email || !password) {
        alert('Both fields are required!');
        return;
      }

      // Simulated check (add real backend check later)
      if (email === 'test@rupeezy.com' && password === '123456') {
        alert('Login successful! Redirecting to Dashboard...');
        localStorage.setItem('isLoggedIn', 'true');
        window.location.href = 'dashboard.html'; // optional page
      } else {
        alert('Invalid credentials. Try again!');
      }
    });
  }

});

function handleApplyClick() {
  const isLoggedIn = localStorage.getItem('isLoggedIn');
  if (isLoggedIn === 'true') {
    window.location.href = 'apply.html';
  } else {
    alert('You must sign in to apply for a loan.');
    window.location.href = 'signin.html';
  }
}

function logout() {
  localStorage.removeItem('isLoggedIn');
  alert('You have been logged out.');
  window.location.href = 'index.html';
}
document.addEventListener('DOMContentLoaded', () => {
  const protectedPages = ['dashboard.html', 'apply.html', 'myloans.html'];
  const currentPage = window.location.pathname.split('/').pop();

  if (protectedPages.includes(currentPage)) {
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn !== 'true') {
      alert('Please sign in first.');
      window.location.href = 'signin.html';
    }
  }
});
const profileBtn = document.getElementById("profileBtn");
const dropdownMenu = document.getElementById("dropdownMenu");

profileBtn.addEventListener("click", (e) => {
  e.stopPropagation(); // Prevent closing on the same click
  dropdownMenu.style.display =
    dropdownMenu.style.display === "block" ? "none" : "block";
});

// Close dropdown when clicking outside
window.addEventListener("click", function () {
  dropdownMenu.style.display = "none";
});
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("profileForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      alert("Profile updated successfully!");
    });
  }
});


document.addEventListener("DOMContentLoaded", () => {
  // APPLY PAGE LOGIC
  const applyForm = document.getElementById("applyForm");
  const popup = document.getElementById("applyPopup");
  const okBtn = document.getElementById("applyOkBtn");

  if (applyForm) {
    applyForm.addEventListener("submit", function (e) {
      e.preventDefault();
      const amount = document.getElementById("loanAmount").value;

      if (!amount || isNaN(amount)) {
        alert("Please enter a valid loan amount.");
        return;
      }

      const newLoan = {
        amount: amount,
        date: new Date().toLocaleDateString(),
        status: "Pending",
        dueDate: "To be decided"
      };

      let loans = JSON.parse(localStorage.getItem("rupeezyLoans")) || [];
      loans.push(newLoan);
      localStorage.setItem("rupeezyLoans", JSON.stringify(loans));

      popup.style.display = "flex";
    });

    okBtn.addEventListener("click", () => {
      popup.style.display = "none";
      window.location.href = "myloans.html";
    });
  }
});
