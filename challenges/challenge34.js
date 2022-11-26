/*
 * Reto #38
 * BINARIO A DECIMAL
 * Fecha publicación enunciado: 19/09/22
 * Fecha publicación resolución: 27/09/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa se encargue de transformar un número binario a decimal sin utilizar
 * funciones propias del lenguaje que lo hagan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal"
 *   para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en
 *   https://retosdeprogramacion.com/semanales2022.
 *
 */

function binaryToDecimal (binary) {
    let decimal = 0;
    let invalidBinary = false;

    binary = binary.split('');

    binary.forEach(element => {
        if (element != '1' && element != '0') {
            invalidBinary = true;
            return;
        }
    });
    if (invalidBinary) {
        return `${binary.join('')} is not a correct binary`;
    }

    let arrbinary = binary.map(function (element, index) {
       return element = 2 ** index;
    });
    arrbinary = arrbinary.reverse();

    arrbinary.forEach((element, index) => {
        decimal += element * binary[index];
    });   
    
    return `${binary.join('')} is in decimal ${decimal}`;
}


function main () {
    console.log(binaryToDecimal('11010'));//26
    console.log(binaryToDecimal('00110'));//6
    console.log(binaryToDecimal('00000000'));//0
    console.log(binaryToDecimal('0001111'));//15
    console.log(binaryToDecimal('2'));//15
}
main();