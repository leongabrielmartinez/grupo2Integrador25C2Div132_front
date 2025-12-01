let productos = [
  {
    "id": 1,
    "nombre": "Resident Evil 4 (2023)",
    "precio": 59.99,
    "categoria": "juego",
    "activo": 0,
    "imagen_direccion": "https://playtecgames.com/wp-content/uploads/2023/01/re4remakeps5jpg.jpg",
    "descripcion": "Resident Evil 4 (2023) es una reimaginación del clásico juego de terror y acción...",
    "empresa_responsable": "Capcom"
  },
  {
    "id": 2,
    "nombre": "Street Fighter 6",
    "precio": 59.99,
    "categoria": "juego",
    "activo": 0,
    "imagen_direccion": "https://playtecgames.com/wp-content/uploads/2023/06/Street-Fighter-6-PS4.jpg",
    "descripcion": "Street Fighter 6 combina un estilo visual moderno con un sistema de combate accesible...",
    "empresa_responsable": "Capcom"
  },
  {
    "id": 3,
    "nombre": "Hollow Knight",
    "precio": 14.99,
    "categoria": "juego",
    "activo": 0,
    "imagen_direccion": "https://playtecgames.com/wp-content/uploads/2021/05/hollow-knight-ps4_1.jpg",
    "descripcion": "Hollow Knight es una aventura de acción 2D que mezcla exploración profunda...",
    "empresa_responsable": "Team Cherry"
  },
  {
    "id": 4,
    "nombre": "Red Dead Redemption 2",
    "precio": 49.99,
    "categoria": "juego",
    "activo": 0,
    "imagen_direccion": "https://m.media-amazon.com/images/I/81JuQGZ77WL._SL1500_.jpg",
    "descripcion": "Obra maestra del mundo abierto creada por Rockstar Games...",
    "empresa_responsable": "Rockstar Games"
  },
  {
    "id": 5,
    "nombre": "Diablo IV",
    "precio": 69.99,
    "categoria": "juego",
    "activo": 0,
    "imagen_direccion": "https://playtecgames.com/wp-content/uploads/2023/05/DiabloiVPS5.jpg",
    "descripcion": "Diablo IV regresa al oscuro mundo de Santuario...",
    "empresa_responsable": "Blizzard Entertainment"
  },
  {
    "id": 6,
    "nombre": "Elden Ring",
    "precio": 59.99,
    "categoria": "juego",
    "activo": 0,
    "imagen_direccion": "https://playtecgames.com/wp-content/uploads/2022/03/Elden-Ring-PS5.jpg",
    "descripcion": "Elden Ring es un RPG de acción de FromSoftware...",
    "empresa_responsable": "FromSoftware"
  },
  {
    "id": 7,
    "nombre": "PlayStation 5",
    "precio": 499.99,
    "categoria": "consola",
    "activo": 0,
    "imagen_direccion": "https://m.media-amazon.com/images/I/61OFeihbEZL._SL1500_.jpg",
    "descripcion": "La PS5 ofrece experiencia fluida...",
    "empresa_responsable": "Sony Interactive Entertainment"
  },
  {
    "id": 8,
    "nombre": "Microsoft Xbox 360",
    "precio": 149.99,
    "categoria": "consola",
    "activo": 0,
    "imagen_direccion": "https://m.media-amazon.com/images/I/61WqkmreFSL._SL1000_.jpg",
    "descripcion": "La Xbox 360 impulsó el juego en línea con Xbox Live...",
    "empresa_responsable": "Microsoft"
  },
  {
    "id": 9,
    "nombre": "Sega Saturn",
    "precio": 199.99,
    "categoria": "consola",
    "activo": 0,
    "imagen_direccion": "https://m.media-amazon.com/images/I/91BgiSTufEL._SL1500_.jpg",
    "descripcion": "Consola ambiciosa enfocada en juegos 2D...",
    "empresa_responsable": "Sega"
  },
  {
    "id": 10,
    "nombre": "Nintendo GameCube",
    "precio": 129.99,
    "categoria": "consola",
    "activo": 0,
    "imagen_direccion": "https://m.media-amazon.com/images/I/616RyUDGfWL._SL1500_.jpg",
    "descripcion": "Consola compacta con títulos icónicos...",
    "empresa_responsable": "Nintendo"
  },
  {
    "id": 11,
    "nombre": "Atari 2600",
    "precio": 89.99,
    "categoria": "consola",
    "activo": 0,
    "imagen_direccion": "https://m.media-amazon.com/images/I/71HESRbyxDL._SL1500_.jpg",
    "descripcion": "Una de las consolas más importantes de la historia...",
    "empresa_responsable": "Atari, Inc."
  },
  {
    "id": 12,
    "nombre": "Nintendo Switch",
    "precio": 299.99,
    "categoria": "consola",
    "activo": 0,
    "imagen_direccion": "https://m.media-amazon.com/images/I/71wpE+ZIehL._SL1500_.jpg",
    "descripcion": "Consola híbrida que combina portabilidad con sobremesa...",
    "empresa_responsable": "Nintendo"
  }
]
;



//son const porque siempre van a referirse al mismo elemento
const contenedorProductos = document.querySelector("#contenedorProductos");
const botonFiltrarTodos = document.getElementById("btn-busqueda-todos");
const botonFiltrarJuegos = document.getElementById("btn-busqueda-juegos");
const botonFiltrarConsolas = document.getElementById("btn-busqueda-consolas");
// const busquedaNombre = document.querySelector("#busqueda-nombre");




//intento darle el valor que este en el sessionStorage, si no hay, lo declara vacio ([])
let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];
// let carrito = [];


botonFiltrarTodos.addEventListener("click", () => {
  mostrarProductos(productos, "todos");
});

botonFiltrarJuegos.addEventListener("click", () => {
  mostrarProductos(productos, "juego");
});

botonFiltrarConsolas.addEventListener("click", () => {
  mostrarProductos(productos, "consola");
});


function recortarDescripcion(texto, max = 40) {

  if (texto.length > max) {
    return texto.substring(0, max) + "...";
  }
  return texto;
}

function mostrarProductos(productos, filtro="todos") {
    //declara un auxiliar para despues reemplazar en el html
    let cartaProducto = "";
    if(filtro != "todos"){
      productos = productos.filter(item => item.categoria === filtro)
    }
    productos.forEach((item) => {
        cartaProducto += `
              <div class="card-producto">
                  <img src="${item.imagen_direccion}" alt="${item.nombre}" />
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




//#region sessionStorage y carrito
//estas funciones manejan tanto el carrito como el sessionStorage
//En esta pantalla 'productos' solo se van a poder agregar productos al carrito,
//lo demas de su crud, esta en el apartado del carrito



function agregarACarrito(id) {
  let itemSeleccionado = productos.find(f => f.id === id);
  verificarExistenciaEnCarrito(itemSeleccionado);
  actualizarsessionStorage();
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
function actualizarsessionStorage() {
    //si el carrito es inexistente, lo elimina del sessionStorage
    //para evitar guardar informacion innecesaria (una vez declarado en el local storage, quedaria
    //un carrito = [])
    if (carrito.length === 0) {
        sessionStorage.removeItem("carrito");
    } else {
        sessionStorage.setItem("carrito", JSON.stringify(carrito));
    }
}
//#endregion


function init() {
    mostrarProductos(productos);

}

init();






