/*
Tipos de dato
    en JS
   Ejemplos
*/

//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

//Reciclando la variable nombre
nombre = 10.5;
console.log(typeof nombre);//Cambia el tipo al reasignar de String a number

//Tipo de dato numérico
var numero = 1000
console.log(numero);
console.log(typeof nombre);

//Tipo de dato Object
var objeto = {
    nombre:"Juan",
    apellido: "Pérez",
    teléfono: "5529837842"
}
console.log(objeto);
console.log(typeof objeto);

//Tipo de dato boolean (true,false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

var simbolo = Symbol("Mi símbolo");//Para crear un valor único de una variable
console.log(simbolo);
console.log(typeof simbolo);

//Tipo clase es una función
class Persona{
    constructor(nombre,apellido){
        this.nombre = nombre;
        this.apellido = apellido;
    }
}
console.log(typeof Persona);
console.log(Persona);

//Tipo undefined
var x;
//x = undefined; //Puede asignarse también con esta instrucción comentada
console.log(x);
console.log(typeof x);

//Null no es un tipo de dato (es un object) y null significa ausencia de valor
var y = null;
console.log(y);
console.log(typeof y);

//Tipo de dato: arreglo
var autox = ['BMW','Audi','Volvo'];
console.log(autox);
console.log(typeof autox);

//Tipo: Empty String
var z = "";
console.log(z);
console.log(typeof z);