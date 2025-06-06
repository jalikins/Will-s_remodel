document.addEventListener('DOMContentLoaded', function() {
    const galleryGrid = document.getElementById('kitchen-gallery-grid');

    // ** IMPORTANT: MANUALLY LIST YOUR IMAGE FILENAMES HERE **
    // Store your kitchen images in: 'images/services/kitchens/'
    // For each image, provide:
    //   - src: path to the thumbnail/display image
    //   - largeSrc: path to the larger image for lightbox
    //   - alt: alt text for the image
    //   - title: caption for the lightbox (optional)
    const kitchenImages = [
        {
            src: '../images/services/kitchens/kitchen-1.jpg',
            largeSrc: '../images/services/kitchens/kitchen-1-large.jpg',
            alt: 'Bright Modern Kitchen with Island',
            title: 'Bright Modern Kitchen with Island'
        },
        {
            src: '../images/services/kitchens/kitchen-2.jpg',
            largeSrc: '../images/services/kitchens/kitchen-2-large.jpg',
            alt: 'Custom Cabinetry in a Farmhouse Kitchen',
            title: 'Custom Cabinetry & Farmhouse Sink'
        },
        {
            src: '../images/services/kitchens/kitchen-3.jpg',
            largeSrc: '../images/services/kitchens/kitchen-3-large.jpg',
            alt: 'Sleek Kitchen with Dark Cabinets',
            title: 'Sleek Kitchen with Dark Cabinets & Gold Accents'
        },
        {
            src: '../images/services/kitchens/kitchen-4.jpg',
            largeSrc: '../images/services/kitchens/kitchen-4-large.jpg',
            alt: 'Open Concept Kitchen and Dining Area',
            title: 'Spacious Open Concept Kitchen'
        },
        {
            src: '../images/services/kitchens/kitchen-5.jpg',
            largeSrc: '../images/services/kitchens/kitchen-5-large.jpg',
            alt: 'Detailed Tiling Backsplash in Kitchen',
            title: 'Detailed Tiling Backsplash'
        },
        {
            src: '../images/services/kitchens/kitchen-6.jpg',
            largeSrc: '../images/services/kitchens/kitchen-6-large.jpg',
            alt: 'Compact and Efficient Galley Kitchen Remodel',
            title: 'Compact Galley Kitchen'
        }
        // Add more image objects here as you add images to the folder
    ];

    if (galleryGrid) {
        kitchenImages.forEach(imageData => {
            const linkElement = document.createElement('a');
            linkElement.href = imageData.largeSrc;
            linkElement.setAttribute('data-lightbox', 'kitchen-showcase'); // All images in this gallery share this group name
            if (imageData.title) {
                linkElement.setAttribute('data-title', imageData.title);
            }

            const imgElement = document.createElement('img');
            imgElement.src = imageData.src;
            imgElement.alt = imageData.alt;

            linkElement.appendChild(imgElement);
            galleryGrid.appendChild(linkElement);
        });
    } else {
        console.error('Gallery grid container not found!');
    }
});