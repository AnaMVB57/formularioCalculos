//No se pueden nombrar variables igual que métodos, obviamente )?

function sumar() {

    //Tendencia al incializar variables, que sea let
    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;
    //Tomamos los elementos llamándolos por su id y extraemos sus valores.

    //Convertimos los datos para realizar la operación
    let suma = parseFloat(valor1) + parseFloat(valor2);

    document.form1.resultado.value = suma;
}


function restar() {

    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    let resta = parseFloat(valor1) - parseFloat(valor2);

    document.form1.resultado.value = resta;
}


function multiplicar() {

    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    let producto = parseFloat(valor1) * parseFloat(valor2);

    document.form1.resultado.value = producto;
}


function dividir() {

    let valor1 = document.getElementById("valor1").value;
    let valor2 = document.getElementById("valor2").value;

    let division = parseFloat(valor1) / parseFloat(valor2);

    document.form1.resultado.value = division;
}

function convertInt() {
    //Input que permita ingresar y convertir tipos de dato

    //Indica que si el usuario ingresa valores diferentes a los especificados, muestre un mensaje.
    if (!(/^[0-9]{7,10}$/.test(valor1)) || !(/^[0-9]{7,10}$/.test(valor2))) {
        document.getElementById("valor1").value = "";
        alert("Ingrese sólo números");
    }

}