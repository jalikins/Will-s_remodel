// --- NEW: Notification Banner Logic ---
document.addEventListener('DOMContentLoaded', () => {
  const banner = document.getElementById('wip-notification-banner');

  if (banner) {
      // Show the banner after a short delay
      setTimeout(() => {
          banner.classList.add('visible');
      }, 500); // 0.5 second delay before showing

      // Hide the banner after it has been visible for 5 seconds
      setTimeout(() => {
          banner.classList.remove('visible');
      }, 9500); // 5.5 seconds total from page load
  }
});
// --- END NEW ---