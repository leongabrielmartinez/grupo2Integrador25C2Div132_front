//no llegue a comentar mucho porque no llegue a terminar.

/*
 ====================*
     Array de frutas
     *====================
 */
let frutas = [
  { id: 1, nombre: "arandano", precio: 5000, ruta_img: "img/arandano.jpg" },
  { id: 2, nombre: "banana", precio: 1000, ruta_img: "img/banana.jpg" },
  { id: 3, nombre: "frambuesa", precio: 4000, ruta_img: "img/frambuesa.png" },
  { id: 4, nombre: "frutilla", precio: 3000, ruta_img: "img/frutilla.jpg" },
  { id: 5, nombre: "kiwi", precio: 2000, ruta_img: "img/kiwi.jpg" },
  { id: 6, nombre: "mandarina", precio: 800, ruta_img: "img/mandarina.jpg" },
  { id: 7, nombre: "manzana", precio: 1500, ruta_img: "img/manzana.jpg" },
  { id: 8, nombre: "naranja", precio: 9000, ruta_img: "img/naranja.jpg" },
  { id: 9, nombre: "pera", precio: 2500, ruta_img: "img/pera.jpg" },
  { id: 10, nombre: "anana", precio: 3000, ruta_img: "img/anana.jpg" },
  { id: 11, nombre: "pomelo-amarillo", precio: 2000, ruta_img: "img/pomelo-amarillo.jpg" },
  { id: 12, nombre: "pomelo-rojo", precio: 2000, ruta_img: "img/pomelo-rojo.jpg" },
];

const alumno = {dni:43895273, nombre:"Leon Gabriel", apellido:"Martinez Aquino"}

/*
 ====================*
     Variables
     *====================
 */
let contenedorFrutas = document.querySelector("#contenedorFrutas");

let contenedorCarrito = document.querySelector("#contenedorCarrito");

let barraBusqueda = document.querySelector("#barraBusqueda");

let nombreAlumno = document.getElementById("nombreAlumno");

let cantidadCarritoHtml = document.getElementById("cantidadCarrito");

let ordenarPorPrecio = document.getElementById("ordenarPorPrecio");

let ordenarPorNombre = document.getElementById("ordenarPorNombre");

//================
let cantidadCarrito = 0;

let total = 0;

let carrito = [];

//================
let banderaLocalStorage = false;
let carritoLocalStorage = []

/*
 ====================*
     Funciones que manejan el html.
     *====================
 */
function mostrarProductos(array) {
    let cartaProducto = "";
    array.forEach((fruta) => {
        cartaProducto += `
            <div class="card-producto">
                <img src="${fruta.ruta_img}" alt="${fruta.nombre}" />
                <h3>${fruta.nombre}</h3>
                <p>$ ${fruta.precio}</p>
                <button class="boton-agregar" onclick="agregarACarrito(${fruta.id})">Agregar al carrito</button>
            </div> `;
    });
    contenedorFrutas.innerHTML = cartaProducto;
}

function revisionInicialCarrito(){
    if (localStorage.getItem("carrito")){
        let localCarrito = localStorage.getItem("carrito");
        carrito = JSON.parse(localCarrito);
        mostrarCarrito();
        banderaLocalStorage = true;        
    }else{
        console.log("no existe carrito en local storage");
    }
}

//se accede por referencia al html y se agregan nuevas etiquetas html generadas a partir del array de frutas.

function mostrarCarrito(){    
    let cartaCarrito = "<ul>";
    carrito.forEach((elemento, indice) => {
        cartaCarrito +=
        `<li class="bloque-item">
        <p class="nombre-item">${elemento.nombre} - $ ${elemento.precio}</p>
        <button class="boton-eliminar" onclick="eliminarElemento(${indice})">Eliminar</button>
        </li>`        
    });
    
    cartaCarrito += `</ul><div class='vaciar-total-carrito'><button class='boton-vaciar-carrito' 
    onclick='vaciarCarrito()'>Vaciar carrito</button><p id='total'></p></div>`;
    //let cantidadCarritoHtml = document.getElementById("total");

    contenedorCarrito.innerHTML = cartaCarrito;
    console.table(carrito);
}

