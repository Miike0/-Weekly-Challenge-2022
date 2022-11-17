/*
 * Reto #30
 * MARCO DE PALABRAS
 * Fecha publicación enunciado: 26/07/22
 * Fecha publicación resolución: 01/08/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba un texto y muestre cada palabra en una línea, formando
 * un marco rectangular de asteriscos.
 * - ¿Qué te parece el reto? Se vería así:
 *   **********
 *   * ¿Qué   *
 *   * te     *
 *   * parece *
 *   * el     *
 *   * reto?  *
 *   **********
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function wordFrame (text) {
    const arrayText = text.split(' ');
    let biggerWord = '', wordWithFrame = '';
    let length = 0;

    arrayText.forEach(word => {
        if (word.length > biggerWord.length) {
            biggerWord = word;
        }
    });
    


    arrayText.forEach((word,index) => {
        length = (biggerWord.length - word.length) + 1;
        wordWithFrame = '*' + word;
        for (let i = 0; i < length; i++) {
            wordWithFrame += ' ';
        }
        wordWithFrame += '*';
        arrayText[index] = wordWithFrame;
    });

    wordWithFrame = '';
    for (let i = 0; i < biggerWord.length + 3;i++) {
        wordWithFrame += '*';
    } 
    arrayText.unshift(wordWithFrame);
    arrayText.push(wordWithFrame);

    arrayText.forEach(word => {
        console.log(word);
    });
}

function main () {
    wordFrame('¿Qué te parece el reto?');
    wordFrame('Hola');
    wordFrame('¿Cuántos retos de código de la comunidad has resuelto?');
}
main();