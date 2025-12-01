//reemplazar con query
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
const contenedorCarrito = document.querySelector("#contenedor-carrito");
const contadorCarrito = document.querySelector('#contador-carrito');




//intento darle el valor que este en el sessionStorage, si no hay, lo declara vacio ([])
let carrito = JSON.parse(sessionStorage.getItem("carrito")) || [];


//#region revisar carrito
function mostrarCarrito() {
    //si no hay carrito, directamente no muestra el apartado
    if (carrito.length == 0) {
        contenedorCarrito.innerHTML = "";
    } else {

        let cartaCarrito = `
        <h3>Carrito</h3>
        <ul class='contenedor-items-carrito'>`;
        carrito.forEach((item, indice) => {
            cartaCarrito +=
                `<li class="bloque-item card-carrito">
                <div class="item-info">
                <img src="${item.imagen_direccion}" alt="${item.nombre}" />
                <p class="nombre-item">${item.nombre} - $ ${item.precio}</p>
                <p>Cantidad: ${item.cantidad}</p>
                <div/>
                <div class="item-botones">
                <button class="boton-eliminar" onclick="eliminarItem(${indice})">Eliminar</button>
                <button class="boton-sumar" onclick="sumarItem(${item.id})">+ 1</button>
                <button class="boton-restar" onclick="restarItem(${item.id},${indice})">- 1</button>
                <div/>
            </li>`

        });
        cartaCarrito += `</ul>
        <section class="abajoCarrito">
        <button onclick='vaciarCarrito()'> Vaciar carrito </button>
        <p>Total:${carrito.reduce((total,a)=>total + a.precio*a.cantidad,0)}</p>
        <button class="completar-compra" onclick="()">Completar compra</button>
        </section>
`;
//Arriba use un reduce para calcular el total deprecio en el carrito.
//Se va actualizando cada vez que se llama a esta funcion, por lo que siempre tiene el precio actualizado
        //actualiza lo que se ve del carrito
        contenedorCarrito.innerHTML = cartaCarrito;

        console.log(carrito);
    }

    //actualiza el nav con la cantidad de productos
    contadorCarrito.textContent = `Carrito: ${carrito.length} Productos`
    //se muestra si o si, por lo que esta afuera del if
}

//#endregion revisar carrito

//suma 1 a la cantidad del item en el carrito
function sumarItem(id){
  console.log('sumar item');
    cambiarCantidadCarrito(id,1);
}
//resta cantidad de items en carrito
function restarItem(id,indice){
    cambiarCantidadCarrito(id,-1,indice);
}

//cant es +1 o -1
function cambiarCantidadCarrito(id,cant,indice=-1){
    carrito.forEach(item => {

        if(item.id == id){
          console.log('entra al if');
          console.log(item.cantidad,cant);
            if(item.cantidad+cant >0){
          console.log('entra al segundo if');

              item.cantidad+=cant;
            }else{
          console.log('entra al else');

                //el if seria: item.cantidad+cant <= 0
                eliminarItem(indice);
            }
          }
        });


        actualizarsessionStorage();
        mostrarCarrito();
}


//#region sessionStorage y carrito
//CRUD de sessionStorage y carrito
//estas funciones manejan tanto el carrito como el sessionStorage
//cada vez que se modifica algo, se vuelve a mostrar el cambio en pantalla
//al mismo tiempo se actualizan ambas cosas

// agregarACarrito(2);

//Agregar producto a carrito por primera vez
function agregarACarrito(id) {
    let itemSeleccionado = productos.find(f => f.id === id);
    carrito.push({itemSeleccionado,cantidad:1});
    // carrito.push({id,cantidad:1});

    actualizarsessionStorage();
    // mostrarCarrito();
}

//EJERCICIO 6
function eliminarItem(indice) {
    //segun el indice a borrar, borra 1
    carrito.splice(indice, 1);
    //vuelve a mostrar el carrito
    //Y actualiza el sessionStorage cada vez que se modifica algo
    // mostrarCarrito();
    actualizarsessionStorage();
    mostrarCarrito();
}
function vaciarCarrito() {
    carrito = [];
    // mostrarCarrito(); //Ya esta en la logica de la funcion, que si no hay nada, no se muestre el apartado carrito
    actualizarsessionStorage();
    mostrarCarrito();
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
    mostrarCarrito();
}

init();
