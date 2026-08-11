// Дані плагінів/модів (як приклад, можна розширити/завантажувати динамічно)
const plugins = [
  {
    name: "WorldEdit",
    description: "Потужний редактор світу для швидких змін ландшафтів.",
    image: "https://wiki.sk89q.com/images/2/25/WorldEdit_logo.png",
    version: "7.2.0",
    downloadLink: "#"
  },
  {
    name: "OptiFine",
    description: "Оптимізація графіки і покращення продуктивності гри.",
    image: "https://cdn.curseforge.com/public/images/featured/optifine.png",
    version: "1.18.2 HD U H9",
    downloadLink: "#"
  },
  {
    name: "EssentialsX",
    description: "Набір потрібних команд і функцій для серверів Minecraft.",
    image: "https://essentialsx.net/images/essentialsx-logo.png",
    version: "2.19.0",
    downloadLink: "#"
  },
  {
    name: "Pixelmon",
    description: "Мод Pokémon у стилі Minecraft з новими істотами і пригодами.",
    image: "https://pixelmonmod.com/img/logo.png",
    version: "8.3.0",
    downloadLink: "#"
  }
];

// Функція для створення картки з деталями
function createCard(plugin) {
  const card = document.createElement('div');
  card.className = 'card';
  card.dataset.name = plugin.name;
  
  card.innerHTML = `
    <img src="${plugin.image}" alt="${plugin.name} Logo" />
    <h3>${plugin.name}</h3>
    <p>${plugin.description}</p>
    <p><strong>Версія:</strong> ${plugin.version}</p>
    <button class="download-btn">Завантажити</button>
  `;

  // Обробник кліку на саму картку (крім кнопки)
  card.addEventListener('click', (e) => {
    // Якщо клік не на кнопці завантаження
    if (!e.target.classList.contains('download-btn')) {
      showDetails(plugin);
    }
  });

  // Клік на кнопку Завантажити
  card.querySelector('.download-btn').addEventListener('click', (e) => {
    e.stopPropagation(); // не активує клік на картці
    alert(`Починаємо завантаження: ${plugin.name}`);
    window.open(plugin.downloadLink, '_blank');
  });

  return card;
}

// Відображення деталей плагіна/моду через alert (можна замінити на модальне вікно)
function showDetails(plugin) {
  alert(`Інформація про ${plugin.name}:\n\n${plugin.description}\n\nВерсія: ${plugin.version}`);
}

// Завантаження та відображення карток на сторінці
function loadPlugins() {
  const container = document.querySelector('.cards-container');
  container.innerHTML = ''; // очищаємо контейнер

  plugins.forEach(plugin => {
    const card = createCard(plugin);
    container.appendChild(card);
  });
}

// Фільтр по назві (проста реалізація)
function setupSearch() {
  const input = document.createElement('input');
  input.type = 'text';
  input.placeholder = 'Пошук плагінів і модів...';
  input.style.padding = '10px';
  input.style.marginBottom = '20px';
  input.style.width = '100%';
  input.style.fontSize = '16px';

  const main = document.querySelector('main');
  main.insertBefore(input, main.querySelector('.cards-container'));

  input.addEventListener('input', () => {
    const term = input.value.toLowerCase();
    const filtered = plugins.filter(p => p.name.toLowerCase().includes(term));
    
    const container = document.querySelector('.cards-container');
    container.innerHTML = '';
    
    filtered.forEach(plugin => {
      container.appendChild(createCard(plugin));
    });
  });
}

// Ініціалізація
document.addEventListener('DOMContentLoaded', () => {
  loadPlugins();
  setupSearch();
});
