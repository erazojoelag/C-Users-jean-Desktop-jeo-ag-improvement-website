
const i18n = {
  es: {
    title: "AG Commercial Improvement",
    subtitle: "Expertos en reparaciones, pintura y mantenimiento del hogar",
    services: "Nuestros Servicios",
    gallery: "Trabajos Recientes",
    galleryHint: "Agrega más fotos en /public/images",
    contact: "Contáctanos",
    cta: "Solicitar Cotización"
  },
  en: {
    title: "AG Commercial Improvement",
    subtitle: "Experts in home repair, painting and maintenance",
    services: "Our Services",
    gallery: "Recent Work",
    galleryHint: "Add more photos in /public/images",
    contact: "Contact Us",
    cta: "Request a Quote"
  }
};

let lang = localStorage.getItem('lang') || 'es';

function applyLang(){
  document.documentElement.lang = lang;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    const key = el.getAttribute('data-i18n');
    if(i18n[lang][key]) el.textContent = i18n[lang][key];
  });
  const btn = document.getElementById('langToggle');
  if(btn) btn.textContent = (lang === 'es') ? 'EN' : 'ES';
}

document.getElementById('langToggle')?.addEventListener('click', ()=>{
  lang = (lang === 'es') ? 'en' : 'es';
  localStorage.setItem('lang', lang);
  applyLang();
});

// Dynamic gallery loader (tries 1..20.jpg)
function loadGallery(){
  const grid = document.getElementById('galleryGrid');
  if(!grid) return;
  for(let i=1;i<=20;i++){
    const img = new Image();
    img.src = `/public/images/${i}.jpg`;
    img.alt = `work-${i}`;
    img.onload = ()=> grid.appendChild(img);
    img.onerror = ()=>{}; // skip if not exists
  }
}

applyLang();
loadGallery();