function imprimirDatosAlumno(){
    console.log(`Yo soy ${alumno.nombre} ${alumno.apellido} y mi dni es ${alumno.dni}.`)
    nombreAlumno.innerHTML = alumno.nombre + " " + alumno.apellido;
}

/*
 ====================*
     Funciones de manipulación de productos.
     *====================
 */

function agregarACarrito(id){

    let frutaSeleccionada = frutas.find(f => f.id === id);

    carrito.push(frutaSeleccionada);

    console.log(carrito);
    console.log(`id del producto: ${id}`);

    cantidadCarrito++;//aumento el numero en una unidad
    mostrarCarrito();
    actualizarInfoCarrito();//actualizo html

    localStorage.setItem("carrito", JSON.stringify(carrito));
    let l = localStorage.getItem("carrito");
    console.log(JSON.parse(l));

    //let totalCarritoHtml = document.getElementById("total");

}

function eliminarElemento(indice){
    console.log(`test de eliminado de indice ${indice}`);
    carrito.splice(indice, 1);
    cantidadCarrito--;//disminuyo en una unidad
    console.table(carrito);
    
    if(carrito.length === 0){
        actualizarCantidadCarrito()
        vaciarCarrito(); //si no hay elementos "vacio" el html.
    } else {
        mostrarCarrito(); // Solo mostrar si hay elementos
        actualizarInfoCarrito();//actualizo el html
        localStorage.setItem("carrito", JSON.stringify(carrito));
    }
}

function vaciarCarrito(){
    carrito = [];
    contenedorCarrito.innerHTML = "";
    cantidadCarrito = 0;
    actualizarCantidadCarrito();
    localStorage.clear();
}

/*
 ====================*
     Funciones de filtrado.
     *====================
 */


barraBusqueda.addEventListener("keyup", () => {
    filtrarProductos();
});

function filtrarProductos(){
    let valorBusqueda = barraBusqueda.value;

    console.log(valorBusqueda);

    let productosFiltrados = frutas.filter(f => f.nombre.includes(valorBusqueda));

    mostrarProductos(productosFiltrados);
}

ordenarPorPrecio.addEventListener("click", () => {
    filtrarPorPrecio();
});

function filtrarPorPrecio(){
    let valorBusqueda = barraBusqueda.value.toLowerCase();
    let productosFiltrados = frutas
        .filter(f => f.nombre.includes(valorBusqueda))
        .sort((a, b) => a.precio - b.precio); // Ordena de menor a mayor precio
    mostrarProductos(productosFiltrados);
}

ordenarPorNombre.addEventListener("click", () => {
    filtrarPorNombre();
});

function filtrarPorNombre(){
    let valorBusqueda = barraBusqueda.value.toLowerCase();
    let productosFiltrados = frutas
        .filter(f => f.nombre.includes(valorBusqueda))
        .sort((a, b) => a.nombre.localeCompare(b.nombre)); // Ordena alfabéticamente
    mostrarProductos(productosFiltrados);
}


/*
 ====================*
     Funciones de actualización.
     *====================
 */

function actualizarCantidadCarrito(){
    cantidadCarritoHtml.innerHTML = "Carrito: "+ cantidadCarrito;
}

function actualizarTotalCarrito(){
    total = carrito.reduce((suma, producto) => suma + producto.precio, 0);
    let totalCarritoHtml = document.getElementById("total");
    if (totalCarritoHtml) {
        totalCarritoHtml.innerHTML = "Total: $" + total;
    }
}

function actualizarInfoCarrito(){
    actualizarCantidadCarrito()
    actualizarTotalCarrito()
}


//Accedemos al elemento por su id con getElement.. y cambiamos su valor 


//Inicio del programa.
function init(){   
    imprimirDatosAlumno();
    revisionInicialCarrito();
    mostrarProductos(frutas);
    if(banderaLocalStorage){
        actualizarInfoCarrito();
        banderaLocalStorage = false;
    }
}

init();

