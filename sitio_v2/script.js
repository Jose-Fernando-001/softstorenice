// ============================================================
// BASE DE DATOS DE PRODUCTOS
// ------------------------------------------------------------
// Aquí se definen todos los productos de la tienda.
// Cada producto tiene: id, categoría (cat), si es destacado,
// tipo de badge (hot/pop/new), ícono emoji, nombre, descripción
// corta, precio, características (features) y especificaciones (specs).
//
// PARA AGREGAR UN PRODUCTO NUEVO:
//   - Copia un bloque existente, cambia el id (debe ser único)
//   - Ajusta cat, destacado, badgeType, icon, name, short, price
//   - Completa desc, features (array) y specs (array de {label, value})
// ============================================================
const productos = [
  // ── WINDOWS ──────────────────────────────────────────────
  {
    id: 1, cat: "windows", destacado: true, badgeType: "hot",
    icon: "🪟", name: "Windows 11 Pro",
    imagen: "img/Windows 11 Pro.png",
    short: "Licencia permanente, activación inmediata.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Licencia permanente para 1 PC", "Activación vía clave de producto", "Soporte para actualizaciones futuras", "Compatible con todo el hardware moderno"],
    specs: [
      { label: "Tipo de licencia", value: "Permanente" },
      { label: "Versión",          value: "Windows 11 Pro" },
      { label: "Entrega",          value: "Remota – WhatsApp" },
      { label: "Activación",       value: "Inmediata" }
    ]
  },
  {
    id: 2, cat: "windows", destacado: false, badgeType: "pop",
    icon: "🪟", name: "Windows 10 Pro",
    imagen: "img/Windows 10 Pro.png",
    short: "La versión clásica y estable más usada en el mundo.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Licencia permanente para 1 PC", "Ideal para equipos antiguos", "Soporte extendido hasta 2025", "Activación inmediata por clave"],
    specs: [
      { label: "Tipo de licencia", value: "Permanente" },
      { label: "Versión",          value: "Windows 10 Pro" },
      { label: "Entrega",          value: "Remota – WhatsApp" },
      { label: "Activación",       value: "Inmediata" }
    ]
  },

  // ── OFFICE ───────────────────────────────────────────────
  {
    id: 3, cat: "office", destacado: true, badgeType: "hot",
    icon: "📄", name: "Office 2024 Plus",
    imagen: "img/Office 2024 Professional Plus.png",
    short: "Word, Excel, PowerPoint y más. Permanente.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Word, Excel, PowerPoint, Outlook", "Licencia permanente sin suscripción", "Incluye OneNote y Publisher", "1 instalación en PC o Mac"],
    specs: [
      { label: "Aplicaciones", value: "Word, Excel, PPT, Outlook..." },
      { label: "Tipo",         value: "Permanente" },
      { label: "Plataforma",   value: "PC / Mac" },
      { label: "Entrega",      value: "Remota – WhatsApp" }
    ]
  },

  // ── ANTIVIRUS ─────────────────────────────────────────────
  {
    id: 4, cat: "antivirus", destacado: true, badgeType: "pop",
    icon: "🛡️", name: "McAfee Internet Security 1 año",
    imagen: "img/McAfee Internet Security.png",
    short: "Protección total contra virus y amenazas online.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Protección en tiempo real", "Anti-phishing y firewall incluido", "Licencia por 1 año", "Compatible con Windows y Mac"],
    specs: [
      { label: "Duración",     value: "1 año" },
      { label: "Dispositivos", value: "1 dispositivo" },
      { label: "Plataforma",   value: "Windows / Mac" },
      { label: "Entrega",      value: "Remota – WhatsApp" }
    ]
  },
  {
    id: 5, cat: "antivirus", destacado: false, badgeType: "new",
    icon: "🔐", name: "ESET Internet Security 1 año",
    imagen: "img/ESET Internet Security.png",
    short: "Seguridad avanzada con bajo consumo de recursos.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Detección de amenazas avanzadas", "Baja carga en el sistema", "Control parental incluido", "1 año de protección garantizada"],
    specs: [
      { label: "Duración",     value: "1 año" },
      { label: "Dispositivos", value: "1 dispositivo" },
      { label: "Plataforma",   value: "Windows / Mac / Android" },
      { label: "Entrega",      value: "Remota – WhatsApp" }
    ]
  },

  // ── ADOBE ─────────────────────────────────────────────────
  {
    id: 6, cat: "adobe", destacado: true, badgeType: "hot",
    icon: "🎨", name: "Adobe Photoshop",
    imagen: "img/Adobe Photoshop.png",
    short: "El editor de imágenes profesional más usado del mundo.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Edición profesional de imágenes", "IA generativa integrada", "Compatible con formatos RAW", "Actualizaciones incluidas"],
    specs: [
      { label: "Tipo",       value: "Suscripción anual" },
      { label: "Plataforma", value: "PC / Mac" },
      { label: "Uso",        value: "Diseño y fotografía" },
      { label: "Entrega",    value: "Remota – WhatsApp" }
    ]
  },
  {
    id: 7, cat: "adobe", destacado: false, badgeType: "pop",
    icon: "✏️", name: "CorelDRAW Standard 2021",
    imagen: "img/CorelDRAW Standard 2021.jpg",
    short: "Diseño vectorial profesional para logos y gráficos.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Diseño vectorial ilimitado", "Integración con Photoshop", "Herramientas de tipografía avanzada", "Compatible con SVG, EPS, PDF"],
    specs: [
      { label: "Tipo",       value: "Suscripción anual" },
      { label: "Plataforma", value: "PC / Mac" },
      { label: "Uso",        value: "Diseño gráfico vectorial" },
      { label: "Entrega",    value: "Remota – WhatsApp" }
    ]
  },
  {
    id: 8, cat: "adobe", destacado: false, badgeType: "new",
    icon: "🎬", name: "Wondershare Filmora 15",
    imagen: "img/Wondershare Filmora.png",
    short: "Edición de video profesional para creadores.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Edición de video en 4K y 8K", "Integración con After Effects", "IA para edición automática", "Exportación a múltiples formatos"],
    specs: [
      { label: "Tipo",       value: "Suscripción anual" },
      { label: "Plataforma", value: "PC / Mac" },
      { label: "Uso",        value: "Edición de video" },
      { label: "Entrega",    value: "Remota – WhatsApp" }
    ]
  },

  // ── STREAMING ─────────────────────────────────────────────
  {
    id: 9, cat: "streaming", destacado: true, badgeType: "hot",
    icon: "🍿", name: "Crunchyroll Mega Fan 1 año",
    imagen: "img/Crunchyroll.png",
    short: "Todo el anime sin anuncios por 1 año completo.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Acceso ilimitado a todo el catálogo", "Sin anuncios", "HD y 4K disponible", "Válido por 1 año completo"],
    specs: [
      { label: "Plan",      value: "Mega Fan" },
      { label: "Duración",  value: "1 año" },
      { label: "Contenido", value: "Anime, manga, doramas" },
      { label: "Entrega",   value: "Remota – WhatsApp" }
    ]
  },
  {
    id: 10, cat: "streaming", destacado: true, badgeType: "pop",
    icon: "📦", name: "Perplexity PRO - 1 Year",
    imagen: "img/perplexity pro.png",
    short: "Búsqueda con IA avanzada. Todo incluido.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Búsqueda con IA avanzada", "Respuestas precisas y verificadas", "Sin límites de uso", "1 año de suscripción completa"],
    specs: [
      { label: "Duración",     value: "1 año" },
      { label: "Contenido",    value: "IA, búsqueda avanzada" },
      { label: "Dispositivos", value: "Múltiples dispositivos" },
      { label: "Entrega",      value: "Remota – WhatsApp" }
    ]
  },
  {
    id: 11, cat: "streaming", destacado: false, badgeType: "new",
    icon: "🤖", name: "ChatGPT Plus 1 año",
    imagen: "img/ChatGPT.png",
    short: "Acceso a GPT-4 e IA avanzada por 1 año completo.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Acceso a GPT-4 y GPT-4o", "Sin límites de uso diario", "DALL·E para generación de imágenes", "1 año de acceso premium"],
    specs: [
      { label: "Duración", value: "1 año" },
      { label: "Modelo",   value: "GPT-4 / GPT-4o" },
      { label: "Extras",   value: "DALL·E, plugins, navegación web" },
      { label: "Entrega",  value: "Remota – WhatsApp" }
    ]
  },

  // ── PDF ───────────────────────────────────────────────────
  {
    id: 12, cat: "pdf", destacado: false, badgeType: "pop",
    icon: "📑", name: "Nitro PDF Pro 2021",
    imagen: "img/Nitro PDF 2021 Pro.png",
    short: "Crea, edita y convierte PDFs como un profesional.",
    price: "$1",
    desc: "Aquí descripción del producto.",
    features: ["Edición completa de archivos PDF", "Conversión a Word, Excel, PowerPoint", "Firma digital incluida", "Licencia permanente para 1 PC"],
    specs: [
      { label: "Versión",    value: "Nitro PDF Pro 2021" },
      { label: "Tipo",       value: "Licencia permanente" },
      { label: "Plataforma", value: "Windows" },
      { label: "Entrega",    value: "Remota – WhatsApp" }
    ]
  }
];

