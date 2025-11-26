let productos = [
  { 
    id: 1, 
    tipo: "juego",
    nombre: "Resident Evil 4 (2023)", 
    precio: 59.99, 
    empresa_responsable: "Capcom", 
    descripcion: "Resident Evil 4 (2023) es una reimaginación del clásico juego de terror y acción que revolucionó el género. En esta versión moderna, se mantiene la esencia del original pero con mejoras visuales impresionantes, una jugabilidad más fluida y un enfoque cinematográfico en cada enfrentamiento. Controlas a Leon S. Kennedy en una misión peligrosa para rescatar a la hija del presidente en un remoto pueblo europeo lleno de enemigos infectados. El juego combina exploración, combate táctico y una atmósfera constante de tensión. Además, incluye nuevas mecánicas, un diseño de sonido inmersivo y escenarios rediseñados que hacen que la experiencia sea tan nostálgica como desafiante para los nuevos jugadores.", 
    ruta_img: "https://playtecgames.com/wp-content/uploads/2023/01/re4remakeps5jpg.jpg" 
  },
  { 
    id: 2, 
    tipo: "juego",
    nombre: "Street Fighter 6", 
    precio: 59.99, 
    empresa_responsable: "Capcom",  
    descripcion: "Street Fighter 6 marca una nueva era para la icónica saga de lucha de Capcom, combinando un estilo visual moderno con un sistema de combate más accesible y profundo. Incluye tres modos principales: Fighting Ground, con las batallas clásicas uno contra uno; World Tour, un modo historia en mundo abierto donde los jugadores crean su propio luchador; y Battle Hub, un espacio social en línea para competir y conectarse con otros jugadores. Su sistema de control Modern y el nuevo medidor Drive permiten tanto a novatos como a veteranos disfrutar de combates estratégicos y dinámicos. Con personajes legendarios y nuevos rostros, Street Fighter 6 redefine el género de peleas con energía, estilo y libertad creativa.", 
    ruta_img: "https://playtecgames.com/wp-content/uploads/2023/06/Street-Fighter-6-PS4.jpg" 
  },
  { 
    id: 3, 
    tipo: "juego",
    nombre: "Hollow Knight", 
    precio: 14.99, 
    empresa_responsable: "Team Cherry",  
    descripcion: "Hollow Knight es una aventura de acción en 2D que combina exploración profunda, combate desafiante y una atmósfera melancólica en el misterioso reino de Hallownest. Controlas a un pequeño caballero en busca de respuestas sobre una civilización perdida, mientras enfrentas criaturas extrañas y descubres secretos ocultos bajo tierra. Su estilo artístico hecho a mano y su banda sonora evocadora crean una experiencia inmersiva que premia la curiosidad y la paciencia. Cada zona del juego ofrece nuevos enemigos, habilidades y rutas interconectadas, recordando a los clásicos Metroidvania, pero con una identidad única que ha convertido a Hollow Knight en un referente del género indie moderno.", 
    ruta_img: "https://playtecgames.com/wp-content/uploads/2021/05/hollow-knight-ps4_1.jpg" 
  },
  { 
    id: 4, 
    tipo: "juego",
    nombre: "Red Dead Redemption 2", 
    precio: 49.99, 
    empresa_responsable: "Rockstar Games",  
    descripcion: "Red Dead Redemption 2 es una obra maestra del género de mundo abierto creada por Rockstar Games. Ambientado en el ocaso del Viejo Oeste, sigues la historia de Arthur Morgan, un forajido miembro de la banda de Van der Linde, mientras lucha por sobrevivir en un mundo en constante cambio. Con un nivel de detalle impresionante, una narrativa profunda y un elenco de personajes inolvidables, el juego ofrece una experiencia cinematográfica única. Su vasto mundo abierto está lleno de misiones, eventos aleatorios, caza, pesca y exploración libre, todo acompañado de una banda sonora épica y una ambientación realista que marca un nuevo estándar en la industria.", 
    ruta_img: "https://m.media-amazon.com/images/I/81JuQGZ77WL._SL1500_.jpg" 
  },
  { 
    id: 5, 
    tipo: "juego",
    nombre: "Diablo IV", 
    precio: 69.99, 
    empresa_responsable: "Blizzard Entertainment",  
    descripcion: "Diablo IV es la nueva entrega de la aclamada saga de acción RPG de Blizzard Entertainment. Regresa el oscuro mundo de Santuario con una estética gótica y un tono más maduro, ofreciendo una experiencia inmersiva de exploración, combate y progresión de personajes. Los jugadores pueden elegir entre clases como Bárbaro, Hechicera, Pícaro, Druida y Nigromante, cada una con su propio estilo de juego. Con su mundo abierto compartido, mazmorras generadas aleatoriamente y un sistema de botín profundamente adictivo, Diablo IV ofrece acción cooperativa y competitiva, así como un endgame extenso que garantiza cientos de horas de juego.", 
    ruta_img: "https://playtecgames.com/wp-content/uploads/2023/05/DiabloiVPS5.jpg" 
  },
  { 
    id: 6, 
    tipo: "juego",
    nombre: "Elden Ring", 
    precio: 59.99, 
    empresa_responsable: "FromSoftware",  
    descripcion: "Elden Ring es un RPG de acción desarrollado por FromSoftware en colaboración con George R. R. Martin. Situado en las Tierras Intermedias, ofrece un vasto mundo abierto lleno de misterios, jefes colosales y una libertad sin precedentes para explorar y combatir. El jugador encarna al Sinluz, un aventurero que busca restaurar el Círculo de Elden y convertirse en el Señor del Anillo. Con su característico desafío, un sistema de combate refinado y una ambientación envolvente, Elden Ring combina la esencia de Dark Souls con la exploración y la narrativa emergente, consolidándose como uno de los juegos más importantes de su generación.", 
    ruta_img: "https://playtecgames.com/wp-content/uploads/2022/03/Elden-Ring-PS5.jpg" 
  },

  
  { 
    id: 7, 
    tipo: "consola",
    nombre: "PlayStation 5", 
    precio: 499.99, 
    empresa_responsable: "Sony Interactive Entertainment",
    descripcion: "La PlayStation 5 representa la nueva generación de consolas de Sony, ofreciendo una experiencia de juego fluida, inmersiva y visualmente impactante. Su potente hardware, junto con un disco SSD ultrarrápido, reduce los tiempos de carga y permite mundos abiertos mucho más dinámicos. El mando DualSense destaca por su respuesta háptica y gatillos adaptativos, brindando una sensación más realista en cada interacción del juego. Además, la interfaz rediseñada permite un acceso rápido a contenidos y funciones sociales. Con títulos exclusivos y compatibilidad con gran parte del catálogo de PS4, la PS5 se posiciona como una consola versátil, ideal tanto para jugadores casuales como para los más exigentes.", 
    ruta_img: "https://m.media-amazon.com/images/I/61OFeihbEZL._SL1500_.jpg" 
  },
  { 
    id: 8, 
    tipo: "consola",
    nombre: "Microsoft Xbox 360", 
    precio: 149.99, 
    empresa_responsable: "Microsoft",
    descripcion: "La Xbox 360 marcó una época en la historia de los videojuegos, destacando por su potente catálogo de títulos y su impulso al juego en línea a través de Xbox Live. Fue la consola que consolidó sagas icónicas como Halo, Gears of War y Forza Motorsport. Además, introdujo una interfaz intuitiva y funciones multimedia que la convirtieron en un centro de entretenimiento completo. Su mando ergonómico, muy elogiado, sentó las bases para los diseños futuros de controladores. Aunque hoy es considerada una consola retro, su legado permanece vivo gracias a la retrocompatibilidad y a su enorme influencia en la industria del gaming moderno.", 
    ruta_img: "https://m.media-amazon.com/images/I/61WqkmreFSL._SL1000_.jpg" 
  },
  { 
    id: 9, 
    tipo: "consola",
    nombre: "Sega Saturn", 
    precio: 199.99, 
    empresa_responsable: "Sega",
    descripcion: "La Sega Saturn fue una consola adelantada a su tiempo, lanzada a mediados de los 90 con un potente hardware enfocado en juegos 2D y una arquitectura compleja que la hizo difícil de dominar para muchos desarrolladores. A pesar de su competencia con la PlayStation y la Nintendo 64, destacó por ofrecer experiencias únicas, especialmente en títulos arcade, de lucha y shooters japoneses. Su diseño elegante y su catálogo diverso la convirtieron en un objeto de culto para los coleccionistas. Aunque comercialmente no tuvo el éxito esperado, la Saturn dejó una huella importante por su ambición tecnológica y por ser una pieza clave en la historia de Sega.", 
    ruta_img: "https://m.media-amazon.com/images/I/91BgiSTufEL._SL1500_.jpg" 
  },
  { 
    id: 10, 
    tipo: "consola", 
    nombre: "Nintendo GameCube", 
    precio: 129.99, 
    empresa_responsable: "Nintendo", 
    descripcion: "La Nintendo GameCube fue una consola compacta y potente lanzada en 2001, reconocida por su diseño cúbico y su enfoque en la diversión pura. Contó con un amplio catálogo de juegos icónicos como Super Smash Bros. Melee, Metroid Prime y The Legend of Zelda: The Wind Waker. Aunque no logró superar en ventas a sus competidoras, su mando ergonómico y su potencia gráfica la convirtieron en una favorita de los fans. Hoy en día, la GameCube es recordada con cariño por su innovación, su excelente librería de títulos y su influencia en el diseño de futuras consolas de Nintendo.", 
    ruta_img: "https://m.media-amazon.com/images/I/616RyUDGfWL._SL1500_.jpg" 
  }, 
  { 
    id: 11, 
    tipo: "consola", 
    nombre: "Atari 2600", 
    precio: 89.99, 
    empresa_responsable: "Atari, Inc.", 
    descripcion: "La Atari 2600 es una de las consolas más importantes en la historia de los videojuegos. Lanzada a finales de los años 70, fue pionera en llevar la diversión del arcade a los hogares. Su sistema de cartuchos intercambiables permitió a los jugadores disfrutar de una gran variedad de títulos, incluidos clásicos como Space Invaders y Pitfall!. Aunque sus gráficos eran simples, su impacto cultural y comercial marcó el inicio de la industria moderna del videojuego. Hoy, la Atari 2600 sigue siendo un símbolo de la era dorada del gaming retro.", 
    ruta_img: "https://m.media-amazon.com/images/I/71HESRbyxDL._SL1500_.jpg" 
  }, 
  { 
    id: 12, 
    tipo: "consola", 
    nombre: "Nintendo Switch", 
    precio: 299.99, 
    empresa_responsable: "Nintendo", 
    descripcion: "La Nintendo Switch combina la portabilidad de una consola portátil con la potencia de una consola de sobremesa. Su sistema híbrido permite jugar en cualquier lugar, ya sea en modo portátil, en tabletop o conectado al televisor. Con títulos de gran éxito como The Legend of Zelda: Breath of the Wild y Super Mario Odyssey, la Switch ofrece una experiencia versátil y accesible para todo tipo de jugadores. Su enfoque en la innovación, la jugabilidad local y el multijugador online la han convertido en una de las consolas más exitosas de Nintendo.", 
    ruta_img: "https://m.media-amazon.com/images/I/71wpE+ZIehL._SL1500_.jpg" 
  },
  ];





