const BASE_URL = window.__BASE_URL__;


export function runMouScript(mousData) {
  const cardsEl = document.getElementById("cards");
  if (!cardsEl) return;

  renderCards(mousData);

  document.querySelectorAll(".filter-btn").forEach(btn => {
    btn.onclick = () => {
      document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      const filter = btn.dataset.filter;
      const filtered = filter === "all" ? mousData : mousData.filter(m => m.category === filter);
      renderCards(filtered);
      updateResultCount(filtered.length, mousData.length);
    };
  });

  const searchInput = document.getElementById("searchInput");
  if (searchInput) {
    searchInput.onkeyup = () => {
      const value = searchInput.value.toLowerCase();
      const filtered = mousData.filter(m => m.title.toLowerCase().includes(value));
      renderCards(filtered);
      updateResultCount(filtered.length, mousData.length);
    };
  }
}

function renderCards(data) {
  const cardsEl = document.getElementById("cards");
  cardsEl.innerHTML = "";
  data.forEach(mou => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
      <div class="icon"><i class="bi ${mou.icon}"></i></div>
      <span class="tag">${mou.category}</span>
      <h3>${mou.title}</h3>
      <p>${mou.description.slice(0, 80)}...</p>
    `;
    card.onclick = () => openModal(mou);
    cardsEl.appendChild(card);
  });
}

function updateResultCount(showing, total) {
  const el = document.getElementById("resultCount");
  if (el) el.innerText = `Showing ${showing} of ${total} partnerships`;
}

export function openModal(mou) {
  document.getElementById("modalIcon").className = `bi ${mou.icon}`;
  document.getElementById("modalTag").innerText = mou.category;
  document.getElementById("modalTitle").innerText = mou.title;
  document.getElementById("modalDate").innerText = mou.start_date;
  document.getElementById("modalDesc").innerText = mou.description;

  const list = document.getElementById("modalList");
  list.innerHTML = "";
  if (mou.highlights) {
    mou.highlights.forEach(h => {
      const li = document.createElement("li");
      li.innerText = h;
      list.appendChild(li);
    });
  }

  const pdfBtn = document.getElementById("viewPdf");
  if (mou.pdf) {
    let finalUrl = "";
    
    if (mou.pdf.startsWith('http')) {
      // Django full URL isthe, direct ga vaadali
      finalUrl = mou.pdf;
    } else {
      // Path mathrame isthe, BASE_URL thodu cheyali
      const pdfPath = mou.pdf.startsWith('/') ? mou.pdf : `/${mou.pdf}`;
      finalUrl = `${BASE_URL}${pdfPath}`;
    }
    
    pdfBtn.href = finalUrl;
    pdfBtn.style.display = "inline-flex";
  } else {
    pdfBtn.style.display = "none";
  }

  document.getElementById("mouModal").classList.add("show");
}

window.closeModal = function () {
  const modal = document.getElementById("mouModal");
  if (modal) modal.classList.remove("show");
};