// ============================================================
// ESTADO GLOBAL
// ------------------------------------------------------------
// Variables que guardan el estado actual de la app.
// currentCat  → categoría activa en el filtro (default: 'all')
// currentPage → página visible: 'home' o 'product'
// ============================================================
let currentCat  = 'all';
let currentPage = 'home';

// ============================================================
// CARRUSEL DE DESTACADOS (SLIDER AUTOMÁTICO)
// ------------------------------------------------------------
// Muestra los productos destacados en un slider que se
// desplaza automáticamente cada 3.5 segundos.
// El usuario también puede navegar con los puntos (dots)
// o con los botones de flecha (prev/next).
//
// NOTAS PARA MODIFICAR:
//   - VELOCIDAD: cambia INTERVALO_MS para ajustar la velocidad
//   - PAUSA: el carrusel se pausa al pasar el mouse encima
//   - AÑADIR PRODUCTOS AL CARRUSEL: marca destacado: true en la BD
// ============================================================
const INTERVALO_MS = 3500;

let carouselIndex  = 0;
let carouselTimer  = null;
let carouselTotal  = 0;
let carouselPaused = false;

function renderCarrusel() {
  const wrapper = document.getElementById('destacadosGrid');
  if (!wrapper) return;

  const dests = productos.filter(p => p.destacado);

  wrapper.innerHTML = `
    <div class="carousel-wrapper">
      <button class="carousel-btn carousel-prev" onclick="moverCarrusel(-1)" aria-label="Anterior">&#8249;</button>
      <div class="carousel-track-container">
        <div class="carousel-track" id="carouselTrack">
          ${dests.map(p => `
            <div class="dest-card fade-in" onclick="showProduct(${p.id})">
              ${p.imagen
                /* CORRECCIÓN: Se muestra la imagen real del producto envuelta en un
                   contenedor con altura fija + object-fit:contain para que no se recorte.
                   Si no hay imagen, se muestra el emoji como respaldo. */
                ? `<div class="dest-card-img-wrap">
                     <img class="dest-card-img" src="${p.imagen}" alt="${p.name}" loading="lazy">
                   </div>`
                : `<div class="dest-card-img-wrap"><span class="dest-icon">${p.icon}</span></div>`
              }
              <div class="dest-card-body">
                <div class="dest-name">${p.name}</div>
                <div class="dest-price">${p.price}</div>
                <span class="dest-badge badge-${p.badgeType}">${getBadgeText(p.badgeType)}</span>
              </div>
            </div>
          `).join('')}
        </div>
      </div>
      <button class="carousel-btn carousel-next" onclick="moverCarrusel(1)" aria-label="Siguiente">&#8250;</button>
    </div>
    <div class="carousel-dots" id="carouselDots"></div>
  `;

  recalcularCarrusel();
  observeFadeIn();

  const cw = wrapper.querySelector('.carousel-wrapper');
  cw.addEventListener('mouseenter', () => { carouselPaused = true; });
  cw.addEventListener('mouseleave', () => { carouselPaused = false; });

  window.addEventListener('resize', () => {
    recalcularCarrusel();
    irASlide(0);
  });

  iniciarAutoSlide();
}

