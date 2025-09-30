const track = document.querySelector('.carousel-track');
const prev = document.querySelector('.carousel-prev');
const next = document.querySelector('.carousel-next');

let index = 0;
const gap = 16;
const slides = Array.from(document.querySelectorAll('.carousel .card'));
const cardWidth = slides[0]?.offsetWidth || 260;
const step = cardWidth + gap;

function update() {
  track.style.transform = `translateX(${-index * step}px)`;
}

next?.addEventListener('click', () => {
  const visible = Math.floor(document.querySelector('.carousel').offsetWidth / step);
  const maxIndex = Math.max(0, slides.length - visible);
  index = Math.min(index + 1, maxIndex);
  update();
});

prev?.addEventListener('click', () => {
  index = Math.max(index - 1, 0);
  update();
});

if (document.querySelector('.carousel')?.dataset.autoplay === 'true') {
  setInterval(() => next.click(), 5000);
}