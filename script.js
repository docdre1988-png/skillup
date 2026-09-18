// ============================================================
//  script.js — SkillUP (Catálogo, Sílabos Completos, Calendario & Admin Dashboard)
// ============================================================

/* ── Estado global ──────────────────────────────────────────── */
let carrito = [];          // [{ ...curso }]
let categoriaActiva = 'todos';
let productosMemoria = []; // Catálogo dinámico
let isAdminAuthed = false;

/* ── Init ───────────────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', () => {
  cargarProductos();

  initNav();
  initFilters();
  initCart();
  initSilaboModal();
  initMobileMenu();
  initAdminPanel();

  renderCatalogo('todos');
  renderScheduleTable();
  lucide.createIcons();
});

/* ── Carga y Persistencia de Cursos (LocalStorage / Config) ───── */
function cargarProductos() {
  const guardados = localStorage.getItem('skillup_catalogo_v1');
  if (guardados) {
    try {
      productosMemoria = JSON.parse(guardados);
      return;
    } catch (e) {
      console.error('Error al cargar datos guardados:', e);
    }
  }
  // Fallback inicial a PRODUCTOS de config.js
  productosMemoria = JSON.parse(JSON.stringify(typeof PRODUCTOS !== 'undefined' ? PRODUCTOS : []));
}

function guardarProductosEnStorage() {
  localStorage.setItem('skillup_catalogo_v1', JSON.stringify(productosMemoria));
  renderCatalogo(categoriaActiva);
  renderScheduleTable();
  renderAdminProductsList();
}

/* ── Nav: scroll effect ─────────────────────────────────────── */
function initNav() {
  const nav = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 30) {
      nav.classList.add('nav-scrolled');
    } else {
      nav.classList.remove('nav-scrolled');
    }
  }, { passive: true });
}

/* ── Mobile menu ────────────────────────────────────────────── */
function initMobileMenu() {
  const btn  = document.getElementById('mobile-menu-btn');
  const menu = document.getElementById('mobile-menu');
  if (btn && menu) {
    btn.addEventListener('click', () => menu.classList.toggle('hidden'));
  }
}
function closeMobileMenu() {
  const menu = document.getElementById('mobile-menu');
  if (menu) menu.classList.add('hidden');
}

/* ============================================================
   CATÁLOGO DE CURSOS
   ============================================================ */