function recalcularCarrusel() {
  const track = document.getElementById('carouselTrack');
  if (!track) return;

  const dests = productos.filter(p => p.destacado);
  const anchoContenedor = track.parentElement.offsetWidth;

  let itemsPorVista = 5;
  if (anchoContenedor < 500)       itemsPorVista = 1;
  else if (anchoContenedor < 700)  itemsPorVista = 2;
  else if (anchoContenedor < 900)  itemsPorVista = 3;
  else if (anchoContenedor < 1100) itemsPorVista = 4;

  carouselTotal = Math.max(1, Math.ceil(dests.length / itemsPorVista));

  const dotsEl = document.getElementById('carouselDots');
  if (dotsEl) {
    dotsEl.innerHTML = Array.from({ length: carouselTotal }, (_, i) =>
      `<button class="dot ${i === 0 ? 'active' : ''}" onclick="irASlide(${i})" aria-label="Ir a grupo ${i + 1}"></button>`
    ).join('');
  }

  track.dataset.perPage = itemsPorVista;
}

function irASlide(idx) {
  const track  = document.getElementById('carouselTrack');
  const dotsEl = document.getElementById('carouselDots');
  if (!track) return;

  carouselIndex = Math.max(0, Math.min(idx, carouselTotal - 1));

  const perPage = parseInt(track.dataset.perPage) || 5;
  const cards   = track.querySelectorAll('.dest-card');
  const cardW   = cards.length ? cards[0].offsetWidth + 16 : 0;
  const offset  = carouselIndex * perPage * cardW;

  track.style.transform = `translateX(-${offset}px)`;

  if (dotsEl) {
    dotsEl.querySelectorAll('.dot').forEach((d, i) =>
      d.classList.toggle('active', i === carouselIndex)
    );
  }
}

