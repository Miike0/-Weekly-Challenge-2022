/*
 * Reto #24
 * ITERATION MASTER
 * Fecha publicación enunciado: 13/06/22
 * Fecha publicación resolución: 20/06/22
 * Dificultad: FÁCIL
 *
 * Enunciado: Quiero contar del 1 al 100 de uno en uno (imprimiendo cada uno). ¿De cuántas maneras eres capaz de hacerlo? Crea el código para cada una de ellas.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function ways () {
    //1
    for (let i = 1; i <= 100; i++) {
        console.log(i);
    }

    //2
    let i = 1;
    while (i <= 100) {
        console.log(i);
        i++;
    }

    //3
    do {
        console.log(i);
        i++;
    }while (i <= 100)

    //4
    let array = [...Array(101).keys()];
    array.forEach (i => {
        if (i > 0) {
            console.log(i);
        }
    });

    //5
    let arr = Array.from({length: 100}, (_, i) => i + 1);
    console.log(arr);

    //6
    const oneTo100 = (num => {
        if (num <= 100) {
            console.log(num);
            num++;
            oneTo100(num);
        }else {
            return;
        }
    }); 

    oneTo100(1);
}


function main () {
    ways();
}
main();