let hora = 0;
if(hora < 0 || hora >= 24 || hora%1 != 0){//Rango [0-24) porque 24 cerrado es la hora 0. Solo se aceptarán valores enteros
    console.log("La hora no es válida, debe ser entera y ser mayor o igual a 0 y menor que 24");
}else if(hora < 6){
    console.log("Durmiendo");
}else if(hora < 12){
    console.log("Buenos días");
}else if(hora < 18){
    console.log("Buenas tardes");
}else{
    console.log("Buenas noches");
}