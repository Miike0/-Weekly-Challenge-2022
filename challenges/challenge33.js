/*
 * Reto #34
 * LOS NÚMEROS PERDIDOS
 * Fecha publicación enunciado: 22/08/22
 * Fecha publicación resolución: 29/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Dado un array de enteros ordenado y sin repetidos, crea una función que calcule
 * y retorne todos los que faltan entre el mayor y el menor.
 * - Lanza un error si el array de entrada no es correcto.
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */

function lostNumbers (intArray) {

    let lostNumbers = [];
    let isSorted = false;
    let isRepeated = false;

    for (let i = 0; i < intArray.length; i++) {
        for (let j = 0; j < intArray.length; j++) {
            if (j !== i) {
                if (intArray[i] > intArray[j] && intArray[i] < intArray[j] ) {
                    isSorted = true;
                }
                if (intArray[i] === intArray[j]) {
                    isRepeated = true;
                }
            }
        }
    }

    if (intArray[0] < intArray[intArray.length - 1]) {
        for (let i = (intArray[0] + 1); i < intArray[intArray.length - 1]; i++) {
            if (!intArray.includes(i)) {
                lostNumbers.push(i);
            }
        }
        
    } else {
        for (let i = intArray[intArray.length - 1]; i < intArray[0]; i++) {
            if (!intArray.includes(i)) {
                lostNumbers.push(i);
            }
        }
    }


    
    return (isSorted && isRepeated) ? 'The array is not sorted and there are repeated numbers' : 
            (isSorted) ? 'The array is not sorted' : 
            (isRepeated) ? 'There are repeated numbers in the array' : lostNumbers;
    

}

function main() {   
    console.log(lostNumbers([1,3,5]));
    console.log(lostNumbers([5,3,1]));
    console.log(lostNumbers([5,1]));
    console.log(lostNumbers([-5,1]));
    console.log(lostNumbers([10,7,7,1]));
}
main();