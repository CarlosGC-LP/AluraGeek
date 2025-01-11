import { conexionAPI } from "./conexionAPI.js";

const formulario = document.querySelector("[data-formulario]");
const botonLimpiar = document.querySelector(".boton__limpiar");

async function crearProducto(evento) {
    evento.preventDefault();

    const nombre = document.querySelector("[data-nombre]").value;
    const precio = document.querySelector("[data-precio]").value;
    const imagen = document.querySelector("[data-imagen]").value;

    await conexionAPI.enviarCard(nombre, precio, imagen);   
}

function limpiarFormulario() {
    formulario.reset(); // Limpia todos los campos del formulario
}

formulario.addEventListener("submit", evento => crearProducto(evento));
botonLimpiar.addEventListener("click", limpiarFormulario);