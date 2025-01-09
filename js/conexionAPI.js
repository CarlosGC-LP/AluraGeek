async function listaProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = await conexion.json();

    //console.log(conexionConvertida);
    return conexionConvertida;
}

export const conexionAPI = {
    listaProductos
}

//listaProductos();