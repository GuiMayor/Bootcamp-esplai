const alumno={nombre:"Juan", edad:25, grupo:"A",activo:true};
console.log(alumno);

console.log("------------------------ ");

const {nombre, grupo} = alumno;
console.log(nombre);
console.log(grupo);
console.log("------------------------ ");

const{nombre:nombreAlumno} = alumno;
console.log(nombreAlumno);
console.log("------------------------ ");

const{nota=10} = alumno;
console.log(nota);


//------NOTA----------
/*
array  → posición   → comas vacías para saltar
objeto → nombre     → escribes la propiedad directamente*/