function moverCarrusel(dir) {
  let siguiente = carouselIndex + dir;
  if (siguiente >= carouselTotal) siguiente = 0;
  if (siguiente < 0)              siguiente = carouselTotal - 1;
  irASlide(siguiente);
}

function iniciarAutoSlide() {
  if (carouselTimer) clearInterval(carouselTimer);
  carouselTimer = setInterval(() => {
    if (!carouselPaused) moverCarrusel(1);
  }, INTERVALO_MS);
}

// ============================================================
// RENDERIZAR CATÁLOGO (GRID DE PRODUCTOS)
// ------------------------------------------------------------
// Muestra todos los productos o solo los de la categoría
// seleccionada. También actualiza el título de la sección.
//
// PARA AGREGAR UNA CATEGORÍA NUEVA:
//   - Añade su clave y emoji en catNames
//   - Agrega un botón en el <nav class="cat-nav"> del HTML
//   - Asigna esa categoría a los productos en la BD
// ============================================================
function renderCatalogo(cat = 'all') {
  const grid  = document.getElementById('productosGrid');
  const title = document.getElementById('catalogTitle');

  const catNames = {
    all:       '📦 Catálogo completo',
    windows:   '🪟 Windows',
    office:    '📄 Office',
    antivirus: '🛡️ Antivirus',
    adobe:     '🎨 Adobe',
    streaming: '🎬 Streaming',
    pdf:       '📑 PDF'
  };

  title.textContent = catNames[cat] || '📦 Catálogo completo';

  const lista = cat === 'all' ? productos : productos.filter(p => p.cat === cat);

  grid.innerHTML = lista.map(p => `
    <div class="prod-card fade-in" onclick="showProduct(${p.id})">
      ${p.imagen
        /* CORRECCIÓN: La imagen se envuelve en .prod-card-img-wrap con altura fija.
           object-fit:contain (en el CSS) garantiza que la imagen completa sea visible
           sin importar si es cuadrada, vertical o apaisada. */
        ? `<div class="prod-card-img-wrap">
             <img class="prod-card-img" src="${p.imagen}" alt="${p.name}" loading="lazy">
           </div>`
        : `<div class="prod-card-icon">${p.icon}</div>`
      }
      <div class="prod-card-cat">${p.cat.toUpperCase()}</div>
      <div class="prod-card-name">${p.name}</div>
      <div class="prod-card-short">${p.short}</div>
      <div class="prod-card-price">${p.price}</div>
      <div class="prod-card-btn">🛒 Ver producto</div>
    </div>
  `).join('');

  observeFadeIn();
}

// ============================================================
// TEXTO DE BADGES (ETIQUETAS DE PRODUCTO)
// ------------------------------------------------------------
// hot  = 🔥 Popular  |  new = ✨ Nuevo  |  pop = ⭐ Destacado
// Para agregar un tipo nuevo: añade la clave en el objeto.
// ============================================================
function getBadgeText(type) {
  const map = { hot: '🔥 Popular', new: '✨ Nuevo', pop: '⭐ Destacado' };
  return map[type] || '';
}

