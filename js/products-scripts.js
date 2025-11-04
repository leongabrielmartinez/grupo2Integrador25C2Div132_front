let productos = [
    { 
      id: 1, 
      nombre: "Resident Evil 4 (2023)", 
      precio: 50, 
      estudio: "Capcom", 
      descripcion: "Resident Evil 4 (2023) es una reimaginación del clásico juego de terror y acción que revolucionó el género. En esta versión moderna, se mantiene la esencia del original pero con mejoras visuales impresionantes, una jugabilidad más fluida y un enfoque cinematográfico en cada enfrentamiento. Controlas a Leon S. Kennedy en una misión peligrosa para rescatar a la hija del presidente en un remoto pueblo europeo lleno de enemigos infectados. El juego combina exploración, combate táctico y una atmósfera constante de tensión. Además, incluye nuevas mecánicas, un diseño de sonido inmersivo y escenarios rediseñados que hacen que la experiencia sea tan nostálgica como desafiante para los nuevos jugadores.", 
      ruta_img: "../utils-delete-after/res-org/resident-evil 4-2023.png",
      tipo:'juego' 
    },
    { 
      id: 2, 
      nombre: "Street Fighter 5", 
      precio: 100, 
      estudio: "Capcom", 
      descripcion: "Street Fighter 5 continúa la legendaria saga de peleas con un enfoque renovado en la estrategia, la técnica y la competencia online. Con un estilo visual vibrante y animaciones fluidas, cada personaje ofrece un conjunto único de movimientos y habilidades que requieren precisión y práctica. El juego se centra en la lucha uno contra uno, pero también presenta modos de entrenamiento, historia y eventos en línea. Con actualizaciones constantes y una comunidad activa, Street Fighter 5 se ha consolidado como uno de los pilares de los esports de lucha, ofreciendo tanto profundidad técnica para veteranos como accesibilidad para nuevos jugadores que buscan aprender y mejorar en el arte del combate.", 
      ruta_img: "../utils-delete-after/res-org/street-fighter-5.png",
      tipo:'juego' 
    },
    { 
      id: 3, 
      nombre: "Hollow Knight", 
      precio: 200, 
      estudio: "Team Cherry",  
      descripcion: "Hollow Knight es una aventura de acción en 2D que combina exploración profunda, combate desafiante y una atmósfera melancólica en el misterioso reino de Hallownest. Controlas a un pequeño caballero en busca de respuestas sobre una civilización perdida, mientras enfrentas criaturas extrañas y descubres secretos ocultos bajo tierra. Su estilo artístico hecho a mano y su banda sonora evocadora crean una experiencia inmersiva que premia la curiosidad y la paciencia. Cada zona del juego ofrece nuevos enemigos, habilidades y rutas interconectadas, recordando a los clásicos Metroidvania, pero con una identidad única que ha convertido a Hollow Knight en un referente del género indie moderno.", 
      ruta_img: "../utils-delete-after/res-org/hollow-knight.jpg",
      tipo:'juego'  
    },
    { 
      id: 4, 
      nombre: "PlayStation 5", 
      descripcion: "La PlayStation 5 representa la nueva generación de consolas de Sony, ofreciendo una experiencia de juego fluida, inmersiva y visualmente impactante. Su potente hardware, junto con un disco SSD ultrarrápido, reduce los tiempos de carga y permite mundos abiertos mucho más dinámicos. El mando DualSense destaca por su respuesta háptica y gatillos adaptativos, brindando una sensación más realista en cada interacción del juego. Además, la interfaz rediseñada permite un acceso rápido a contenidos y funciones sociales. Con títulos exclusivos y compatibilidad con gran parte del catálogo de PS4, la PS5 se posiciona como una consola versátil, ideal tanto para jugadores casuales como para los más exigentes.", 
      precio: 150, 
      ruta_img: "../utils-delete-after/res-org/play-station-5.jpeg",
      tipo:'consola'  
    },
    { 
      id: 5, 
      nombre: "Microsoft Xbox 360", 
      descripcion: "La Xbox 360 marcó una época en la historia de los videojuegos, destacando por su potente catálogo de títulos y su impulso al juego en línea a través de Xbox Live. Fue la consola que consolidó sagas icónicas como Halo, Gears of War y Forza Motorsport. Además, introdujo una interfaz intuitiva y funciones multimedia que la convirtieron en un centro de entretenimiento completo. Su mando ergonómico, muy elogiado, sentó las bases para los diseños futuros de controladores. Aunque hoy es considerada una consola retro, su legado permanece vivo gracias a la retrocompatibilidad y a su enorme influencia en la industria del gaming moderno.", 
      precio: 125, 
      ruta_img: "../utils-delete-after/res-org/microsoft-xbox-360.jpg",
      tipo:'consola'  
    },
    { 
      id: 6, 
      nombre: "Sega Saturn", 
      descripcion: "La Sega Saturn fue una consola adelantada a su tiempo, lanzada a mediados de los 90 con un potente hardware enfocado en juegos 2D y una arquitectura compleja que la hizo difícil de dominar para muchos desarrolladores. A pesar de su competencia con la PlayStation y la Nintendo 64, destacó por ofrecer experiencias únicas, especialmente en títulos arcade, de lucha y shooters japoneses. Su diseño elegante y su catálogo diverso la convirtieron en un objeto de culto para los coleccionistas. Aunque comercialmente no tuvo el éxito esperado, la Saturn dejó una huella importante por su ambición tecnológica y por ser una pieza clave en la historia de Sega.", 
      precio: 75, 
      ruta_img: "../utils-delete-after/res-org/sega-saturn.jpg",
      tipo:'consola'  
    },
  ];

