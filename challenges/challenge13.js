/*
 * Reto #14
 * ¿ES UN NÚMERO DE ARMSTRONG?
 * Fecha publicación enunciado: 04/04/22
 * Fecha publicación resolución: 11/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Escribe una función que calcule si un número dado es un número de Amstrong (o también llamado narcisista).
 * Si no conoces qué es un número de Armstrong, debes buscar información al respecto.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function isArmstrongNumber (number) {
    if (number < 0) {
        return false;
    }
    let splitNumber = null;;
    let ans = 0;

    splitNumber = String(number).split('');

    splitNumber.forEach(num => {
        ans += num**splitNumber.length;
    });
    if (number === ans) {
        return true;
    }
    return false;
}

function main () {
    console.log(isArmstrongNumber(371));//true
    console.log(isArmstrongNumber(-371));//false
    console.log(isArmstrongNumber(372));//false
    console.log(isArmstrongNumber(0));//true
    console.log(isArmstrongNumber(8208));//true
}
main();