let a = 3, b = 2;
let z = a + b;

//Pre incremento (++ va antes de la variable)
z = ++a;//Incrementa a 4 y luego asigna a z ese valor
console.log(z);
console.log(a);
//Post incremento (Despué de la variable ponemos: ++)
z = b++;//Asigna el valor a z y después de eso, b se incrementa a 3
console.log(z);
console.log(b);

z = (a++) + (a++);//Aquí primero asigna el valor de a, luego la incrementa. Despupes para la segunda a, su valor es de a + 1, por lo que tenemos 4 + 5
console.log(z);
console.log(a);

//Lo mismo con los decrementos
z = --a;
console.log(z);
console.log(a);
//Post decremento
z = b--;
console.log(z);
console.log(b);

z = (--a) + (--a);
/*De valer 5, pasa a 4. Luego le sumamos 4-1 y tenemos: 4 + 3 = 7
*/
console.log(z);
console.log(a);