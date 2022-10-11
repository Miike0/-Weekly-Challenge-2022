/*
 * Reto #1
 * ¿ES UN ANAGRAMA?
 * Fecha publicación enunciado: 03/01/22
 * Fecha publicación resolución: 10/01/22
 * Dificultad: MEDIA
 *
 * Enunciado: Escribe una función que reciba dos palabras (String) y retorne verdadero o falso (Boolean) según sean o no anagramas.
 * Un Anagrama consiste en formar una palabra reordenando TODAS las letras de otra palabra inicial.
 * NO hace falta comprobar que ambas palabras existan.
 * Dos palabras exactamente iguales no son anagrama.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la acomunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function isAnagrama (word1, word2) {
    if ((word1 != '' || word2 != '') && (word1 != word2)) {
        let w1 = word1.split('').sort();
        let w2 = word2.split('').sort();
        
        let lenght_ = (w1.length > w2.length) ? w1 : w2;
        let ans;
        let accum = 0;
        for (let i = 0; i < lenght_.length; i++){
            
            if (w1[i] == w2[i]) {
                accum++;
            }
        }
        ans = (accum == lenght_.length) ? true : false;

        return ans;
    }else{
        return false;
    }

}

function main () {
    const test = [];
    test.push({
        word1: 'race',
        word2: 'care'
    });
    test.push({
        word1: 'part',
        word2: 'trap'
    });
    test.push({
        word1: 'heart',
        word2: 'earth'
    });
    test.push({
        word1: 'meat',
        word2: ''
    });
    test.push({
        word1: '',
        word2: ''
    });
    
    test.forEach(object => {{
        console.log(`${object.word1} ${object.word2} => ${isAnagrama(object.word1,object.word2)}`);
    }});
}
main();