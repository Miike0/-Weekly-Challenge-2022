/*
 * Reto #21
 * CALCULADORA .TXT
 * Fecha publicación enunciado: 23/05/22
 * Fecha publicación resolución: 01/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Lee el fichero "Challenge21.txt" incluido en el proyecto, calcula su resultado e imprímelo.
 * - El .txt se corresponde con las entradas de una calculadora.
 * - Cada línea tendrá un número o una operación representada por un símbolo (alternando ambos).
 * - Soporta números enteros y decimales.
 * - Soporta las operaciones operationa "+", resta "-", multiplicación "*" y división "/".
 * - El resultado se muestra al finalizar la lectura de la última línea (si el .txt es correcto).
 * - Si el formato del .txt no es correcto, se indicará que no se han podido resolver las operaciones.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
function fileToArray (file) {
    let fs = require('fs');
    let content = fs.readFileSync(file, 'utf-8');
    let contentArray = content.split('\n');
    return contentArray;
}

function calculator (file) {
    const isThereAnOperator = /[^*-/+]/gi;
    const arr = fileToArray(file);
    let operation = 0;
    for (let element = 0; element < arr.length; element++) {
        switch(arr[element]) {
            case '+':
                operation = parseFloat(arr[element-1]) + parseFloat(arr[element+1]);
                arr[element+1] = operation.toString();
                break;
            case '-':
                operation = parseFloat(arr[element-1]) - parseFloat(arr[element+1]);
                arr[element+1] = operation.toString();
                break;
            case '*':
                operation = parseFloat(arr[element-1]) * parseFloat(arr[element+1]);
                arr[element+1] = operation.toString();
                break;
            case '/':
                operation = parseFloat(arr[element-1]) / parseFloat(arr[element+1]);
                arr[element+1] = operation.toString();
                break;
            default:
        }
        if (Number.isNaN(operation)) {
            return 'Operations can not be resolved';
        }
        if (element == arr.length) {
            operation = parseFloat(arr[element]);
        }

    }
    return operation;;
}


function main () {
    console.log(calculator('./challenge20.txt'));//18.5
}   
main();