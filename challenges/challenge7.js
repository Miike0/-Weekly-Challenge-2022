/*
 * Reto #7
 * CONTANDO PALABRAS
 * Fecha publicación enunciado: 14/02/22
 * Fecha publicación resolución: 21/02/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que cuente cuantas veces se repite cada palabra y que muestre el recuento final de todas ellas.
 * - Los signos de puntuación no forman parte de la palabra.
 * - Una palabra es la misma aunque aparezca en mayúsculas y minúsculas.
 * - No se pueden utilizar funciones propias del lenguaje que lo resuelvan automáticamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function wordCount (string) {
    const regEx = /[^a-z0-9]/gi;
    let stringLC = string.toLowerCase();

    stringLC = stringLC.replace(regEx,' ').split(' ');

    //After split, remove empty index
    let array = stringLC.filter(element => {
        return element != '';
    });

    //Find words duplicates into array
    let toFindDuplicates = array => array.filter((item, index) => 
        array.indexOf(item) == index
    );
    let noDuplicates = toFindDuplicates(array);

    let aux = [], countWords = [];
    for (let i = 0; i < array.length; i++) {
        let count = 0;
        aux[i] = array[i];
        for (let j = 0; j < array.length; j++ ) {
            if (aux[i] == array[j]) {
                count++;
                countWords[i] = count;
                
            }
        }
    }

    for (let i = 0; i < noDuplicates.length; i++) {
        console.log(`${noDuplicates[i]}: se repite ${countWords[i]} veces.`)
    }
}


function main () {
    wordCount('Hola, mi nombre es miguel, Mi nombre completo es Miguel Alvarez (Mike)');//hola mi nombre es miguel completo alvarez mike
    wordCount('PEPITO, PEPITO pepito pepito');
}

main();