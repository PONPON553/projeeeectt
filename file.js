
const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide(index) {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[index].classList.add('active');
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides.length;
  showSlide(currentSlide);
}

setInterval(nextSlide, 4000); 


const searchInput = document.getElementById('searchInput');
const cards = document.querySelectorAll('.card');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  cards.forEach(card => {
    const title = card.getAttribute('data-title').toLowerCase();
    if (title.includes(query)) {
      card.style.display = '';
    } else {
      card.style.display = 'none';
    }
  });
});
