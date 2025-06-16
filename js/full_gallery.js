// --- full_gallery.js (Updated to read URL filters) ---

document.addEventListener('DOMContentLoaded', function() {
    // Check if imageData exists
    if (typeof imageData === 'undefined') {
        console.error("Gallery data not found.");
        return;
    }

    const galleryContainer = document.getElementById('full_gallery_grid');
    const filterButtons = document.querySelectorAll('.filter_btn');
    const descriptionBox = document.getElementById('gallery_description_box');
    const currentFilterHeader = document.getElementById('gallery_current_filter_header');

    // Descriptions object from before
    const categoryDescriptions = {
        all: { title: 'Our Complete Project Gallery', text: 'Here is a comprehensive look at the quality and craftsmanship we bring to every project, from complete kitchen overhauls to detailed bathroom renovations.' },
        kitchen: { title: 'Kitchen Remodeling', text: 'The kitchen is the heart of the home. We specialize in creating beautiful, functional spaces with custom cabinetry, durable countertops, and layouts designed for how you live.' },
        bathroom: { title: 'Bathroom Renovations', text: 'From spa-like master retreats to functional family bathrooms, we transform outdated spaces into modern, comfortable sanctuaries with high-quality fixtures and finishes.' },
        living_room: { title: 'Living Room Projects', text: 'We create warm and inviting living areas perfect for family gatherings and relaxation, focusing on custom built-ins, updated flooring, and enhanced lighting.' },
        outdoor: { title: 'Outdoor Spaces', text: 'Extend your living area to the outdoors. We design and build stunning custom decks, patios, and porches perfect for entertaining, grilling, and enjoying the fresh air.' },
        bedroom: { title: 'Bedroom Remodels', text: 'Your bedroom should be a peaceful escape. We help design serene and personal spaces with improved layouts, custom closets, and calming aesthetics.' },
        misc: { title: 'Miscellaneous & Custom Projects', text: 'Have another project in mind? We handle a wide range of custom requests including basement finishing, custom carpentry, entryways, and much more. If you can dream it, we can build it.' }
    };

    function displayImages(filterCategory) {
        // Update description box
        if (categoryDescriptions[filterCategory]) {
            const descriptionData = categoryDescriptions[filterCategory];
            descriptionBox.innerHTML = `
                <h3 class="gallery_description_title">${descriptionData.title}</h3>
                <p class="gallery_description_text">${descriptionData.text}</p>
            `;
            descriptionBox.classList.add('active');
        } else {
            descriptionBox.innerHTML = '';
            descriptionBox.classList.remove('active');
        }

        // Display images
        galleryContainer.innerHTML = '';
        const filteredImages = (filterCategory === 'all')
            ? imageData
            : imageData.filter(image => image.category === filterCategory);

        if (filteredImages.length === 0) {
            galleryContainer.innerHTML = '<p class="no_images_found">No photos found for this category.</p>';
            return;
        }


        filteredImages.forEach(image => {
            const galleryItem = document.createElement('a');
            galleryItem.href = image.largeSrc;
            galleryItem.setAttribute('data-lightbox', filterCategory);
            galleryItem.setAttribute('data-title', image.alt);

            const imgElement = document.createElement('img');
            imgElement.src = image.src;
            imgElement.alt = image.alt;
            imgElement.loading = 'lazy';

            galleryItem.appendChild(imgElement);
            galleryContainer.appendChild(galleryItem);
        });
    }

    // --- NEW LOGIC FOR PAGE LOAD ---
    // This part runs once when the gallery page first loads.

    // 1. Get the URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const filterFromURL = urlParams.get('filter');

    // 2. Check if a filter was passed in the URL
    if (filterFromURL) {
        // If yes, display images for that category
        displayImages(filterFromURL);

        // Also, update the active state of the filter buttons
        filterButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-category') === filterFromURL) {
                btn.classList.add('active');
            }
        });
    } else {
        // If no filter in URL, just display "all" as the default
        displayImages('all');
    }

    // The click event listeners for the buttons remain the same
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            const category = button.getAttribute('data-category');
            displayImages(category);
        });
    });

});