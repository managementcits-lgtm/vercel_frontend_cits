document.addEventListener("DOMContentLoaded", () => {

  const buttons = document.querySelectorAll(".ws-filters button");
  const cards = document.querySelectorAll(".ws-card");

  buttons.forEach(button => {
    button.addEventListener("click", () => {

      buttons.forEach(btn => btn.classList.remove("active"));
      button.classList.add("active");

      const filter = button.dataset.filter;

      cards.forEach(card => {
        if (filter === "all") {
          card.style.display = "block";
        } else {
          card.style.display =
            card.dataset.status === filter ? "block" : "none";
        }
      });

    });
  });

  const lightbox = document.getElementById("lightbox");
  const lightboxImg = document.getElementById("lightbox-img");
  const lightboxTitle = document.getElementById("lightbox-title");
  const lightboxDesc = document.getElementById("lightbox-desc");
  const closeBtn = document.querySelector(".close");

  document.querySelectorAll(".gallery-item").forEach(item => {
    item.addEventListener("click", () => {
      lightbox.style.display = "flex";
      lightboxImg.src = item.querySelector("img").src;
      lightboxTitle.textContent = item.dataset.title;
      lightboxDesc.textContent = item.dataset.desc;
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      lightbox.style.display = "none";
    });
  }

  if (lightbox) {
    lightbox.addEventListener("click", e => {
      if (e.target === lightbox) {
        lightbox.style.display = "none";
      }
    });
  }

});
