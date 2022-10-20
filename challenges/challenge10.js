/*
 * Reto #11
 * ELIMINANDO CARACTERES
 * Fecha publicación enunciado: 14/03/22
 * Fecha publicación resolución: 21/03/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Crea una función que reciba dos cadenas como parámetro (str1, str2) e imprima otras dos cadenas como salida (out1, out2).
 * - out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.
 * - out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */
function deleteCharacters (str1, str2) {
    characters = {
        out1: [],
        out2: [],
        string1: '',
        string2: '',
        maxCharacters: (str1 > str2)? str1 : str2,
        minCharacters: (str1 < str2)? str1 :  str2,
    }
    str1 = str1.toLowerCase();
    str2 = str2.toLowerCase();
    for (let index = 0; index < characters.minCharacters.length; index++) {
        if (!str1.includes(str2[index])) {
            characters.out1.push(str2[index]);
        }
    }
    for (let index = 0; index < characters.maxCharacters.length; index++) {
        if (!str2.includes(str1[index])) {
            characters.out2.push(str1[index]);
        }
    }
    console.log(characters.out1);
    console.log(characters.out2);
}


const main = () => {
    //console.log(deleteCharacters('Me gusta python','Me gusta JS'));
    deleteCharacters('Me gusta Python','Me gusta JS');
    deleteCharacters('Miguel','Angel');
    deleteCharacters('out1 contendrá todos los caracteres presentes en la str1 pero NO estén presentes en str2.','out2 contendrá todos los caracteres presentes en la str2 pero NO estén presentes en str1.');
}

main();