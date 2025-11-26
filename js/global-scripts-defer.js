    /*==========================================
      Importación de Ionic (libreria de componentes).
==========================================*/

// Cargar Ionicons (versión para navegadores modernos)
const scriptModule = document.createElement('script');
scriptModule.type = 'module';
scriptModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';

// Insertarlos en <head>
document.head.appendChild(scriptModule);

// Posible solución de compatibilidad para navegadores antiguos sin soporte a modules:
// const scriptNoModule = document.createElement('script');
// scriptNoModule.nomodule = true;
// scriptNoModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';


// document.head.appendChild(scriptNoModule);


    /*==========================================
      Comportamineto del desplegable, para diseño responsive.
==========================================*/

const toggle = document.getElementById("menu-toggle");
const navList = document.getElementById("nav-list");

toggle.addEventListener("click", () => {
    navList.classList.toggle("active");

    if (navList.classList.contains("active")) {
        toggle.setAttribute("name", "chevron-up-outline");
    } else {
        toggle.setAttribute("name", "chevron-down-outline");
    }
});

