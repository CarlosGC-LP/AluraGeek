import { conexionAPI } from "./conexionAPI.js";

const card = document.querySelector("[data-card]");

function crearCard(nombre, precio, imagen) {
    const producto = document.createElement("div");

    producto.className = "card__contenido";
    producto.innerHTML = `
        <img class="card__imagen" src="${imagen}" alt="Imagen producto">
        <p class="card__nombre">${nombre}r</p>
        <p class="card__precio">S/${precio}</p>
        <button class="card__boton">
            <img src="image/iconTacho.png" alt="icono tacho">
        </button>  
    `;

    return producto;
}

async function listarCard() {
    const listaAPI = await conexionAPI.listaProductos();

    listaAPI.forEach(producto => card.appendChild(crearCard(producto.nombre, producto.precio, producto.imagen)));
}

listarCard();