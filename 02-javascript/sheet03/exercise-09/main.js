const cursos = [ 
{ titulo: "JavaScript", duracion: 40, nivel: "intermedio", activo: true}, 
{ titulo: "Practicar condicionales", duracion: 30, nivel: "básico", activo: false},
{ titulo: "Introducción a la programación", duracion: 50, nivel: "principiante", activo: true},
{ titulo: "Programación orientada a objetos", duracion: 45, nivel: "intermedio", activo: true},
]; 

for (let i = 0; i < cursos.length; i++) {
    console.log(cursos[i]);
}
console.log("----------------------------");

for (const curso of cursos) {
    console.log(`Curso: ${curso.titulo} | Duración: ${curso.duracion} horas | Nivel: ${curso.nivel} | Activo: ${curso.activo}`);
}
/*Modela una colección de cursos en un array de objetos. Cada curso debe incluir: 
titulo
duracion 
nivel 
activo 
Tareas 
recorre la colección y muestra un resumen de cada curso por consola; usa un mensaje claro, no solo console.log(curso) . 
Ejemplo orientativo de salida 
Curso: JavaScript | Duración: 40 horas | Nivel: intermedio | Activo: true Qué trabajas 
recorrido de arrays de objetos; 
salida legible; 
modelado coherente. 
*/