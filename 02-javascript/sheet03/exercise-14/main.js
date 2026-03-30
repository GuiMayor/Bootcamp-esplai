//=========Parte a =========
const numeros=[20, 33, 64, 85, 96];
const [primero, segundo, ...resto] = numeros;
console.log(primero,segundo);
//console.log(segundo);
console.log(resto);
console.log("-----------------")


//----------parte B ------
const objeto = { a: 1, b: 2, c: 3, d: 4 };
const { a, b, ...resObjetivo } = objeto;
console.log(a, b);
console.log(resObjetivo);