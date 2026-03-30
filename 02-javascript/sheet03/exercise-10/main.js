const colores = ["rojo", "verde", "azul", "amarillo"];

const [rojo, verde] = colores;
console.log(rojo); 
console.log(verde); 
console.log("------------------------ ")
const [primero,,,ultimo] = colores;
console.log(primero);
console.log(ultimo);
console.log("------------------------ ")
const [,,,,,quinto="sin color"] = colores;
console.log(quinto);
console.log("------------------------ ")

const [uno, dos, tres, cuatro, cinco="sin color"] = colores;
console.log(cinco);
/*extrae el primer y el segundo color mediante desestructuración; 
extrae el primero y el último usando posiciones ignoradas
cuando sea necesario; asigna un valor por defecto a una variable por si falta algún elemento. */