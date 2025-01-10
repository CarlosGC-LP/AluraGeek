const card = document.querySelector("[data-card]");

function crearCard() {
    const card = document.createElement("div");

    card.className = "card__contenido";
    card.innerHTML = `
        <img src="image/StarWars.png" alt="Imagen producto">
        <p class="card__nombre">Stormtrooper</p>
        <p class="card__precio">S/60.00</p>
        <button class="card__boton">
            <img src="image/iconTacho.png" alt="icono tacho">
        </button>  
    `;

    return card;
}

async function listarCard() {
    const listaAPI = await conexionAPI.listaProductos();
}