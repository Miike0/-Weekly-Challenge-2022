/*
 * Reto #23
 * MÁXIMO COMÚN DIVISOR Y MÍNIMO COMÚN MÚLTIPLO
 * Fecha publicación enunciado: 07/06/22
 * Fecha publicación resolución: 13/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea dos funciones, una que calcule el máximo común divisor (gcd) y otra que calcule el mínimo común múltiplo (mcm) de dos números enteros.
 * - No se pueden utilizar operaciones del lenguaje que lo resuelvan directamente.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function GCD (num1, num2) {
    let gcd = {
        index: 1,
        divisorsNum1: [],
        divisorsNum2: [],
        ans: 0,
    }

     while(gcd.index <= num1 && gcd.index <= num2) {
        if (num1 % gcd.index == 0) {
            gcd.divisorsNum1.push(gcd.index);
        }
        if (num2 % gcd.index == 0) {
            gcd.divisorsNum2.push(gcd.index);
        }
        gcd.index++;
     }

     gcd.divisorsNum1.forEach(element => {
        gcd.divisorsNum2.forEach(element2 => {
            if (element === element2) {
                if (element > gcd.ans) {
                    gcd.ans = element;
                }
            }
        });
     });

     return gcd.ans;
}

function MCM (num1, num2) {
    let mcm = {
        index: 1,
        num1Multiples: [],
        num2Multiples: [],
        founded: false,
        ans: 0,
    }
    while (mcm.index > 0 && !mcm.founded) {
        mcm.num1Multiples.push(num1 * mcm.index);
        mcm.num2Multiples.push(num2 * mcm.index);

        mcm.num1Multiples.forEach (element => {
            mcm.num2Multiples.forEach (element2 => {
                if (element === element2) {
                    mcm.founded = true;
                    mcm.ans = element;
                }
            });
        });

        mcm.index++;
    }
    return mcm.ans;
}

function main () {
    console.log(GCD(15,20));
    console.log(GCD(6,9));
    console.log(GCD(16,21));
    console.log(GCD(24,18));

    console.log('');

    console.log(MCM(12,8));
    console.log(MCM(4,6));
    console.log(MCM(2,3));
    console.log(MCM(9,15));
}

main();