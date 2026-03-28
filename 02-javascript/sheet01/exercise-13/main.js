const nombreCliente = "Edward";

const nombreProducto = "telefono";
const precioBase = 40; 
const cantidad = 5; 
const stockMaximo = 10; 


const tieneCupon = true;
const minimoEnvioGratis = 100;
const costeEnvio = 5;
const descuentoCupon = 15;


if (cantidad < 1) {
  console.log("Debes pedir al menos 1 unidad.");

} else if (cantidad > stockMaximo) {
  console.log(`No puedes pedir más de ${stockMaximo} unidades.`);

} else {

  
  const subtotal = precioBase * cantidad;

  const descuento = tieneCupon ? descuentoCupon : 0;//ternario

  
  const envio = subtotal >= minimoEnvioGratis ? 0 : costeEnvio;

  const totalFinal = subtotal - descuento + envio;

  
  console.log(`Resumen de compra — ${nombreCliente}`);
  console.log("═══════════════════════════════");
  console.log(`Producto : ${nombreProducto}`);
  console.log(`Cantidad : ${cantidad} uds.`);
  console.log(`Subtotal : ${subtotal} €`);
  console.log(`Descuento : -${descuento} € ${tieneCupon ? "(cupón aplicado)" : "(sin cupón)"}`);
  console.log(`Envío : ${envio === 0 ? "Gratuito" : envio + " €"}`);
  console.log("───────────────────────────────");
  console.log(`TOTAL : ${totalFinal} €`);
  console.log("═══════════════════════════════");
}