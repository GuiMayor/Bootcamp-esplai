const precioBase = 100;
const cupon      = true;
const premium    = false;
let descuento    = 0;

if (cupon === true) {
    descuento = 10;
} else if (premium === true) {
    descuento = 5;
}

const precioFinal = precioBase - descuento;

if (cupon === true) {
    console.log(`Por su cupón tiene un descuento de: ${descuento} €. Total: ${precioFinal} €`);
} else if (premium === true) {
    console.log(`Por ser cliente premium tiene un descuento de: ${descuento} €. Total: ${precioFinal} €`);
} else {
    console.log(`Sin descuento. Total a pagar: ${precioFinal} €`);
}


/*const precioBase = 100;
const cupon      = true;  
const premium    = false;
let descuento    = 0;

const precioFinal = precioBase - descuento; 


if (cupon === true) {
    descuento = 10;
    console.log(`por su cupón tiene un descuento de: ${descuento} €. Total: ${precioFinal} €`);
} else if (premium === true) {
    descuento = 5;
    console.log(`por ser cliente premium tiene un descuento de: ${descuento} €. Total: ${precioFinal} €`);
} else {
    console.log(`Total a pagar: ${precioFinal} €`);
}
*/

