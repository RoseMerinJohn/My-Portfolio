// Set current year in footer
document.getElementById("year").textContent = new Date().getFullYear();

// Initialize AOS (Animate on Scroll)
AOS.init({
  duration: 1000,
  once: true
});

// Toggle dark mode
function toggleDarkMode() {
  document.body.classList.toggle("dark");
}

// Toggle mobile menu
function toggleMenu() {
  document.querySelector('.nav-links').classList.toggle('active');
}
// Profile picture image upload preview
document.getElementById('pfpInput').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const imgUrl = URL.createObjectURL(file);
    document.getElementById('profilePic').src = imgUrl;
  }
});
