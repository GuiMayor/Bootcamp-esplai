const usuario = { 
nombre: "Sofía",
edad: 30, 
direccion: { 
calle: "Gran Vía", 
ciudad: "Madrid", 
codigoPostal: "28013" 
}, 
intereses: ["música", "cine", "viajes"] 
}; 
console.log(usuario);
console.log("------------------------");

console.log(usuario.direccion.ciudad);
console.log(usuario.intereses[0]);
usuario.direccion.codigoPostal = "28014";
usuario.intereses.push("deportes");
console.log(usuario);
console.log("------------------------");

/*
muestra la ciudad;
muestra el primer interés;
cambia el código postal;
añade un nuevo interés al array.*/