//son const porque siempre van a referirse al mismo elemento
const contenedorProductos = document.querySelector("#contenedorProductos");
// const busquedaNombre = document.querySelector("#busqueda-nombre");




//intento darle el valor que este en el localStorage, si no hay, lo declara vacio ([])
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


function recortarDescripcion(texto, max = 40) {

  if (texto.length > max) {
    return texto.substring(0, max) + "...";
  }
  return texto;
}

function mostrarProductos(productos) {
    //declara un auxiliar para despues reemplazar en el html
    let cartaProducto = "";
    productos.forEach((item) => {
        cartaProducto += `
              <div class="card-producto">
                  <img src="${item.ruta_img}" alt="${item.nombre}" />
                  <h5>${item.nombre}</h3>
                  <p class='card-descripcion'>${recortarDescripcion(item.descripcion)}</p>
                  <p>$ ${item.precio}</p>
                  <button class='btn-generico' onclick="agregarACarrito(${item.id})">Agregar al carrito</button>`+
                  // <button class='btn-generico' onclick="verDetalles(${item.id})">Ver detalles</button>
              `</div> `;
    });
    contenedorProductos.innerHTML = cartaProducto;
}

function verDetalles(id){
  console.log(`Redirige a detalles del producto ${id}`);
}

// #region revisar filtrar
// agrega un event listener para cuando se levanta una tecla del teclado
// busquedaNombre.addEventListener("keyup", () => {
//     filtrarProductos();
// });

//filtra los productos segun lo que esta escrito en la barra de busqueda
// function filtrarProductos() {
//     let valorBusqueda = busquedaNombre.value;
//     let productosFiltrados = productos.filter(f => f.nombre.includes(valorBusqueda));
//     mostrarProductos(productosFiltrados);
// }

//#endregion revisar filtrar




//#region localStorage y carrito
//estas funciones manejan tanto el carrito como el localStorage
//En esta pantalla 'productos' solo se van a poder agregar productos al carrito,
//lo demas de su crud, esta en el apartado del carrito



function agregarACarrito(id) {
  let itemSeleccionado = productos.find(f => f.id === id);
  verificarExistenciaEnCarrito(itemSeleccionado);
  actualizarLocalStorage();
}

function verificarExistenciaEnCarrito(item){
  let existe = false;
  carrito.forEach(carritoItem=>{
    if(carritoItem.id == item.id){
      carritoItem.cantidad++;
      existe= true;
    }
  })
  if(!existe){
    item.cantidad = 1;
    carrito.push(item);
  }
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

}

init();