// ============================================================
// FILTRAR POR CATEGORÍA
// ------------------------------------------------------------
// Se llama al hacer clic en un botón del menú de categorías.
// Actualiza el botón activo, re-renderiza el catálogo y hace
// scroll centrado hacia la sección de destacados.
// ============================================================
function filterCat(cat, btnEl) {
  currentCat = cat;

  document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
  if (btnEl) {
    btnEl.classList.add('active');
  } else {
    document.querySelectorAll(`.cat-btn[data-cat="${cat}"]`).forEach(b => b.classList.add('active'));
  }

  renderCatalogo(cat);
  showPage('home');

  setTimeout(() => {
    const seccion = document.getElementById('catalogSection');
    const header  = document.getElementById('siteHeader');
    if (!seccion) return;

    const headerH    = header ? header.offsetHeight : 0;
    const seccionTop = seccion.getBoundingClientRect().top + window.scrollY;
    const seccionH   = seccion.offsetHeight;
    const ventanaH   = window.innerHeight;

    // Centrar la sección en la ventana (con compensación del header sticky)
    const centrado = seccionTop - headerH - (ventanaH - headerH - seccionH) / 2;
    window.scrollTo({ top: Math.max(0, centrado), behavior: 'smooth' });
  }, 60);
}

// ============================================================
// MOSTRAR PÁGINA DE DETALLE DE PRODUCTO
// ============================================================
function showProduct(id) {
  const p = productos.find(x => x.id === id);
  if (!p) return;

  document.getElementById('prodBreadCat').textContent  = p.cat.charAt(0).toUpperCase() + p.cat.slice(1);
  document.getElementById('prodBreadName').textContent = p.name;
  document.getElementById('prodCatBadge').textContent  = p.cat.toUpperCase();

  // Mostrar imagen real si existe, si no mostrar el emoji
  const imgEl = document.getElementById('prodImage');
  const placeholderEl = document.getElementById('prodImagePlaceholder');
  if (p.imagen) {
    imgEl.src = p.imagen;
    imgEl.alt = p.name;
    imgEl.style.display = 'block';
    placeholderEl.style.display = 'none';
  } else {
    imgEl.style.display = 'none';
    placeholderEl.style.display = 'flex';
    document.getElementById('prodImageIcon').textContent = p.icon;
  }
  document.getElementById('prodName').textContent      = p.name;
  document.getElementById('prodPrice').textContent     = p.price;
  document.getElementById('prodDesc').textContent      = p.desc;

  const featEl = document.getElementById('prodFeatures');
  featEl.innerHTML = p.features.map(f => `<li>${f}</li>`).join('');

  const specsEl = document.getElementById('prodSpecs');
  specsEl.innerHTML = p.specs.map(s => `
    <div class="spec-item">
      <div class="spec-label">${s.label}</div>
      <div class="spec-value">${s.value}</div>
    </div>
  `).join('');

  // Botón de WhatsApp con mensaje predefinido
  const waMsg = encodeURIComponent(`Hola, quiero comprar: *${p.name}* (${p.price}). ¿Está disponible?`);
  document.getElementById('prodWaBtn').href = `https://wa.me/51994040462?text=${waMsg}`;

  // Productos relacionados: misma categoría, sin el actual, máx. 4
  const related = productos.filter(x => x.cat === p.cat && x.id !== p.id).slice(0, 4);
  const relGrid = document.getElementById('relatedGrid');
  relGrid.innerHTML = related.length
    ? related.map(r => `
        <div class="prod-card fade-in" onclick="showProduct(${r.id})">
          ${r.imagen
            /* CORRECCIÓN: misma lógica de imagen completa que en el catálogo principal */
            ? `<div class="prod-card-img-wrap">
                 <img class="prod-card-img" src="${r.imagen}" alt="${r.name}" loading="lazy">
               </div>`
            : `<div class="prod-card-icon">${r.icon}</div>`
          }
          <div class="prod-card-cat">${r.cat.toUpperCase()}</div>
          <div class="prod-card-name">${r.name}</div>
          <div class="prod-card-short">${r.short}</div>
          <div class="prod-card-price">${r.price}</div>
          <div class="prod-card-btn">🛒 Ver producto</div>
        </div>
      `).join('')
    : '<p style="color:var(--text-muted);font-size:.9rem;">No hay productos relacionados aún.</p>';

  showPage('product');
  window.scrollTo({ top: 0, behavior: 'smooth' });
  observeFadeIn();
}

