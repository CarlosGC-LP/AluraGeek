import { conexionAPI } from "./conexionAPI.js";

const card = document.querySelector("[data-card]");

function crearCard(nombre, precio, imagen) {
    const card = document.createElement("div");

    card.className = "card__contenido";
    card.innerHTML = `
        <img src="image/${imagen}.png" alt="Imagen producto">
        <p class="card__nombre">${nombre}r</p>
        <p class="card__precio">S/${precio}</p>
        <button class="card__boton">
            <img src="image/iconTacho.png" alt="icono tacho">
        </button>  
    `;

    return card;
}

async function listarCard() {
    const listaAPI = await conexionAPI.listaProductos();

    listaAPI.forEach(producto => lista.appendChild(crearCard(card.nombre, card.precio, card.imagen)));
}

listarCard();