const edad = 16;
let autorizacion; // vacia xq depende de la edad

if (edad >= 18) {
    autorizacion = true;
    console.log(`Tienes ${edad} años. Eres mayor de edad. Acceso ${autorizacion}.`);
} else {
    autorizacion = false;
    console.log(`Tienes ${edad} años. Eres menor de edad. Acceso ${autorizacion}.`);
}
