$(document).ready(function(){
    
    // Find the element with the class 'reviews_grid' and initialize Slick Carousel on it
    $('.reviews_grid').slick({
        dots: true,          // Shows the dots at the bottom for navigation
        infinite: true,      // Loops the carousel back to the beginning
        speed: 1000,          // Animation speed in milliseconds
        autoplay: true,      // Automatically advances the slides
        autoplaySpeed: 5000, // Time in ms before sliding to the next one (5 seconds)
        
        slidesToShow: 3,     // How many slides to show at once on larger screens
        slidesToScroll: 1,   // How many slides to scroll at a time
        
        // This part makes the carousel responsive for different screen sizes
        responsive: [
            {
                breakpoint: 1024, // On screens smaller than 1024px
                settings: {
                    slidesToShow: 2, // Show 2 slides
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768, // On screens smaller than 768px
                settings: {
                    slidesToShow: 1, // Show 1 slide
                    slidesToScroll: 1,
                    arrows: false // Optionally hide the arrows on very small screens
                }
            }
        ]
    });

});

// --- Mobile Navigation Toggle ---

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

// In a <script> tag on your index.html page

document.addEventListener('DOMContentLoaded', () => {
  // Find all links that have a data-filter attribute
  const filterLinks = document.querySelectorAll('a[data-filter]');

  filterLinks.forEach(link => {
    link.addEventListener('click', (e) => {
      // Get the filter value from the data-filter attribute
      const filterValue = link.dataset.filter;
      
      // Save it to sessionStorage
      // This storage is temporary and lasts only for the browser tab session
      sessionStorage.setItem('galleryFilter', filterValue);

      // The link will now navigate to "/gallery" as normal
    });
  });
});