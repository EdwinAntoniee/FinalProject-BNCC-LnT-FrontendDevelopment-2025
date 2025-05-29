document.querySelectorAll('.product-rating').forEach(function(ratingElem) {
    const rating = parseFloat(ratingElem.getAttribute('data-rating')) || 0;
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (rating >= i - 0.5) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    ratingElem.innerHTML = starsHTML;
});

document.querySelectorAll('.recomendation-rating').forEach(function(ratingElem) {
    const rating = parseFloat(ratingElem.getAttribute('data-rating')) || 0;
    let starsHTML = '';
    for (let i = 1; i <= 5; i++) {
        if (rating >= i) {
            starsHTML += '<i class="fas fa-star"></i>';
        } else if (rating >= i - 0.5) {
            starsHTML += '<i class="fas fa-star-half-alt"></i>';
        } else {
            starsHTML += '<i class="far fa-star"></i>';
        }
    }
    ratingElem.innerHTML = starsHTML;
});

// Add this to your product-detail-page.js
document.addEventListener('DOMContentLoaded', function() {
    // Get all image choice elements
    const imageChoices = document.querySelectorAll('.image-choice');
    const highlightedImage = document.querySelector('.image-highlighted');

    // Add click event listener to each image choice
    imageChoices.forEach(function(image) {
        image.addEventListener('click', function() {
            // Get the source of the clicked image
            const newImageSrc = this.getAttribute('src');
            
            // Update the highlighted image source
            highlightedImage.setAttribute('src', newImageSrc);
            
            // Optional: Add visual feedback for selected thumbnail
            imageChoices.forEach(img => img.parentElement.classList.remove('selected'));
            this.parentElement.classList.add('selected');
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
  const hamburger = document.querySelector('.icon-nonlaptop');
  const sidebar = document.getElementById('sidebarNav');
  const closeBtn = document.getElementById('closeSidebar');

  if (hamburger && sidebar && closeBtn) {
    hamburger.addEventListener('click', function() {
      sidebar.classList.add('open');
    });

    closeBtn.addEventListener('click', function() {
      sidebar.classList.remove('open');
    });

    // Optional: close sidebar when clicking outside
    sidebar.addEventListener('click', function(e) {
      if (e.target === sidebar) {
        sidebar.classList.remove('open');
      }
    });
  }
});