// ============================================================
// NAVEGACIÓN ENTRE PÁGINAS (home ↔ detalle de producto)
// ============================================================
function showPage(page) {
  const home = document.getElementById('pageHome');
  const prod = document.getElementById('pageProduct');
  if (page === 'home') {
    home.style.display = 'block';
    prod.style.display = 'none';
    currentPage = 'home';
  } else {
    home.style.display = 'none';
    prod.style.display = 'block';
    currentPage = 'product';
  }
}

// ============================================================
// SCROLL AL CATÁLOGO (botón "Ver catálogo ↓" del hero)
// ============================================================
function scrollToCatalog() {
  const el     = document.getElementById('catalogSection');
  const header = document.getElementById('siteHeader');
  if (!el) return;
  const headerH = header ? header.offsetHeight : 0;
  const top     = el.getBoundingClientRect().top + window.scrollY - headerH - 16;
  window.scrollTo({ top, behavior: 'smooth' });
}

// ============================================================
// MODO OSCURO / CLARO
// ------------------------------------------------------------
// Detecta la preferencia del sistema al cargar.
// El botón ☀️/🌙 permite cambiar manualmente.
// La clase 'theme-transitioning' activa una transición CSS
// más lenta para que el cambio sea fluido y no brusco.
// ============================================================
(function initTheme() {
  const btn  = document.getElementById('themeToggle');
  const html = document.documentElement;
  let dark   = matchMedia('(prefers-color-scheme: dark)').matches;

  const aplicarTema = (isDark) => {
    html.classList.add('theme-transitioning');
    html.setAttribute('data-theme', isDark ? 'dark' : 'light');
    btn.textContent = isDark ? '☀️' : '🌙';
    setTimeout(() => html.classList.remove('theme-transitioning'), 700);
  };

  aplicarTema(dark);

  btn.addEventListener('click', () => {
    dark = !dark;
    aplicarTema(dark);
  });
})();

// ============================================================
// MENÚ MÓVIL (HAMBURGUESA)
// ============================================================
function toggleMobileMenu() {
  document.getElementById('mobileMenu').classList.toggle('open');
}

// ============================================================
// ANIMACIÓN FADE-IN AL HACER SCROLL
// ------------------------------------------------------------
// IntersectionObserver: activa clase 'visible' cuando el
// elemento entra en el viewport. Los elementos necesitan
// tener la clase 'fade-in' para que funcione.
// ============================================================
function observeFadeIn() {
  const els = document.querySelectorAll('.fade-in:not(.visible)');
  const obs = new IntersectionObserver((entries) => {
    entries.forEach((e, i) => {
      if (e.isIntersecting) {
        setTimeout(() => e.target.classList.add('visible'), i * 60);
        obs.unobserve(e.target);
      }
    });
  }, { threshold: 0.08 });
  els.forEach(el => obs.observe(el));
}

// ============================================================
// INICIALIZACIÓN → se ejecuta cuando el DOM está listo
// ============================================================
document.addEventListener('DOMContentLoaded', () => {
  renderCarrusel();      // Slider de destacados con auto-scroll
  renderCatalogo('all'); // Grid de todos los productos
  observeFadeIn();       // Animaciones de entrada al hacer scroll
});

// ============================================================
// 📝 NOTAS PARA EL DESARROLLADOR
// ------------------------------------------------------------
// • NÚMERO WHATSAPP : busca "51999999999" y reemplázalo por el real
// • NUEVA CATEGORÍA : añade en catNames + botón en el HTML
// • VELOCIDAD SLIDER: modifica INTERVALO_MS (arriba, ~línea 90)
// • AGREGAR PRODUCTO: copia un bloque en la BD y ajusta los campos
// • IMÁGENES        : descomenta el tag <img> en showProduct() del HTML
//                     y añade campo "imagen" a cada producto
// • SISTEMA DE PAGO : descomenta el bloque #paymentSection en el HTML
// • ANALYTICS       : agrega eventos en filterCat() y showProduct()
// ============================================================