function renderCatalogo(categoria) {
  const grid       = document.getElementById('products-grid');
  const emptyState = document.getElementById('empty-state');
  if (!grid) return;

  const filtrados = productosMemoria.filter(p => {
    if (p.disponible !== 'SI') return false;
    if (categoria === 'todos')  return true;
    return p.categoria === categoria;
  });

  if (filtrados.length === 0) {
    grid.innerHTML = '';
    if (emptyState) emptyState.classList.remove('hidden');
    lucide.createIcons();
    return;
  }

  if (emptyState) emptyState.classList.add('hidden');

  grid.innerHTML = filtrados.map(curso => {
    let estadoBadgeClass = 'bg-[#2563EB]/20 text-blue-300 border-[#2563EB]/40';
    if (curso.estadoCurso === 'Grupo Confirmado') estadoBadgeClass = 'bg-emerald-500/20 text-[#4ADE80] border-emerald-500/40';
    if (curso.estadoCurso === 'Próxima Edición') estadoBadgeClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40';

    return `
    <div class="product-card bg-[#101014] border border-white/10 rounded-2xl overflow-hidden flex flex-col justify-between hover:border-[#2563EB]/50 transition duration-300 group shadow-lg">
      
      <div>
        <!-- Imagen y Badge -->
        <div class="relative h-48 overflow-hidden bg-[#18181F]">
          <img src="${curso.imagen}" alt="${curso.nombre}" class="w-full h-full object-cover group-hover:scale-105 transition duration-500">
          <div class="absolute inset-0 bg-gradient-to-t from-[#101014] via-transparent to-transparent"></div>
          
          <span class="absolute top-3 left-3 bg-black/80 backdrop-blur text-blue-300 text-[10px] font-bold px-2.5 py-1 rounded-full border border-blue-400/30">
            ${curso.categoria}
          </span>

          <span class="absolute top-3 right-3 text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${estadoBadgeClass}">
            ${curso.estadoCurso || 'Inscripciones Abiertas'}
          </span>
        </div>

        <!-- Cuerpo Tarjeta -->
        <div class="p-5 space-y-3">
          <div class="flex items-center justify-between text-[11px] text-zinc-400">
            <span class="flex items-center gap-1 font-medium"><i data-lucide="user" class="w-3.5 h-3.5 text-[#3B82F6]"></i> ${curso.docente}</span>
            <span class="flex items-center gap-1 font-medium"><i data-lucide="calendar" class="w-3.5 h-3.5 text-[#4ADE80]"></i> Inicio: ${curso.fechaInicio || 'Por definir'}</span>
          </div>

          <h3 class="font-heading text-lg font-bold text-white group-hover:text-[#4ADE80] transition">${curso.nombre}</h3>
          
          <p class="text-xs text-zinc-400 line-clamp-2 leading-relaxed">${curso.descripcion}</p>

          <div class="pt-2 border-t border-white/10 flex items-center justify-between">
            <div>
              <span class="text-[10px] text-zinc-400 block font-bold">PRECIO APERTURA</span>
              <span class="text-lg font-black text-white">S/ ${curso.precio}</span>
              <span class="text-xs text-zinc-500 line-through ml-1">S/ ${curso.precioRegular || 100}</span>
            </div>
            <div class="text-right text-[10px]">
              <span class="text-[#4ADE80] font-bold block">${curso.diasClase || 'Interdiario'}</span>
              <span class="text-zinc-400">${curso.horarioClase || '12 horas en vivo'}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Acciones Tarjeta -->
      <div class="p-5 pt-0 grid grid-cols-2 gap-2">
        <button onclick="verSilabo(${curso.id})" class="w-full bg-white/10 hover:bg-white/20 text-white font-bold py-2 rounded-xl transition text-xs flex items-center justify-center gap-1 border border-white/10">
          <i data-lucide="book-open" class="w-3.5 h-3.5"></i>
          <span>Ver Sílabo</span>
        </button>
        <button onclick="agregarAlCarrito(${curso.id})" class="w-full bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold py-2 rounded-xl transition text-xs flex items-center justify-center gap-1 shadow">
          <i data-lucide="plus-circle" class="w-3.5 h-3.5"></i>
          <span>Inscribirme</span>
        </button>
      </div>

    </div>
  `;
  }).join('');

  lucide.createIcons();
}

/* ── Filtros ────────────────────────────────────────────────── */
function initFilters() {
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.cat-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      categoriaActiva = btn.getAttribute('data-category');
      renderCatalogo(categoriaActiva);
    });
  });
}

/* ============================================================
   PUNTO 10 & 11 - TABLA DE PROGRAMACIÓN DE FECHAS (PÚBLICA)
   ============================================================ */
function renderScheduleTable() {
  const container = document.getElementById('schedule-table-body');
  if (!container) return;

  const visibles = productosMemoria.filter(p => p.disponible === 'SI');

  container.innerHTML = visibles.map((c, idx) => {
    let estadoClass = 'bg-[#2563EB]/20 text-blue-300 border-[#2563EB]/40';
    if (c.estadoCurso === 'Grupo Confirmado') estadoClass = 'bg-emerald-500/20 text-[#4ADE80] border-emerald-500/40';
    if (c.estadoCurso === 'Próxima Edición') estadoClass = 'bg-amber-500/20 text-amber-300 border-amber-500/40';

    return `
      <tr class="hover:bg-white/5 transition">
        <td class="p-4 font-bold text-zinc-500 text-center">${idx + 1}</td>
        <td class="p-4 font-bold text-white">${c.nombre}</td>
        <td class="p-4 text-zinc-300">${c.docente || 'Docente Asignado'}</td>
        <td class="p-4 font-bold text-[#4ADE80]">${c.fechaInicio || 'Por definir'}</td>
        <td class="p-4 text-zinc-300">${c.fechaFin || 'Por definir'}</td>
        <td class="p-4 text-zinc-300">${c.diasClase || '6 sesiones'}</td>
        <td class="p-4 text-zinc-300">${c.horarioClase || 'Horario a confirmar'}</td>
        <td class="p-4 text-center">
          <span class="inline-block text-[10px] font-extrabold px-2.5 py-1 rounded-full border ${estadoClass}">
            ${c.estadoCurso || 'Inscripciones Abiertas'}
          </span>
        </td>
      </tr>
    `;
  }).join('');

  lucide.createIcons();
}

