const nombreProducto = "Cuaderno"; // string → nombre del artículo
const precioUnitario = 4; // number → precio por unidad en €
const cantidad = 3; // number → unidades compradas
const costeEnvio = 4; // number → coste fijo de envío en €

const subtotal = (precioUnitario * cantidad); 
const total = subtotal + costeEnvio; 

const resultado = `Has comprado ${cantidad} unidades de "${nombreProducto}". Subtotal: ${subtotal} €. Envío: ${costeEnvio} €. Total: ${total} €.`;

console.log(resultado);
