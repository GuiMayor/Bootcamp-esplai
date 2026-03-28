const edad = 10;
const tieneEntrada = true;
const estaEnLista = false;
const conAdulto = true;

if (edad >= 18 && (tieneEntrada || estaEnLista)) {
    console.log("Acceso permitido");

} else if ( edad < 18 && conAdulto && (tieneEntrada || estaEnLista) ) {
    console.log("Acceso con condición");

} else {
    console.log("Acceso denegado");
}


/*const edad = 10;
const tieneEntrada = false;
const estaEnLista = true;
const conAdulto = true;

if (edad >= 18 && (tieneEntrada || estaEnLista)) {
    console.log("Acceso permitido");

} else if ( edad < 18 && conAdulto ) {
    console.log("Acceso con condición");

} else {
    console.log("Acceso denegado");
}*/