/* ============================================================
   MODAL DE SÍLABO DETALLADO COMPLETO (PDF PÁGS. 11-30)
   ============================================================ */
let cursoSeleccionadoSilabo = null;

function initSilaboModal() {
  const closeBtn  = document.getElementById('close-silabo-btn');
  const closeBtn2 = document.getElementById('close-silabo-btn-2');
  const backdrop  = document.getElementById('silabo-modal-backdrop');
  const enrollBtn = document.getElementById('silabo-enroll-btn');

  if (closeBtn)  closeBtn.addEventListener('click', cerrarModalSilabo);
  if (closeBtn2) closeBtn2.addEventListener('click', cerrarModalSilabo);

  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) cerrarModalSilabo();
    });
  }

  if (enrollBtn) {
    enrollBtn.addEventListener('click', () => {
      if (cursoSeleccionadoSilabo) {
        agregarAlCarrito(cursoSeleccionadoSilabo.id);
        cerrarModalSilabo();
        abrirCarritoModal();
      }
    });
  }
}

window.verSilabo = function(id) {
  const curso = productosMemoria.find(c => c.id === id);
  if (!curso) return;
  cursoSeleccionadoSilabo = curso;

  document.getElementById('silabo-category-badge').textContent = curso.categoria;
  document.getElementById('silabo-title').textContent          = curso.nombre;
  document.getElementById('silabo-docente').textContent        = curso.docente || 'Docente Asignado';
  document.getElementById('silabo-duracion').textContent       = curso.duracion || '12 horas (6 ses)';
  document.getElementById('silabo-fechas-info').textContent    = curso.fechaInicio ? `Inicio: ${curso.fechaInicio}` : 'Próximo inicio';
  document.getElementById('silabo-horario-info').textContent   = curso.horarioClase || 'Virtual en vivo';
  
  document.getElementById('silabo-objetivo').textContent       = curso.objetivo || curso.descripcion;
  document.getElementById('silabo-publico').textContent        = curso.publico || 'Estudiantes universitarios y técnicos.';
  document.getElementById('silabo-requisitos').textContent     = curso.requisitos || 'No se requieren conocimientos previos.';
  document.getElementById('silabo-evaluacion').textContent     = curso.evaluacion || 'Seguimiento mediante ejercicios prácticos más proyecto final.';
  document.getElementById('silabo-producto-final').textContent = curso.productoFinal || 'Mini proyecto integrador final.';

  // Resultados de aprendizaje
  const resContainer = document.getElementById('silabo-resultados-list');
  if (resContainer && curso.resultados && Array.isArray(curso.resultados)) {
    resContainer.innerHTML = curso.resultados.map(r => `
      <li class="flex items-start gap-2 text-xs">
        <i data-lucide="check-circle-2" class="w-3.5 h-3.5 text-[#4ADE80] flex-shrink-0 mt-0.5"></i>
        <span>${r}</span>
      </li>
    `).join('');
  } else if (resContainer) {
    resContainer.innerHTML = '<li class="text-xs text-zinc-400">Resultados de aprendizaje disponibles en temario oficial.</li>';
  }

  // Cargar tabla de las 6 Sesiones
  const container = document.getElementById('silabo-sessions-container');
  if (container && curso.silabo && Array.isArray(curso.silabo)) {
    container.innerHTML = curso.silabo.map(s => `
      <tr class="hover:bg-white/5 transition">
        <td class="p-3 text-center font-bold text-[#4ADE80]">${s.sesion}</td>
        <td class="p-3 font-bold text-white">${s.tema}</td>
        <td class="p-3 text-zinc-300 leading-relaxed">${s.contenido || s.detalle}</td>
        <td class="p-3 text-zinc-300 font-medium text-[11px] bg-white/5">${s.practica || s.aplicacion || 'Ejercicios guiados'}</td>
      </tr>
    `).join('');
  } else if (container) {
    container.innerHTML = '<tr><td colspan="4" class="p-4 text-xs text-zinc-400 text-center">Sílabo detallado disponible al solicitar temario por WhatsApp.</td></tr>';
  }

  const backdrop = document.getElementById('silabo-modal-backdrop');
  if (backdrop) backdrop.classList.remove('hidden');
  lucide.createIcons();
};

function cerrarModalSilabo() {
  const backdrop = document.getElementById('silabo-modal-backdrop');
  if (backdrop) backdrop.classList.add('hidden');
}

