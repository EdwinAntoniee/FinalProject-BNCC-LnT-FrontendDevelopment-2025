document.querySelectorAll(".product-rating").forEach(function (ratingElem) {
  const rating = parseFloat(ratingElem.getAttribute("data-rating")) || 0;
  let starsHTML = "";
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

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".icon-nonlaptop");
  const sidebar = document.getElementById("sidebarNav");
  const closeBtn = document.getElementById("closeSidebar");

  if (hamburger && sidebar && closeBtn) {
    hamburger.addEventListener("click", function () {
      sidebar.classList.add("open");
    });

    closeBtn.addEventListener("click", function () {
      sidebar.classList.remove("open");
    });

    sidebar.addEventListener("click", function (e) {
      if (e.target === sidebar) {
        sidebar.classList.remove("open");
      }
    });
  }

  document.querySelectorAll(".product-item").forEach((item) => {
    item.addEventListener("click", function () {
      const bookId = this.getAttribute("data-book-id");
      window.location.href = `../product-detail-page/product-detail-page.html?id=${bookId}`;
    });
  });

  document.querySelectorAll(".product-item").forEach((item) => {
    const bookId = item.getAttribute("data-book-id");
    if (books[bookId]) {
      const priceElement = item.querySelector(".product-price");
      if (priceElement) {
        priceElement.textContent = books[bookId].price;
      }
    }
  });

  document.querySelectorAll("banner1").forEach((item) => {
    item.addEventListener("click", function () {
      const bookId = this.getAttribute("data-book-id");
      window.location.href = `../product-detail-page/product-detail-page.html?id=${bookId}`;
    });
  });

  document.querySelectorAll("banner2").forEach((item) => {
    item.addEventListener("click", function () {
      const bookId = this.getAttribute("data-book-id");
      window.location.href = `../product-detail-page/product-detail-page.html?id=${bookId}`;
    });
  });

  document.querySelectorAll("banner1-phone").forEach((item) => {
    item.addEventListener("click", function () {
      const bookId = this.getAttribute("data-book-id");
      window.location.href = `../product-detail-page/product-detail-page.html?id=${bookId}`;
    });
  });

  document.querySelectorAll("banner2-phone").forEach((item) => {
    item.addEventListener("click", function () {
      const bookId = this.getAttribute("data-book-id");
      window.location.href = `../product-detail-page/product-detail-page.html?id=${bookId}`;
    });
  });
});

const cartIcon = document.querySelector(".shopping-cart");
  if (cartIcon) {
    cartIcon.addEventListener("click", function () {
      window.location.href = "../checkout-page/shopping-cart.html";
    });
  }