var nombre = "Paris";
var apellido = "Ramírez";
var nombreCompleto = nombre + " " + apellido;
console.log(nombreCompleto);

var x = 219 + nombre;//Ya que uno es cadena, x será cadena también
console.log(x);
console.log(typeof x);

//Probando la suma y posteriormente la concatenación
x = nombre + 3 + 9 + 6;
console.log(x);
console.log(typeof x);

x = nombre + (3 * 9 + 6);
console.log(x);
console.log(typeof x);
//Ahora, si primero tenemos numéricos antes que una cadena, los va a sumar sin necesidad del paréntesis. Se le conoce como "contexto string"
x = 6 + 3 * 9 + nombre;//Sin embargo, respetará la jerarquía de operaciones aunque la primera sea suma y luego el producto
console.log(x);
console.log(typeof x);