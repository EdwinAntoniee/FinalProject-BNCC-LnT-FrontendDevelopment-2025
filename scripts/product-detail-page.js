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

document
  .querySelectorAll(".recomendation-rating")
  .forEach(function (ratingElem) {
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

  const imageChoices = document.querySelectorAll(".image-choice");
  const highlightedImage = document.querySelector(".image-highlighted");

  // Add click event listener to each image choice
  imageChoices.forEach(function (image) {
    image.addEventListener("click", function () {
      // Get the source of the clicked image
      const newImageSrc = this.getAttribute("src");

      // Update the highlighted image source
      highlightedImage.setAttribute("src", newImageSrc);

      // Optional: Add visual feedback for selected thumbnail
      imageChoices.forEach((img) =>
        img.parentElement.classList.remove("selected")
      );
      this.parentElement.classList.add("selected");
    });
  });

  // Get book ID from URL
  const urlParams = new URLSearchParams(window.location.search);
  const bookId = urlParams.get("id");

  // Get book data
  const book = books[bookId];

  if (book) {
    // Update page content with book data
    document.querySelector(".product-name").textContent = book.title;
    document
      .querySelector(".product-rating")
      .setAttribute("data-rating", book.rating);
    document.querySelector(".product-price p").textContent = book.price;
    document.querySelector(".product-story p").textContent = book.description;
    document.querySelector(".product-author p").textContent = book.author;
    document.querySelector(".product-date p").textContent = book.publishDate;

    // Update images
    document.querySelector(".image-highlighted").src = book.images.photoshoot;
    document.querySelectorAll(".image-choice").forEach((img, index) => {
      if (index === 0) img.src = book.images.photoshoot;
      if (index === 1) img.src = book.images.front;
      if (index === 2) img.src = book.images.back;
    });

    // Update overview
    const overviewContainer = document.querySelector(".overview-content");
    overviewContainer.querySelector(
      ".overview-left .overview-text p"
    ).textContent = book.overview[0];
    overviewContainer.querySelector(
      ".overview-right .overview-text p"
    ).textContent = book.overview[1];

    // Update product specifications
    document.querySelector("#product-title p").textContent = book.title;
    document.querySelector("#product-author p").textContent = book.author;
    document.querySelector("#product-publisher p").textContent = book.publisher;
    document.querySelector("#product-release p").textContent = book.publishDate;
    document.querySelector("#product-language p").textContent = book.language;
    document.querySelector(
      "#product-pages p"
    ).textContent = `${book.pages} pages`;
    document.querySelector("#product-isbn p").textContent = book.isbn;
    document.querySelector("#product-dimentions p").textContent =
      book.dimensions;
    document.querySelector("#product-weight p").textContent = book.weight;
    document.querySelector("#product-cover p").textContent = book.coverType;
    document.querySelector("#product-genre p").textContent = book.genre;
    document.querySelector("#product-reading-age p").textContent =
      book.readingAge;
    document.querySelector("#product-series p").textContent = book.series;

    const [category, number] = bookId.split("-");
    const currentNum = parseInt(number);
    const recomList = document.querySelector(".recomendation-list");
    recomList.innerHTML = ""; // Clear existing recommendations

    // Generate next 6 book recommendations
    for (let i = 1; i <= 6; i++) {
      const nextNum = ((currentNum + i - 1) % 11) + 1; // Loop back to 1 if exceeds 11
      const nextBookId = `${category}-${nextNum}`;
      const nextBook = books[nextBookId];

      if (nextBook && nextBookId !== bookId) {
        const recomHTML = `
                    <div class="recomendation-products" data-book-id="${nextBookId}">
                        <div class="image-card2">
                            <div class="image-wrapper">
                                <img src="${nextBook.images.photoshoot}" alt="${nextBook.title}">
                            </div>
                        </div>
                        <div class="recomendation-details">
                            <div class="recomendation-rating" data-rating="${nextBook.rating}"></div>
                            <p class="recomendation-name">${nextBook.title}</p>
                            <p class="recomendation-price">${nextBook.price}</p>
                        </div>
                    </div>
                `;
        recomList.innerHTML += recomHTML;
      }
    }

    // Re-initialize rating stars for recommendations
    document
      .querySelectorAll(".recomendation-rating")
      .forEach(function (ratingElem) {
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

    // Add click handlers for recommendation items
    document.querySelectorAll(".recomendation-products").forEach((item) => {
      item.addEventListener("click", function () {
        const recBookId = this.getAttribute("data-book-id");
        window.location.href = `product-detail-page.html?id=${recBookId}`;
      });
    });
  }
});
