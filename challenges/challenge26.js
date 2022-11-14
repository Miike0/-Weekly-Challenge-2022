/*
 * Reto #27
 * VECTORES ORTOGONALES
 * Fecha publicación enunciado: 07/07/22
 * Fecha publicación resolución: 11/07/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea un programa que determine si dos vectores son ortogonales.
 * - Los dos array deben tener la misma longitud.
 * - Cada vector se podría representar como un array. Ejemplo: [1, -2]
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function isOrthogonalVector (vector1, vector2) {
    let index = 0;
    let result = 0;

    if (vector1.length === vector2.length) {
        do {
            result += vector1[index] * vector2[index];
            index++;
        }while (index < vector1.length)

        return (result === 0) ? "It's a orthogonal vector" : "It's not a orthogonal vector";

    }else {
        return 'The vectors have different lengths';
    }
}

function main () {
    console.log(isOrthogonalVector([1,2],[2,1])); //false
    console.log(isOrthogonalVector([2,1],[-1,2])); //true
    console.log(isOrthogonalVector([2,3],[-1,0])); //false
}
main();