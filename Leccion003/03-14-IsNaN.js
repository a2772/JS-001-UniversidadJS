let miNumero = "18x";//no se puede convertir a número
let edad = Number(miNumero);
console.log(edad);

let isNotANum = isNaN(edad) ? true : false
if(isNotANum)
    console.log("No es un número");
else
    if(edad >= 18)
        console.log("Puede votar");
    else
        console.log("No puede votar");