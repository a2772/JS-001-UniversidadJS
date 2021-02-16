let nombre;//Buenas prácticas
nombre = "Humid";
console.log(nombre);

const apellido = "Pérez";//Ya no se puede modificar

//Video 16 Buenas prácticas

let nombreCompleto = "Juan Pérez";//Notación de altas y bajas
console.log(nombreCompleto);
//console es un objeto de JS y log es un método
//nombre completo en console.log(); es un argumento.

let x,y;
x=10;
y=35;
let z = x + y;//Como ambos son numéricos, los suma
console.log(z);

 //Video 17
let NombreCompleto  = "Juan Pérez", nombrecompleto = "Humid Sánchez";
console.log(NombreCompleto);
console.log(nombrecompleto);
//JS es sensible a mayúsculas y minúsculas
//El nombre de una variable no puede comenzar con un número, solo se permite: Letras, $ y _
let nomCom;
let $1;
let _1;
//let 1nombre; //No está permitido por iniciar con número
//Tampoco se puede declarar una variable con nombre de keyword o palabra reservada