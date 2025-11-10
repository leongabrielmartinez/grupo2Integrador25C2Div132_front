//son const porque siempre van a referirse al mismo elemento
const contenedorCarrito = document.querySelector("#contenedor-carrito");
const contadorCarrito = document.querySelector('#contador-carrito');




//intento darle el valor que este en el localStorage, si no hay, lo declara vacio ([])
let carrito = JSON.parse(localStorage.getItem("carrito")) || [];


//#region revisar carrito
function mostrarCarrito() {
    //si no hay carrito, directamente no muestra el apartado
    if (carrito.length == 0) {
        contenedorCarrito.innerHTML = "";
    } else {
        let cartaCarrito = `
        <h3>Carrito</h3>
        <ul>`;
        carrito.forEach((item, indice) => {
            cartaCarrito +=
                `<li class="bloque-item">
                <p class="nombre-item">${item.nombre} - $ ${item.precio}</p>
                <button class="boton-eliminar" onclick="eliminarItem(${indice})">Eliminar</button>
            </li>`

        });
        cartaCarrito += `</ul>
        <section class="abajoCarrito">
        <button onclick='vaciarCarrito()'> Vaciar carrito </button>
        <p>Total:${carrito.reduce((total,a)=>total + a.precio,0)}</p>
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
