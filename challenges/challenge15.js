/*
 * Reto #16
 * EN MAYÚSCULA
 * Fecha publicación enunciado: 18/04/22
 * Fecha publicación resolución: 25/04/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba un String de cualquier tipo y se encargue de
 * poner en mayúscula la primera letra de cada palabra.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function toCapitalLetters (string) {
    const regEx = /[^a-z0-9]/gi;
    const capital = string.split(' ');
    
    for (let i = 0; i < capital.length; i++) {
        if (i == 0 && regEx.test(string[0])) {
            capital[i] = capital[i].slice(0,1) + capital[i].charAt(1).toUpperCase() + capital[i].slice(2);
        }else {
            capital[i] = capital[i].charAt(0).toUpperCase() + capital[i].slice(1);
        }   
        
    }

    return capital.join(' ');
}

function main () {
    console.log(toCapitalLetters('¿hola qué tal estás?'));
    console.log(toCapitalLetters('¿hola      qué tal estás?'));
    console.log(toCapitalLetters('El niño ñoño'));
}
main();