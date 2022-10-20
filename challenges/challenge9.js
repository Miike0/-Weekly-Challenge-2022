/*
 * Reto #10
 * EXPRESIONES EQUILIBRADAS
 * Fecha publicación enunciado: 07/03/22
 * Fecha publicación resolución: 14/03/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que comprueba si los paréntesis, llaves y corchetes de una expresión están equilibrados.
 * - Equilibrado significa que estos delimitadores se abren y cieran en orden y de forma correcta.
 * - Paréntesis, llaves y corchetes son igual de prioritarios. No hay uno más importante que otro.
 * - Expresión balanceada: { [ a * ( c + d ) ] - 5 }
 * - Expresión no balanceada: { a * ( c + d ) ] - 5 }
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function isBalanced(string) {
    const expressions  = {
        totalBalancedExpressiones: 3,
        symbols: ['(',')','[',']','{','}'],
        symbolsCounter: [0,0,0,0,0,0],
        isBalanced: [],
    };


    for (let index = 0; index < string.length; index ++) {

        for (let symbolsIndex = 0; symbolsIndex < expressions.symbols.length; symbolsIndex++) {
            if (string[index] === expressions.symbols[symbolsIndex]) {
                expressions.symbolsCounter[symbolsIndex] += 1;
            }
        }
    }
    for (let counterIndex = 0; counterIndex <= (expressions.totalBalancedExpressiones + 1); counterIndex+=2) {

        if (expressions.symbolsCounter[counterIndex] == expressions.symbolsCounter[counterIndex + 1]){
            expressions.isBalanced.push(true);
        }else{
            expressions.isBalanced.push(false);

        }

    }
   if (expressions.isBalanced.includes(false)){
    return `${string} : Unbalanced expression`;
   }
   return `${string} : Balanced expression`;
}


const main = () => {
    console.log(isBalanced('{ [ a * ( c + d ) ] - 5 }'));//Balanced
    console.log(isBalanced('{{{((()))}}}'));//Balanced
    console.log(isBalanced('{ a * ( c + d ) ] - 5 }'));//Unbalanced
    console.log(isBalanced('{a + b [c] * (2x2)}}}}'));//Unbalanced
    console.log(isBalanced('{{{{{{(}}}}}}'));//Unbalanced

};

main();