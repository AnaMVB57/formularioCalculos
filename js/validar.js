function validacion() {

    let cedula = document.getElementById("cedula").value;
    let nombre = document.getElementById("nombre").value;
    let direccion = document.getElementById("direccion").value;

    //Indica que si el usuario ingresa valores diferentes a los especificados, muestre un mensaje.
    if (!(/^[0-9]{7,10}$/.test(cedula))) {

        alert("Error en la Cédula\nIngrese sólo números");

        //Se le coloca un espacio para indicar que entre un nombre y apellido hay un espacio.
    } else if (!(/^[a-zA-ZáéíóúüÁÉÍÓÚñÑ ]{7,40}$/.test(nombre))) {

        alert("Nombre incorrecto\nIngrese sólo letras");

    } else if (!(/^[a-zA-Z0-9#\- ]{10,40}$/.test(direccion))) {
        alert("Dirección incorrecta\nIngrese números y letras");

    }

    else {
        alert("Validación correcta");
    }
}
