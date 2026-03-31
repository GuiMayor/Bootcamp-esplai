const numeros=[10,20,30,40,50]; 
console.log(numeros)
console.log("--------------------")

const duplicados = numeros.map((numero) => numero * 2); 
console.log(duplicados); 
console.log("--------------------")
const cuadrado = numeros.map((numero)=>numero **2);
console.log(cuadrado);
// Tareas 
// genera un nuevo array con todos los números duplicados; 
// genera otro con todos los números elevados al cuadrado; 
// muestra el array original y los arrays transformados. 
// Requisitos 
// No modifiques el array original. 
// Haz cada transformación en una variable distinta. 
// Qué trabajas 
// map() ; 
// transformación uno a uno; 
// diferencia entre original y resultado. 
