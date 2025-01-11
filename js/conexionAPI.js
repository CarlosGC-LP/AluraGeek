async function listaProductos() {
    const conexion = await fetch("http://localhost:3001/productos");
    const conexionConvertida = conexion.json();

    //console.log(conexionConvertida);
    return conexionConvertida;
}

async function enviarCard(nombre, precio, imagen) {
    const conexion = await fetch("http://localhost:3001/productos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify ({
            nombre: nombre,
            precio: precio,
            imagen: imagen
        })
    });

    const conexionConvertida = conexion.json();

    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
    });

    const respuesta = await conexion.json();
    
    return respuesta;
}

export const conexionAPI = {
    listaProductos, enviarCard, eliminarProducto
}

//listaProductos();