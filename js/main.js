// ========================
// Menú móvil (hamburguesa)
// ========================
const nav = document.querySelector("#nav");
const abrir = document.querySelector("#abrir");
const cerrar = document.querySelector("#cerrar");

abrir.addEventListener("click", () => {
    nav.classList.add("visible");
});

cerrar.addEventListener("click", () => {
    nav.classList.remove("visible");
});

// Cerrar menú al hacer clic en un enlace
document.querySelectorAll(".nav-list a").forEach(link => {
    link.addEventListener("click", () => {
        nav.classList.remove("visible");
    });
});

// ========================
// Botón Scroll hacia arriba
// ========================
const btnArriba = document.getElementById('btnArriba');

window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        btnArriba.style.display = 'block';
    } else {
        btnArriba.style.display = 'none';
    }
});

btnArriba.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ========================
// (Opcional) Resaltar sección actual en el menú
// ========================
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-list a");

window.addEventListener("scroll", () => {
    let current = "";

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;

        if (pageYOffset >= sectionTop - sectionHeight / 2) {
            current = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href") === `#${current}`) {
            link.classList.add("active");
        }
    });
});