/* ============================================================
   CARRITO / SELECCIÓN DE CURSOS
   ============================================================ */
function initCart() {
  const openBtn = document.getElementById('open-cart-btn');
  const closeBtn = document.getElementById('close-cart-btn');
  const backdrop = document.getElementById('cart-backdrop');
  const sendWsBtn = document.getElementById('send-whatsapp-order-btn');
  const modoSelect = document.getElementById('pago-modalidad-select');

  if (openBtn)  openBtn.addEventListener('click', abrirCarritoModal);
  if (closeBtn) closeBtn.addEventListener('click', cerrarCarritoModal);
  if (backdrop) {
    backdrop.addEventListener('click', (e) => {
      if (e.target === backdrop) cerrarCarritoModal();
    });
  }

  if (modoSelect) {
    modoSelect.addEventListener('change', renderCartUI);
  }

  if (sendWsBtn) {
    sendWsBtn.addEventListener('click', enviarPreinscripcionWhatsApp);
  }
}

window.agregarAlCarrito = function(id) {
  const curso = productosMemoria.find(c => c.id === id);
  if (!curso) return;

  if (carrito.some(item => item.id === id)) {
    showToast(`ℹ️ "${curso.nombre}" ya está en tu lista`);
    return;
  }

  carrito.push(curso);
  updateCartBadge();
  showToast(`✅ "${curso.nombre}" agregado a la preinscripción`);
};

window.removerDelCarrito = function(id) {
  carrito = carrito.filter(item => item.id !== id);
  updateCartBadge();
  renderCartUI();
};

function updateCartBadge() {
  const badge = document.getElementById('cart-badge');
  if (badge) badge.textContent = carrito.length;
}

function abrirCarritoModal() {
  renderCartUI();
  const backdrop = document.getElementById('cart-backdrop');
  if (backdrop) backdrop.classList.remove('hidden');
}

function cerrarCarritoModal() {
  const backdrop = document.getElementById('cart-backdrop');
  if (backdrop) backdrop.classList.add('hidden');
}

function renderCartUI() {
  const container = document.getElementById('cart-items-container');
  const totalEl   = document.getElementById('cart-total-price');
  const modoSelect = document.getElementById('pago-modalidad-select');

  if (!container) return;

  if (carrito.length === 0) {
    container.innerHTML = `
      <div class="text-center py-8 space-y-2 text-zinc-400">
        <i data-lucide="book-open" class="w-8 h-8 mx-auto text-zinc-500"></i>
        <p>No has seleccionado ningún curso aún.</p>
        <a href="#catalogo" onclick="cerrarCarritoModal()" class="text-xs text-[#4ADE80] font-bold underline">Explorar catálogo</a>
      </div>
    `;
    if (totalEl) totalEl.textContent = 'S/ 0';
    lucide.createIcons();
    return;
  }

  container.innerHTML = carrito.map(curso => `
    <div class="flex items-center justify-between bg-white/5 border border-white/10 p-3 rounded-xl gap-3">
      <div>
        <strong class="text-white text-xs font-bold block">${curso.nombre}</strong>
        <span class="text-[10px] text-zinc-400">${curso.categoria} · Inicio: ${curso.fechaInicio || 'Por definir'}</span>
      </div>
      <div class="flex items-center gap-3">
        <strong class="text-[#4ADE80] font-bold">S/ ${curso.precio}</strong>
        <button onclick="removerDelCarrito(${curso.id})" class="text-zinc-500 hover:text-red-400 p-1">
          <i data-lucide="trash-2" class="w-4 h-4"></i>
        </button>
      </div>
    </div>
  `).join('');

  // Cálculo de total según opción elegida
  const modo = modoSelect ? modoSelect.value : '50%+50%';
  let total = 0;

  if (modo === 'Promoción 2 Cursos' && carrito.length >= 2) {
    total = carrito.length * 60; // S/ 60 c/u
  } else if (modo === 'Ven con un amigo') {
    total = carrito.reduce((acc, item) => acc + (item.precio - 10), 0);
  } else {
    total = carrito.reduce((acc, item) => acc + item.precio, 0);
  }

  if (totalEl) totalEl.textContent = `S/ ${total}`;
  lucide.createIcons();
}

