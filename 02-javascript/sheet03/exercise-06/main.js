const herramientas = ["MongoDB", "MySQL", "Angular", "React", "Node.js"];

for (let i = 0; i < herramientas.length; i++) { 
console.log(herramientas[i]); 
} 

console.log("------------");
for (const herramienta of herramientas) { 
console.log(herramienta); 
} 
/*prefiero el for...of, ya que se trabaja con el contenido y no con el índice como el for y asi cometo menos errores. */