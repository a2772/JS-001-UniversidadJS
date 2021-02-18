let miNumero = "10";
console.log(typeof miNumero);
let edad = Number(miNumero);
console.log(typeof edad);
if(edad >= 18)
    console.log("Puede votar");
else
    console.log("Muy jóven para votar");
console.log(edad >= 18 ? "Puede votar" : "Muy jóven para votar");//Con operador ternario