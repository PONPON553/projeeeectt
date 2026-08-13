// Простий пошук в списках плагінів і модів
const searchInput = document.getElementById('searchInput');

searchInput.addEventListener('input', () => {
  const query = searchInput.value.toLowerCase();

  const items = document.querySelectorAll('.items .item');
  items.forEach(item => {
    const name = item.getAttribute('data-name').toLowerCase();
    if (name.includes(query)) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
});

// Підписка на новини (імітація)
const subscribeBtn = document.getElementById('subscribeBtn');
const emailInput = document.getElementById('emailInput');

subscribeBtn.addEventListener('click', () => {
  const email = emailInput.value.trim();
  if (email && validateEmail(email)) {
    alert(`Дякуємо за підписку, ${email}!`);
    emailInput.value = '';
  } else {
    alert('Будь ласка, введіть дійсну електронну пошту.');
  }
});

function validateEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}
