/*
Tipos de dato
    en JS
   Ejemplos
*/

//Tipo de dato string
var nombre = "Carlos";
console.log(nombre);

nombre = 10.5;
console.log(typeof nombre);

//Tipo de dato numérico
var numero = 1000
console.log(numero);

//Tipo de dato Object
var objeto = {
    nombre:"Juan",
    apellido: "Pérez",
    teléfono: "5529837842"
}
console.log(objeto);

//Tipo de dato boolean (true,false)
var bandera = true;
console.log(bandera);
console.log(typeof bandera);

//Tipo de dato function
function miFuncion(){}
console.log(miFuncion);
console.log(typeof miFuncion);

var simbolo = Symbol("Mi símbolo");//Para crear un valor único de una variable
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
//x = undefined; //Puede asignarse también
console.log(x);
console.log(typeof x);

//Null no es un tipo de dato (es un object)
var y = null;
console.log(y);
console.log(typeof y);