function enviarPreinscripcionWhatsApp() {
  if (carrito.length === 0) {
    showToast('⚠️ Agrega al menos un curso a tu lista.');
    return;
  }

  const modoSelect = document.getElementById('pago-modalidad-select');
  const modo = modoSelect ? modoSelect.value : '50%+50%';
  const totalEl = document.getElementById('cart-total-price');
  const totalText = totalEl ? totalEl.textContent : '';

  const wsNumber = (typeof CONFIG !== 'undefined' && CONFIG.whatsapp) ? CONFIG.whatsapp : '51999999999';

  let mensaje = `¡Hola *SkillUP*! 👋 Deseo preinscribirme a los siguientes cursos:\n\n`;
  carrito.forEach((c, idx) => {
    mensaje += `${idx + 1}. *${c.nombre}* (Inicio: ${c.fechaInicio || 'Por definir'}) - Horario: ${c.horarioClase || 'En vivo'}\n`;
  });

  mensaje += `\n📌 *Modalidad de pago*: ${modo}`;
  mensaje += `\n💰 *Inversión estimada*: ${totalText}`;
  mensaje += `\n\nPor favor envíenme la información de cuentas y la confirmación del grupo. ¡Muchas gracias!`;

  const url = `https://wa.me/${wsNumber}?text=${encodeURIComponent(mensaje)}`;
  window.open(url, '_blank');
}

/* ============================================================
   PANEL ADMINISTRATIVO DIRECTO & PLANIFICADOR DE FECHAS (PUNTO 10)
   ============================================================ */
function initAdminPanel() {
  const openBtn  = document.getElementById('open-admin-btn');
  const closeBtn = document.getElementById('admin-close-btn');
  const backdrop = document.getElementById('admin-backdrop');

  if (openBtn)  openBtn.addEventListener('click', () => backdrop.classList.remove('hidden'));
  if (closeBtn) closeBtn.addEventListener('click', () => backdrop.classList.add('hidden'));

  // Login
  document.getElementById('admin-login-submit')?.addEventListener('click', checkAdminPass);

  // Form
  document.getElementById('admin-form-cancel')?.addEventListener('click', () => {
    document.getElementById('admin-form-backdrop').classList.add('hidden');
  });
  document.getElementById('admin-form-save')?.addEventListener('click', adminGuardarProducto);
  document.getElementById('admin-download-config-btn')?.addEventListener('click', descargarArchivoConfig);
}

function checkAdminPass() {
  const pass = document.getElementById('admin-pass-input').value;
  if (pass === 'admin' || pass === 'skillup2026' || pass === '1234') {
    isAdminAuthed = true;
    document.getElementById('admin-login-screen').classList.add('hidden');
    document.getElementById('admin-dashboard').classList.remove('hidden');
    renderAdminProductsList();
    showToast('🔓 Sesión de administración iniciada');
  } else {
    showToast('❌ Clave incorrecta');
  }
}

function renderAdminProductsList() {
  const container = document.getElementById('admin-products-list');
  if (!container) return;

  container.innerHTML = productosMemoria.map((p, idx) => `
    <div class="flex flex-col sm:flex-row items-start sm:items-center justify-between bg-white/5 border border-white/10 p-3.5 rounded-xl gap-3 text-xs hover:border-white/20 transition">
      <div class="flex items-center gap-3">
        <span class="w-6 h-6 rounded-lg bg-[#2563EB]/20 text-[#3B82F6] font-bold flex items-center justify-center text-xs">${idx + 1}</span>
        <div>
          <strong class="text-white font-bold block">${p.nombre}</strong>
          <span class="text-zinc-400 text-[11px]">${p.categoria} · Docente: ${p.docente}</span>
        </div>
      </div>

      <div class="flex flex-wrap items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
        <div class="text-[11px] text-zinc-300">
          <span class="text-[#4ADE80] font-bold block">Inicio: ${p.fechaInicio || 'Por definir'} (${p.fechaFin || 'Fin'})</span>
          <span class="text-zinc-400">${p.diasClase || 'Interdiario'} · ${p.horarioClase || 'En vivo'}</span>
        </div>

        <button onclick="adminEditarProducto(${p.id})" class="bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold px-3 py-1.5 rounded-lg text-xs flex items-center gap-1 shadow">
          <i data-lucide="calendar" class="w-3.5 h-3.5"></i> Planificar Fechas
        </button>
      </div>
    </div>
  `).join('');

  lucide.createIcons();
}

