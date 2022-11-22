/*
 * Reto #32
 * EL SEGUNDO
 * Fecha publicación enunciado: 08/08/22
 * Fecha publicación resolución: 15/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un listado de números, encuentra el SEGUNDO más grande.
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en https://retosdeprogramacion.com/semanales2022.
 *
 */

function secondBig(numbersList) {
    let aux = 0;
    for (let i = 0; i < numbersList.length; i++) {
        for (j =0 ; j < numbersList.length; j++) {
            if (numbersList[i] > numbersList[j] ) {
                aux = numbersList[j];
                numbersList[j] = numbersList[i];
                numbersList[i] = aux; 
            }
        }
    }
    if (numbersList[1] === undefined) {
        return `The numbers list is empty`;
    }
    return `The second big number is ${numbersList[1]}`;
}

function main () {
    console.log(secondBig([4, 6, 1, 8, 2]));
    console.log(secondBig([4, 6, 8, 8, 6]));
    console.log(secondBig([4, 4]));
    console.log(secondBig([]));
}
main();