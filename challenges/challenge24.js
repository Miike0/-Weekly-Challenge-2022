/*
 * Reto #25
 * PIEDRA, PAPEL, TIJERA
 * Fecha publicación enunciado: 20/06/22
 * Fecha publicación resolución: 27/06/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un programa que calcule quien gana más partidas al piedra, papel, tijera.
 * - El resultado puede ser: "Player 1", "Player 2", "Tie" (empate)
 * - La función recibe un listado que contiene pares, representando cada jugada.
 * - El par puede contener combinaciones de "R" (piedra), "P" (papel) o "S" (tijera).
 * - Ejemplo. Entrada: [("R","S"), ("S","R"), ("P","S")]. Resultado: "Player 2".
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function rockPaperScissors (match) {
    let game = {
        countPlayer1: 0,
        countPlayer2: 0,
        assignValue: {
            3: 'r',
            2: 's',
            1: 'p',
        },
        valuesContainer: [[],[],[]],
        possiblesResults: {
            player1: 'Player 1',
            player2: 'Player 2',
            draw: 'Tie',
            error: 'Error',
        },
        error: false,
    }

    let keys = Object.keys(game.assignValue);
    let values = Object.values(game.assignValue);

    match.forEach((row,i) => {
        row.forEach((element,j) => {
            if (element === '') {
                game.error = true;
            }
            values.forEach((value,k) => {
                if (element.toLowerCase() === value) {
                    game.valuesContainer[i][j] = keys[k];
                }

            });

        });
    });
    
    for (let i = 0; i < game.valuesContainer.length; i++) {
        for(let j = 0; j < game.valuesContainer[i].length - 1; j++) {
            if(game.valuesContainer[i][j] === '1' && game.valuesContainer[i][j + 1] === '3') {
                game.countPlayer1++;
            } else if (game.valuesContainer[i][j] > game.valuesContainer[i][j + 1]) {
                game.countPlayer1++;
            } else if (game.valuesContainer[i][j] < game.valuesContainer[i][j + 1]){
                game.countPlayer2++;
            }
        }
    }
    

    return (game.error === true) ? 
    game.possiblesResults.error : (game.countPlayer1 > game.countPlayer2) ? 
    game.possiblesResults.player1 : (game.countPlayer2 > game.countPlayer1) ?
    game.possiblesResults.player2 : (game.countPlayer1 === game.countPlayer2) ? 
    game.possiblesResults.draw : '';


}


function main () {
    console.log(rockPaperScissors([['P','s'],['s','r'],['r','S']]));//player 2
    console.log(rockPaperScissors([['r','s'],['p','r'],['r','s']]));//player 1
    console.log(rockPaperScissors([['r','s'],['p','r'],['r','']]));//error
    console.log(rockPaperScissors([['r','p'],['s','r'],['r','r']]));//Draw
}
main();