window.adminEditarProducto = function(id) {
  const prod = productosMemoria.find(p => p.id === id);
  if (!prod) return;

  document.getElementById('admin-form-title').textContent = `Planificar Fechas: ${prod.nombre}`;
  document.getElementById('prod-id').value           = prod.id;
  document.getElementById('prod-name').value         = prod.nombre;
  document.getElementById('prod-fecha-inicio').value = prod.fechaInicio || '18/09/2026';
  document.getElementById('prod-fecha-fin').value    = prod.fechaFin || '27/09/2026';
  document.getElementById('prod-dias').value         = prod.diasClase || 'Viernes, sábado y domingo';
  document.getElementById('prod-horario').value      = prod.horarioClase || '4:00 p. m. – 6:00 p. m.';
  document.getElementById('prod-estado').value       = prod.estadoCurso || 'Inscripciones Abiertas';
  document.getElementById('prod-price').value        = prod.precio || 80;
  document.getElementById('prod-available').checked  = (prod.disponible === 'SI');
  document.getElementById('prod-featured').checked   = (prod.destacado === 'SI');

  document.getElementById('admin-form-backdrop').classList.remove('hidden');
};

function adminGuardarProducto() {
  const id          = parseInt(document.getElementById('prod-id').value);
  const fechaInicio = document.getElementById('prod-fecha-inicio').value.trim();
  const fechaFin    = document.getElementById('prod-fecha-fin').value.trim();
  const diasClase   = document.getElementById('prod-dias').value.trim();
  const horarioClase= document.getElementById('prod-horario').value.trim();
  const estadoCurso = document.getElementById('prod-estado').value;
  const precio      = parseFloat(document.getElementById('prod-price').value) || 80;
  const disp        = document.getElementById('prod-available').checked ? 'SI' : 'NO';
  const dest        = document.getElementById('prod-featured').checked ? 'SI' : 'NO';

  const existingIdx = productosMemoria.findIndex(p => p.id === id);
  if (existingIdx >= 0) {
    productosMemoria[existingIdx] = {
      ...productosMemoria[existingIdx],
      fechaInicio, fechaFin, diasClase, horarioClase, estadoCurso, precio, disponible: disp, destacado: dest
    };
  }

  guardarProductosEnStorage();
  document.getElementById('admin-form-backdrop').classList.add('hidden');
  showToast('💾 Programación de fechas guardada con éxito');
}

function descargarArchivoConfig() {
  const contenido = `// ============================================================
//  config.js — Configuración de datos de SkillUP
//  Generado desde el Dashboard Administrador
// ============================================================

const CONFIG = {
  negocio:              "${CONFIG.negocio || 'SkillUP'}",
  slogan:               "${CONFIG.slogan || 'Aprende hoy, crea mañana'}",
  nombreComercial:      "${CONFIG.nombreComercial || 'SkillUP'}",
  razonSocial:          "${CONFIG.razonSocial || 'SkillUP Educación Virtual S.A.C.'}",
  ruc:                  "${CONFIG.ruc || '20789456123'}",
  direccion:            "${CONFIG.direccion || 'Lima, Perú'}",
  correo:               "${CONFIG.correo || 'contacto@skillup.pe'}",
  whatsapp:             "${CONFIG.whatsapp || '51999999999'}",
  horarios:             "${CONFIG.horarios || 'Atención en vivo: Lun - Sáb · 9am - 8pm'}",
  instagram:            "${CONFIG.instagram || '@skillup.pe'}",
  tiktok:               "${CONFIG.tiktok || '@skillup.pe'}",
  moneda:               "${CONFIG.moneda || 'S/'}",
  precioRegular:        100,
  precioApertura:       80,
  periodoAcademico:     "Septiembre a diciembre de 2026",
  fechaActualizacion:   "Septiembre 2026",
  libroReclamacionesUrl:"libro-de-reclamaciones.html"
};

const PRODUCTOS = ${JSON.stringify(productosMemoria, null, 2)};
`;

  const blob = new Blob([contenido], { type: 'text/javascript;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'config.js';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);

  showToast('💾 Archivo config.js descargado con éxito');
}

/* ============================================================
   TOAST DE NOTIFICACIÓN
   ============================================================ */
function showToast(msg) {
  const toast = document.getElementById('toast');
  if (!toast) return;
  toast.textContent = msg;
  toast.classList.add('toast-show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('toast-show'), 2800);
}
