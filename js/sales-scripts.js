// Imprimir tickets PDF /////////////////////////////////////
const actualSaleConteiner = document.getElementById("actual-sale-container");

function renderizarTabla(){
    const carrito = sessionStorage.getItem("carrito");
    const arrayDeCarrito = JSON.parse(carrito);

    let cantidadCarrito = 0;
    let total = 0;
    arrayDeCarrito.forEach(e => {
        cantidadCarrito += e.cantidad;
        total += e.cantidad * e.precio;
    });

    const stringTabla =
    `
    <td><div class="text-ticket">${cantidadCarrito} - $${total}</div></td>
    <td><div class="text-ticket"><button id="boton_imprimir"><ion-icon name="download-outline"></ion-icon></button></div></td>
    `;

    actualSaleConteiner.innerHTML = stringTabla;
}

function imprimirTicket(precioTotal) { 
    let carrito = JSON.parse(sessionStorage.getItem("carrito"));
  
    // Para registrar las ventas a posteriori, guardaremos los ids de los productos del carrito
    let idProductos = []; // Array vacio de ids de producto

    // Gracias al CDN, extraemos la clase jspdf del objeto global window
    const { jsPDF } = window.jspdf;

    // Creamos una nueva instancia del documento pdf usando al clase jsPDF
    const doc = new jsPDF(); // Ahora doc tendra todos los metodos que le provee la herramienta jsPDF

    // Definimos el margen superior de 20px en el eje y -> eje vertical, el eje x será el eje horizontal
    let y = 20;

    /* Ticket text of jspdf*/
    doc.setFont("courier", "normal");
    doc.setFontSize(12);

    // ===== ENCABEZADO =====
    doc.text("+------------------------------------------+", 10, y);
    y += 10;
    doc.text("|               GAMING SHOP                |", 10, y);
    y += 10;
    doc.text("|             TICKET DE COMPRA             |", 10, y);
    y += 10;
    doc.text("+------------------------------------------+", 10, y);

    y += 10;
    doc.text("| Artículo                       Importe   |", 10, y);

    y += 5;
    doc.text("|------------------------------------------|", 10, y);

    y += 10;


    // ===== LISTA DE PRODUCTOS =====
    carrito.forEach(producto => {
        idProductos.push(producto.id);

        // Limitar nombre para no romper el ticket
        const nombre = producto.nombre.length > 22
            ? producto.nombre.substring(0, 22) + "..."
            : producto.nombre.padEnd(22, " ");

        const precio = (producto.precio * producto.cantidad)
            .toFixed(2)
            .padStart(10, " ");

        doc.text(` ${nombre} ${precio} `, 10, y);
        y += 10;
    });

    y += 5;
    doc.text("|------------------------------------------|", 10, y);

    y += 10;


    // ===== TOTAL =====
    doc.text(` TOTAL: $${precioTotal} `, 10, y);

    y += 10;
    doc.text("+------------------------------------------+", 10, y);

    y += 10;
    doc.text("|          ¡GRACIAS POR SU COMPRA!         |", 10, y);

    y += 10;
    doc.text("+------------------------------------------+", 10, y);

    y += 10;

    /* Ticket text of jspdf*/

    // Imprimimos el ticket de venta
    doc.save("ticket.pdf");

    
    alert("Compra realizada con exito, redirigiendo a la pantalla de inicio");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("carrito"); 
    window.location.href = "index.html"
}

async function registrarVenta(precioTotal, idProductos) {
    let nombreUsuario = sessionStorage.getItem("userName");

    const data = {
        user_name: nombreUsuario,
        total_price: precioTotal,
        products: idProductos
    }

    const response = await fetch("http://localhost:3000/api/sales", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });


    const result = await response.json();


    if(response.ok) {
        console.log(response);
        alert(result.message);
    } else {
        alert(result.message);
    }

}

function iniciarBoton(){
    const boton_imprimir = document.getElementById("boton_imprimir");
    boton_imprimir.addEventListener("click", imprimirTicket);
}   

function init(){
    if(sessionStorage.getItem("compraActiva") === "1"){
        const carrito = sessionStorage.getItem("carrito");
        const carritoParsed = JSON.parse(carrito);
        const precioTotal = carritoParsed.reduce((total, producto) => 
            total + (Number(producto.precio) * Number(producto.cantidad)), 0
        , 0);
        const idProductos = carritoParsed.map(producto => producto.id);

        registrarVenta(precioTotal, idProductos);
        renderizarTabla(precioTotal);
        iniciarBoton();    
        sessionStorage.setItem("compraActiva", "0");
    }
}

init()



