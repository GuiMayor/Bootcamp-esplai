const texto1 = "25";
const texto2 = "100.5";
const texto3 = "hola";
const booleano = true;


const prueba1 = Number(texto1); // número
const prueba2 = Number(texto2); // decimal
const prueba3 = Number(texto3); // no es numérico
const prueba4 = Number(booleano); // true 1 false 0


console.log(`Number('25')    = ${prueba1}`);
console.log(`Number('100.5') = ${prueba2}`);
console.log(`Number('hola')  = ${prueba3}`);
console.log(`Number(true)    = ${prueba4}`);

