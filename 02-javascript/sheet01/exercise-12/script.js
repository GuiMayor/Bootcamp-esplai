/* const a = 19; 
const b = true; 
const c = 50; 
const d = 10; 
if (a >= 18 && b) { 
console.log(c - d); 
} else { 
console.log(c); 
} 
*/

const edad         = 19;
const cupon  = true;   
const precio  = 50;     
const descuento  = 10;    

if (edad >= 18 && cupon) {
    console.log(`Precio con descuento: ${precio - descuento} €`);
} else {
    console.log(`Precio sin descuento: ${precio} €`);
}