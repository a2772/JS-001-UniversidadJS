let a = 3, b = 2, c = "3", z;
z = a != c;//Revisa si el valor es diferente, sin tomar en cuenta el tipo
console.log(z);
z = a != b;//como son diferentes, asigna el valor de true a z
console.log(z);
z = a !== c;//Revisa si el valor es diferente, tomando en cuenta el tipo
console.log(z);