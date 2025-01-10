async function listaProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();

    //console.log(conexionConvertida);
    return conexionConvertida;
}

export const conexionAPI = {
    listaProductos
}

//listaProductos();