const producto={ nombre: "Monitor", precio: 300, stock: 50};
//console.log(producto);
console.log("-------------------");

const productoActualizado = { ...producto, precio: 250, tamaño: 72 };

console.log("Original :", producto);
console.log("Copia     :", productoActualizado);


/* aca cree dos copias esta malo para lo q pide el ejercicio
const nuevoPrecio={...producto, precio: 250};
console.log(nuevoPrecio); 
console.log("-------------------");
const productoActualizado={...nuevoPrecio, tamaño: 72};
console.log(productoActualizado);
*/