/*
 * Reto #8
 * DECIMAL A BINARIO
 * Fecha publicación enunciado: 18/02/22
 * Fecha publicación resolución: 02/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa se encargue de transformar un número decimal a binario sin utilizar funciones propias del lenguaje que lo hagan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

const decimalToBinary = numDec => {
    if (numDec == 0) {
        return numDec.toString();
    }
    let binary = [];
    while (numDec > 0) {
            binary.unshift(numDec % 2)//To add the result to the head of the array
            numDec >>= 1; //Basically is numDec / 2 but without reminder if it exists
    }
    return binary.join('');//To convert the array to string without ','
}


const main = () => {
    console.log(decimalToBinary(28));
    console.log(decimalToBinary(79));
    console.log(decimalToBinary(95));
    console.log(decimalToBinary(0));
    console.log(decimalToBinary(1));
}

main();