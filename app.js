// Data wisata — kamu bisa tambah / ubah sesuai kebutuhan
const wisata = [
  {
    id: 1,
    title: "Candi Prambanan",
    top: "Candi Prambanan",
    desc: "Candi Hindu terbesar di Indonesia yang merupakan warisan dunia UNESCO.",
    img: "https://images.unsplash.com/photo-1533689127179-1e8f0a1a9a4a?auto=format&fit=crop&w=1200&q=60"
  },
  {
    id: 2,
    title: "Taman Sari",
    top: "Taman Sari",
    desc: "Bekas taman kerajaan Kesultanan Yogyakarta yang unik dan artistik.",
    img: "https://images.unsplash.com/photo-1549887534-4f8b6c8c3fcd?auto=format&fit=crop&w=1200&q=60"
  },
  {
    id: 3,
    title: "Malioboro",
    top: "Malioboro",
    desc: "Jalan legendaris untuk belanja oleh-oleh, kuliner, dan wisata budaya.",
    img: "https://images.unsplash.com/photo-1542435503-956c469947f6?auto=format&fit=crop&w=1200&q=60"
  },
  {
    id: 4,
    title: "Pantai Parangtritis",
    top: "Pantai Parangtritis",
    desc: "Pantai paling terkenal di Jogja dengan pasir hitam dan ombak besar.",
    img: "https://images.unsplash.com/photo-1470071459604-3b5ec3a7fe05?auto=format&fit=crop&w=1200&q=60"
  },
  {
    id: 5,
    title: "Hutan Pinus Mangunan",
    top: "Hutan Pinus Mangunan",
    desc: "Tempat tenang dengan suasana alami dan udara segar di atas perbukitan.",
    img: "https://images.unsplash.com/photo-1456926631375-92c8ce872def?auto=format&fit=crop&w=1200&q=60"
  }
];

// Render semua kartu
const cardsContainer = document.getElementById('cards');

function createCard(item) {
  const div = document.createElement('article');
  div.className = 'card';
  div.innerHTML = `
    <div class="thumb" style="background-image:url('${item.img}')"></div>
    <div class="card-body">
      <div class="title-top">${item.top}</div>
      <h3>${item.title}</h3>
      <p>${item.desc}</p>
    </div>
  `;
  return div;
}

function renderList(list) {
  cardsContainer.innerHTML = '';
  if (list.length === 0) {
    cardsContainer.innerHTML = '<p style="grid-column:1/-1; text-align:center; color:#777;">Tidak ada hasil.</p>';
    return;
  }
  list.forEach(it => cardsContainer.appendChild(createCard(it)));
}

// Pencarian simple (filter berdasarkan title atau desc)
const search = document.getElementById('search');
search.addEventListener('input', (e) => {
  const q = e.target.value.trim().toLowerCase();
  const filtered = wisata.filter(w => 
    w.title.toLowerCase().includes(q) ||
    w.top.toLowerCase().includes(q) ||
    w.desc.toLowerCase().includes(q)
  );
  renderList(filtered);
});

// Inisialisasi
renderList(wisata);
