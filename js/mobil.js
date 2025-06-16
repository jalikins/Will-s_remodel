const primaryNav = document.querySelector('.primary_navigation');
const navToggle = document.querySelector('.mobile_nav_toggle');

navToggle.addEventListener('click', () => {
    const visibility = primaryNav.getAttribute('data-visible');

    if (visibility === "false") {
        primaryNav.setAttribute('data-visible', true);
        navToggle.setAttribute('aria-expanded', true);
    } else if (visibility === "true") {
        primaryNav.setAttribute('data-visible', false);
        navToggle.setAttribute('aria-expanded', false);
    }
});
document.addEventListener("DOMContentLoaded", function() {
  // Select all "back to top" links
  const backToTopLinks = document.querySelectorAll('a[href="#top"]');

  backToTopLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      // 1. Prevent the default jump-to-top action
      e.preventDefault();

      // 2. Animate the scroll to the top of the page
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  });
});