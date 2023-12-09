alert ("Bienvenido a Mantra Cuadros");

let nombre = prompt ("Ingrese su Nombre") .toLocaleLowerCase ();
if(nombre !="") {
    alert (`Bienvenido ${nombre}`);
}else{
    alert ("Debes ingresar tu nombre")
}

let apellido = prompt ("Ingrese su apellido");
if (apellido !=""){
    alert (`Hola ${nombre} ${apellido}`);
}

let cuadro1 = "cuadro1";
let cuadro2 = "cuadro2";
let cuadro3 = "cuadro3";

let seleccion = prompt("Los cuadros que se encuentran disponibles son los siguientes. Ingrese el numero por cual desea consultar: \n 1) Cuadro Tortuga \n 2) Cuadro Antu \n 3) Cuadro Luna");

const valor = (seleccion) => {
    switch (seleccion) {
        case "1":
            return 10000;
            
        case "2":
            return 11500;
            
        case "3":
            return 13500;
            
        default:
            return "Debe ingresar una opcion";
    }
};

let costo = valor(seleccion);

const producto = (seleccion) => {
    switch (seleccion) {
        case "1":
            return "Cuadro Tortuga";
            
        case "2":
            return "Cuadro Antu";
            
        case "3":
            return "Cuadro Luna";
            
        default:
            return "Debe ingresar una opción";
    }
};

let consulta = producto(seleccion);

let tresCuotas = costo + (costo * 0.3);
let seisCuotas = costo + (costo * 0.6);
let doceCuotas = costo + (costo * 0.9);

alert(`Ha seleccionado ${consulta}, el costo del producto en contado efectivo o débito es de $ ${costo}. Si realiza la compra con tarjeta de crédito las opciones son: \n \n 3 cuotas: ${tresCuotas} \n \n 6 cuotas: ${seisCuotas} \n \n 12 cuotas: ${doceCuotas}`);
alert ("Gracias por comprar en Mantra Cuadros. ¡Les deseamos Felices Fiestas!");





