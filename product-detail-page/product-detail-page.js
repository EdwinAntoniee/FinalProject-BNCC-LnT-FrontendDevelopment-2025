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


// ...existing code...

// Hamburger menu functionality
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