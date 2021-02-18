let a = 3, b = 2, c = "3";
let z = a == b;//Pueden ponerse paréntesis u omitirse
console.log(z);

z = a == c;//Revisa solo si los valores son iguales
console.log(z);

z = a === c;//Se revisa el valor tomando en cuenta el tipo (estricto)
console.log(z);