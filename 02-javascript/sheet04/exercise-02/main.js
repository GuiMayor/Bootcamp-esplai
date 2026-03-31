const herramientas = ["MongoDB", "MySQL", "Angular", "React", "Node.js"];
 
herramientas.forEach((herramienta, id) => { 
console.log(`Posicion ${id}: ${herramienta}`); 
}); 



/*recórrelo con forEach() ; 
muestra cada elemento por consola con un mensaje descriptivo; añade también el índice en la salida. 
Ejemplo orientativo 
Posición 0: JavaScript 
Posición 1: HTML 
Qué trabajas 
forEach() ; 
recorrido con índice; 
salida legible.
*/


/*for (let i = 0; i < herramientas.length; i++) { 
console.log(herramientas[i]); 
} 

console.log("------------");
for (const herramienta of herramientas) { 
console.log(herramienta); 
}*/