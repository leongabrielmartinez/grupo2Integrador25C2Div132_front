let productos =[];
async function getProducts() {
  try {
    const response = await fetch('http://localhost:3000/api/products');
    if (!response.ok){
      console.log('Hubo un error al buscar productos, volve a intentarlo');
    }
    const data = await response.json();    
    console.log(data.payload);
    return data.payload;
  } catch (error) {
    console.error(error);
  }
}


//son const porque siempre van a referirse al mismo elemento
const contenedorProductos = document.querySelector("#contenedorProductos");
const botonFiltrarTodos = document.getElementById("btn-busqueda-todos");
const botonFiltrarJuegos = document.getElementById("btn-busqueda-juegos");
const botonFiltrarConsolas = document.getElementById("btn-busqueda-consolas");
const busquedaNombre = document.querySelector("#busqueda-nombre");
const numeroCarrito = document.getElementById("numero-carrito");



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


function recortarDescripcion(texto, max = 100) {

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
      if (item.activo) {
        
    cartaProducto += `
        <div class="card-producto">
            <img src="${item.imagen_direccion}" alt="${item.nombre}" />
            <h4>${item.nombre}</h4>
            <p class="card-descripcion">${recortarDescripcion(item.descripcion)}</p>
            <p>$ ${item.precio}</p>
            <button class="special-red-button" onclick="agregarACarrito(${item.id})">
                <ion-icon class="icono-card" name="cart-outline"></ion-icon>
                Comprar
            </button>
            <button class="special-red-button btn-detalles" onclick="verDetalles(${item.id})">
                <ion-icon class="icono-card" name="alert-circle-outline"></ion-icon>
                Detalles
            </button>
        </div>
    `;

  }
});
    contenedorProductos.innerHTML = cartaProducto;
}

function verDetalles(id){
      //declara un auxiliar para despues reemplazar en el html
    let producto = "";

    productos.forEach((item) => {
    if(item.id === id){
      let descripcionAdaptada = reemplazarPuntosPorSalto(item.descripcion);


      producto = `
          <div class="card-producto card-producto-extendida">
              <img src="${item.imagen_direccion}" alt="${item.nombre}" />
              <div class="descripcion-completa-texto">
              <h4>${item.nombre}</h4>
              <p>Desarrollador: <span class="texto-azul">${item.empresa_responsable}</span></p>
              <p><span class="texto-azul">${descripcionAdaptada}</span></p>
              <p><span class="texto-azul">Precio: </span>$ ${item.precio}</p>
              <button class="special-red-button" onclick="agregarACarrito(${item.id})">
              <ion-icon class="icono-card" name="cart-outline"></ion-icon>
              Comprar
              </button>
              <button class="special-red-button btn-detalles" onclick="init()">
              <ion-icon class="icono-card" name="alert-circle-outline"></ion-icon>
              Volver
              </button>
              </div>
          </div>
    `;
    }
    });
    contenedorProductos.innerHTML = producto;
}


function reemplazarPuntosPorSalto(texto) {
    return texto.replace(/\. /g, ".<br><br>");
}




// #region revisar filtrar
// agrega un event listener para cuando se levanta una tecla del teclado
busquedaNombre.addEventListener("keyup", () => {
    filtrarProductos();
});

//filtra los productos segun lo que esta escrito en la barra de busqueda
function filtrarProductos() {
    let valorBusqueda = busquedaNombre.value;
    let productosFiltrados = productos.filter(f => f.nombre.toLowerCase().includes(valorBusqueda));
    mostrarProductos(productosFiltrados);
}

//#endregion revisar filtrar




//#region sessionStorage y carrito
//estas funciones manejan tanto el carrito como el sessionStorage
//En esta pantalla 'productos' solo se van a poder agregar productos al carrito,
//lo demas de su crud, esta en el apartado del carrito



function agregarACarrito(id) {
  let itemSeleccionado = productos.find(f => f.id === id);
  verificarExistenciaEnCarrito(itemSeleccionado);
  actualizarsessionStorage();
  numeroCarrito.innerHTML = carrito.length;
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


async function init() {
    numeroCarrito.innerHTML = carrito.length;
    productos =await getProducts();
    mostrarProductos(productos);

}

init();






