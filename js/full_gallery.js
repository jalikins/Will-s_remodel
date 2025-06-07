// --- full_gallery.js (Corrected and with Debugging) ---

document.addEventListener('DOMContentLoaded', function() {
    console.log("Script 'full_gallery.js' has started.");

    // Check if the imageData variable exists (it should be loaded from gallery_data.js)
    if (typeof imageData === 'undefined' || imageData.length === 0) {
        console.error("Critical Error: The 'imageData' array is missing, empty, or not loaded. Make sure 'gallery-data.js' is included before this script and has content.");
        return;
    }
    console.log("imageData found with", imageData.length, "items.");

    const galleryContainer = document.getElementById('full_gallery_grid');
    const filterButtons = document.querySelectorAll('.filter_btn'); // Using underscore for our class

    // Check if we found the necessary HTML elements
    if (!galleryContainer) {
        console.error("Critical Error: The gallery container with ID 'full_gallery_grid' was not found in the HTML.");
        return;
    }
    console.log("Gallery container found:", galleryContainer);
    console.log(filterButtons.length, "filter buttons found.");

    function displayImages(filterCategory) {
        console.log("Filtering for category:", filterCategory);
        galleryContainer.innerHTML = ''; // Clear the gallery

        const filteredImages = (filterCategory === 'all')
            ? imageData
            : imageData.filter(image => image.category === filterCategory);

        console.log("Found", filteredImages.length, "images for this category.");

        if (filteredImages.length === 0) {
            galleryContainer.innerHTML = '<p class="no_images_found">No photos found for this category.</p>';
            return;
        }

        filteredImages.forEach(image => {
            const galleryItem = document.createElement('a');
            galleryItem.href = image.largeSrc;
            
            // --- FIX 1: Use hyphens for third-party library attributes ---
            galleryItem.setAttribute('data-lightbox', image.category); // MUST be 'data-lightbox'
            galleryItem.setAttribute('data-title', image.alt);      // MUST be 'data-title'

            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            imgElement.loading = 'lazy'; // Improve performance

            galleryItem.appendChild(imgElement);
            galleryContainer.appendChild(galleryItem);
        });
        console.log("Finished adding images to the page.");
    }

    // Event listeners for filter buttons
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // --- FIX 2: Use hyphens for standard data attributes ---
            const category = button.getAttribute('data-category'); // MUST be 'data-category'
            
            displayImages(category);
        });
    });

    // Initially display all images when the page loads
    displayImages('all');
});