//   console.log(gamingItems);



  
//son const porque siempre van a referirse al mismo elemento
const contenedorProductos = document.querySelector("#contenedorProductos");
// const barraBusqueda = document.querySelector("#barraBusqueda");




//intento darle el valor que este en el localStorage, si no hay, lo declara vacio ([])
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function mostrarProductos(productos) {
    //declara un auxiliar para despues reemplazar en el html
    let cartaProducto = "";
    productos.forEach((item) => {
        cartaProducto += `
              <div class="card-producto">
                  <img src="${item.ruta_img}" alt="${item.nombre}" />
                  <h3>${item.nombre}</h3>
                  <p>$ ${item.precio}</p>
                  <button onclick="agregarACarrito(${item.id})">Agregar al carrito</button>
              </div> `;
    });
    contenedorProductos.innerHTML = cartaProducto;
}



//#region revisar filtrar
// agrega un event listener para cuando se levanta una tecla del teclado
// barraBusqueda.addEventListener("keyup", () => {
//     filtrarProductos();
// });

//filtra los productos segun lo que esta escrito en la barra de busqueda
// function filtrarProductos() {
//     let valorBusqueda = barraBusqueda.value;
//     let productosFiltrados = productos.filter(f => f.nombre.includes(valorBusqueda));
//     mostrarProductos(productosFiltrados);
// }

//#endregion revisar filtrar

//#region revisar carrito
// function mostrarCarrito() {
//     //si no hay carrito, directamente no muestra el apartado
//     if (carrito.length == 0) {
//         contenedorCarrito.innerHTML = "";
//     } else {
//         let cartaCarrito = `
//         <h3>Carrito</h3>    
//         <ul>`;
//         carrito.forEach((item, indice) => {
//             cartaCarrito +=
//                 `<li class="bloque-item">
//                 <p class="nombre-item">${item.nombre} - $ ${item.precio}</p>
//                 <button class="boton-eliminar" onclick="eliminarItem(${indice})">Eliminar</button>
//             </li>`

//         });
//         cartaCarrito += `</ul>
//         <section class="abajoCarrito">        
//         <button onclick='vaciarCarrito()'> Vaciar carrito </button>
//         <p>Total:${carrito.reduce((total,a)=>total + a.precio,0)}</p>
//         </section>
// `;      
//Arriba use un reduce para calcular el total deprecio en el carrito. 
//Se va actualizando cada vez que se llama a esta funcion, por lo que siempre tiene el precio actualizado
        //actualiza lo que se ve del carrito
    //     contenedorCarrito.innerHTML = cartaCarrito;

    //     console.log(carrito);
    // }

    //actualiza el nav con la cantidad de productos
    // contadorCarrito.textContent = `Carrito: ${carrito.length} Productos`
    //se muestra si o si, por lo que esta afuera del if
// }

//#endregion revisar carrito



//#region localStorage y carrito
//CRUD de localStorage y carrito
//estas funciones manejan tanto el carrito como el localStorage
//cada vez que se modifica algo, se vuelve a mostrar el cambio en pantalla
//al mismo tiempo se actualizan ambas cosas


function agregarACarrito(id) {
    let itemSeleccionado = productos.find(f => f.id === id);
    carrito.push(itemSeleccionado);

    actualizarLocalStorage();
    // mostrarCarrito();
}

//EJERCICIO 6
function eliminarItem(indice) {
    //segun el indice a borrar, borra 1
    carrito.splice(indice, 1);
    //vuelve a mostrar el carrito
    //Y actualiza el localStorage cada vez que se modifica algo
    // mostrarCarrito();
    actualizarLocalStorage();
}
function vaciarCarrito() {
    carrito = [];
    // mostrarCarrito(); //Ya esta en la logica de la funcion, que si no hay nada, no se muestre el apartado carrito
    actualizarLocalStorage();
}
//(por lo general no pongo tildes porque queda incomodo en el teclado pero aca quedaba raro sino)
//usé esta funcion para evitar repetir el llamado a la funcion setItem que tiene dos parametros, me parece mas limpio
function actualizarLocalStorage() {
    //si el carrito es inexistente, lo elimina del localStorage
    //para evitar guardar informacion innecesaria (una vez declarado en el local storage, quedaria 
    //un carrito = [])
    if (carrito.length === 0) {
        localStorage.removeItem("carrito");
    } else {
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}
//#endregion


function init() {
    mostrarProductos(productos);
    //en caso de haber carrito, ya lo estaria mostrando
    // mostrarCarrito();
}

init();






