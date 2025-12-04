//reemplazar con query



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
        <button class="vaciar-carrito" onclick='vaciarCarrito()'> Vaciar carrito </button>
        <p>Total:${carrito.reduce((total,a)=>total + a.precio*a.cantidad,0)}</p>
        <button class="completar-compra" onclick="(completarCompra())">Completar compra</button>
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
          console.log(item.cantidad,cant);
            if(item.cantidad+cant >0){

              item.cantidad+=cant;
            }else{
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

function completarCompra(){
  sessionStorage.setItem("compraActiva", "1");
  location.replace('sales.html');
}

function init() {
    mostrarCarrito();
}

init();
