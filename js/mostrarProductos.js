import { conexionAPI } from "./conexionAPI.js";

const card = document.querySelector("[data-card]");

function crearCard(id, nombre, precio, imagen) {
    const producto = document.createElement("div");

    producto.className = "card__contenido";
    producto.innerHTML = `
        <img class="card__imagen" src="${imagen}" alt="Imagen producto">
        <p class="card__nombre">${nombre}</p>
        <p class="card__precio">S/${precio}</p>
        <button class="card__boton" data-eliminar="${id}">
            <img src="image/iconTacho.png" alt="icono tacho">
        </button>  
    `;

    const botonEliminar = producto.querySelector("[data-eliminar]");
    botonEliminar.addEventListener("click", () => eliminarProducto(id, producto));

    return producto;
}

async function listarCard() {
    const listaAPI = await conexionAPI.listaProductos();

    listaAPI.forEach(producto => card.appendChild(crearCard(producto.id, producto.nombre, producto.precio, producto.imagen)));
}

async function eliminarProducto(id, producto) {
    const respuesta = await conexionAPI.eliminarProducto(id);
    
    if (respuesta) {
        producto.remove();
    } else {
        console.error("Hubo un error al eliminar el producto");
    }
}

listarCard();