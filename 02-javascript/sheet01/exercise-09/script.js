const nota = 0; 

if (nota < 0 || nota > 10) {
  console.log(`Nota inválida: ${nota}. Debe estar entre 0 y 10.`);

} else if (nota < 5) {
  console.log(` Nota: ${nota} Suspenso, debes estudiar más.`);

} else if (nota < 7) {
  console.log(`Nota: ${nota} Aprobado, puedes mejorar.`);

} else if (nota < 9) {
  console.log(`Nota: ${nota} Notable, sigue así.`);

} else {
    console.log(` Nota: ${nota} Sobresaliente, magnífico trabajo.`);

}