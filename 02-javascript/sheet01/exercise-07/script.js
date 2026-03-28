const producto = "televisor";
const cantidadDisponible = 0;

if (cantidadDisponible === 0){
    console.log(`El  ${producto}  está agotado.`);
    }
    else if (cantidadDisponible >= 1 && cantidadDisponible <= 5) {
        console.log(`El  ${producto} tiene pocas unidades disponibles.`);
    } else {
        console.log(`El ${producto} está disponible.`);
    }