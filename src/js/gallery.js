export function rungallery() {

  const API_URL = "http://127.0.0.1:8000/api/gallery/";

  let galleryItems = []; // 🔴 static array remove

  const grid = document.getElementById("galleryGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");

  if (!grid || !modal) return; // 🔑 safety for React

  // 🔹 Fetch images from backend
  fetch(API_URL)
    .then(res => res.json())
    .then(data => {
      galleryItems = data;     // 🔹 DB data
      renderGallery("All");   // default
    })
    .catch(err => console.error("Gallery API Error:", err));

  function renderGallery(category) {
    grid.innerHTML = "";

    galleryItems
      .filter(item => category === "All" || item.category === category)
      .forEach(item => {
        const card = document.createElement("div");
        card.className = "gallery-card";

        card.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <div class="gallery-info">
            <h4>${item.title}</h4>
            <span>${item.category}</span>
          </div>
        `;

        card.addEventListener("click", () => openModal(item));
        grid.appendChild(card);
      });
  }

  function openModal(item) {
    modalImage.src = item.image;
    modalTitle.textContent = item.title;
    modalCategory.textContent = item.category;
    modal.style.display = "flex";
  }

  // expose close for React button
  window.closeGalleryModal = function () {
    modal.style.display = "none";
  };

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  // 🔹 existing filter buttons work as-is
  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");
      renderGallery(btn.dataset.category);
    });
  });
}
