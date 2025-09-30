
(function () {
  const cardsData = [
    { title: "Candi Prambanan",      img: "CandiPrambanan.jpg",      link: "prambanan.html" },
    { title: "Taman Sari",           img: "TamanSari.jpg",          link: "tamansari.html" },
    { title: "Malioboro",            img: "Malioboro.jpg",          link: "malioboro.html" },
    { title: "Pantai Parangtritis",  img: "PantaiParangtritis.jpg", link: "parangtritis.html" },
    { title: "Hutan Pinus Mangunan", img: "HutanPinus.jpg",         link: "pinus.html" }
  ];

  const container = document.getElementById('cardContainer');
  const overlay   = document.getElementById('overlay');
  const overlayImg= document.getElementById('overlayImg');
  const searchInput = document.getElementById('searchInput');

  if (!container) {
    console.error("test.js: #cardContainer tidak ditemukan. Pastikan ada <div id='cardContainer'> di HTML.");
    return;
  }

  function createCard(item) {
    const div = document.createElement('div');
    div.className = 'card';
    div.setAttribute('data-link', item.link);
    div.setAttribute('data-img', item.img);

    const img = document.createElement('img');
    img.src = item.img;
    img.alt = item.title;
    div.appendChild(img);

    const h3 = document.createElement('h3');
    h3.textContent = item.title;
    div.appendChild(h3);

    div.addEventListener('click', () => {
      const link = div.getAttribute('data-link') || '#';
      const imgSrc = div.getAttribute('data-img') || '';

      if (overlay && overlayImg) {
        overlayImg.src = imgSrc;
        overlay.classList.add('active');
        if (overlay.style.display === '' || overlay.style.display === 'none') {
          overlay.style.display = 'flex';
        }
        setTimeout(() => {
          window.location.href = link;
        }, 800);
      } else {
        window.location.href = link;
      }
    });

    return div;
  }

  function renderCards(list) {
    container.innerHTML = ''; // bersihkan dulu
    list.forEach(item => {
      const card = createCard(item);
      container.appendChild(card);
    });
  }

  function initSearch() {
    if (!searchInput) return;
    searchInput.addEventListener('input', (e) => {
      const q = (e.target.value || '').trim().toLowerCase();
      const cards = container.querySelectorAll('.card');
      cards.forEach(card => {
        const text = (card.innerText || card.textContent || '').toLowerCase();
        card.style.display = text.includes(q) ? '' : 'none';
      });
    });
  }

  document.addEventListener('DOMContentLoaded', () => {
    renderCards(cardsData);
    initSearch();
  });

  if (document.readyState === 'interactive' || document.readyState === 'complete') {
    renderCards(cardsData);
    initSearch();
  }

  // p : expose data ke console agar bisa diubah saat debugging
  window.__cardsData = cardsData;
  window.__renderCards = renderCards;
})();
