let a = 3, b = 2, c = 1, d = 4;

let z = a * b + c;//Potencia, raíz van primero de izq a derecha. Luego mult y div y al final suma y resta
console.log(z);
z = c + a * b;//Potencia, raíz van primero de izq a derecha. Luego mult y div y al final suma y resta
console.log(z);
z = c + a * b / d;//Multiplica, divide y al final suma
console.log(z);
z = (c + a) * b / d;//Se hace siempre lo del paréntesis más interno
console.log(z);