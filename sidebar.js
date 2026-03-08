// Sidebar toggle for mobile
function toggleSidebar() {
  const nav = document.querySelector('.resources-nav');
  nav.classList.toggle('open');
}

document.addEventListener('DOMContentLoaded', function() {
  const btn = document.getElementById('sidebar-toggle');
  if (btn) {
    btn.addEventListener('click', toggleSidebar);
  }
  // Close sidebar when any nav link is clicked
  const navLinks = document.querySelectorAll('.resources-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', function() {
      const nav = document.querySelector('.resources-nav');
      nav.classList.remove('open');
    });
  });
});
