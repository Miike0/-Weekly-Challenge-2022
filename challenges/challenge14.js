/*
 * Reto #15
 * ¿CUÁNTOS DÍAS?
 * Fecha publicación enunciado: 11/04/22
 * Fecha publicación resolución: 18/04/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que calcule y retorne cuántos días hay entre dos cadenas de texto que representen fechas.
 * - Una cadena de texto que representa una fecha tiene el formato "dd/MM/yyyy".
 * - La función recibirá dos String y retornará un Int.
 * - La diferencia en días será absoluta (no importa el orden de las fechas).
 * - Si una de las dos cadenas de texto no representa una fecha correcta se lanzará una excepción.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function daysBetween (date1, date2) {
    const regex = /([0-9]{2}[/][0-9]{2}[/][0-9]{4})/gi;
    const regex2 = /([0-9]{2}[/][0-9]{2}[/][0-9]{4})/gi;

    if (regex.test(date1) && regex2.test(date2)) {
        let d1 = date1.split('/');
        let d2 = date2.split('/');

        d1[0] = d1.splice(1, 1, d1[0])[0];
        d2[0] = d2.splice(1, 1, d2[0])[0];
        
        d1 = new Date(d1);
        d2 = new Date(d2);

        let differenceInTime = Math.abs(d1.getTime() - d2.getTime());
        let differenceInDays = differenceInTime / (1000 * 60 * 60 * 24);

        return differenceInDays;

    } else {
        throw 'Incorrect date format';
    }

}
function main () {
    console.log(daysBetween("18/05/2022", "29/05/2022"));
    console.log(daysBetween("john", "29/05/2022"));
    console.log(daysBetween("18/5/2022", "29/04/2022"));
    
}
main();