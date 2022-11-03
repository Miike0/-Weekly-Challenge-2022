/*
 * Reto #18
 * TRES EN RAYA
 * Fecha publicación enunciado: 02/05/22
 * Fecha publicación resolución: 09/05/22
 * Dificultad: DIFÍCIL
 *
 * Enunciado: Crea una función que analice una matriz 3x3 compuesta por "X" y "O" y retorne lo siguiente:
 * - "X" si han ganado las "X"
 * - "O" si han ganado los "O"
 * - "Empate" si ha habido un empate
 * - "Nulo" si la proporción de "X", de "O", o de la matriz no es correcta. O si han ganado los 2.
 * Nota: La matriz puede no estar totalmente cubierta. Se podría representar con un vacío "", por ejemplo.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
*/

// let arrayMuchasDimensiones = [1, ["hola", "que", "tal", ["estas", "estamos", "estoy"], ["bien", "mal"], "acabo"], 2, 5];
// console.log(arrayMuchasDimensiones[1][3][1])
// let test = [1,[2,[3]]];
// console.log(test[1][1][0])

function tictactoe (movements) {
    let tictactoeValues = {
        countMovementsX: 0,
        countMovements0: 0,
        countMovements: 0,
        validationCountMovementsX: 0,
        validationCountMovements0: 0,
        possibleResults: {
            xWon: 'X won',
            cWon: '0 won',
            draw: 'Draw',
            null: null,
        },
    };
    movements.forEach((element) => {
        element.forEach((element2) => {
            tictactoeValues.countMovements++;
            if (element2 == 'x') {
                tictactoeValues.validationCountMovementsX++;
            }else if (element2 == '0') {
                tictactoeValues.validationCountMovements0++;
            }
        });
   });
    if (tictactoeValues.countMovements > 9 || tictactoeValues.countMovements < 9) {
        return tictactoeValues.possibleResults.null;
    } else {
        if (tictactoeValues.validationCountMovementsX > 5 || tictactoeValues.validationCountMovements0 > 5) {
            return tictactoeValues.possibleResults.null;
        } else {
            //cases
            for (let i = 0; i < 3; i++) {
                tictactoeValues.countMovementsX = 0;
                tictactoeValues.countMovements0 = 0;
                for (let j = 0; j < 3; j++) {
                    if (movements[i][j] == 'x') {
                        tictactoeValues.countMovementsX++;
                    }
                    if (movements[i][j] == '0') {
                        tictactoeValues.countMovements0++;
                    }
                    if (j == 2 && tictactoeValues.countMovementsX == 3) {
                        return tictactoeValues.possibleResults.xWon;
                    } else if (j == 2 && tictactoeValues.countMovements0 == 3) {
                        return tictactoeValues.possibleResults.cWon;
                    }
                }
            }
            for (let i = 0; i < 3; i++) {
                tictactoeValues.countMovementsX = 0;
                tictactoeValues.countMovements0 = 0;
                for (let j = 0; j < 3; j++) {
                    if (movements[j][i] == 'x') {
                        tictactoeValues.countMovementsX++;
                    }
                    if (movements[j][i] == '0') {
                        tictactoeValues.countMovements0++;
                    }
                    if (j == 2 && tictactoeValues.countMovementsX == 3) {
                        return tictactoeValues.possibleResults.xWon;
                    } else if (j == 2 && tictactoeValues.countMovements0 == 3) {
                        return tictactoeValues.possibleResults.cWon;
                    }
                }
            }
            if (movements[0][0] == 'x' && movements[1][1] == 'x' && movements[2][2] == 'x') {
                return tictactoeValues.possibleResults.xWon;
            } else if (movements[0][2] == 'x' && movements[1][1] == 'x' && movements[2][0] == 'x') {
                return tictactoeValues.possibleResults.xWon;
            }
            if (movements[0][0] == '0' && movements[1][1] == '0' && movements[2][2] == '0') {
                return tictactoeValues.possibleResults.xWon;
            } else if (movements[0][2] == '0' && movements[1][1] == '0' && movements[2][0] == '0') {
                return tictactoeValues.possibleResults.xWon;
            }
        }
    }

    return tictactoeValues.possibleResults.draw;

}

function main () {
    console.log(tictactoe([['x','x','x'],['x','0','0'],['0','x','0']]));//x won
    console.log(tictactoe([['x','0','x'],['x','0','0'],['x','0','x']]));//x won
    console.log(tictactoe([['x','0','x'],['0','x','0'],['x','0','x']]));//x won
    console.log(tictactoe([['x','0','x'],['0','x',' '],['x',' ','x']]));//x won
    
    console.log(tictactoe([['0','0','0'],['x','0','x'],['0','x','x']]));// 0 won
    console.log(tictactoe([['x','0','x'],['0','0','0'],['x','0','x']]));// 0 won
    console.log(tictactoe([['x','0','0'],['0','0','x'],['x','0','x']]));// 0 won
    console.log(tictactoe([['x','0',' '],['0','0',' '],['x','0',' ']]));// 0 won

    console.log(tictactoe([['x','0','x'],['0','0',' '],['x',' ','0']]));//Draw

    console.log(tictactoe([['x','0','x'],['0','0',' '],['x',' ','0',' ']]));// null
    console.log(tictactoe([['x','x','x'],['x','x',' '],['x',' ','x']]));//null
}
main();