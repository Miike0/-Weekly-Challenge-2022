/*
 * Reto #33
 * CICLO SEXAGENARIO CHINO
 * Fecha publicación enunciado: 15/08/22
 * Fecha publicación resolución: 22/08/22
 * Dificultad: MEDIA
 *
 * Enunciado: Crea un función, que dado un año, indique el elemento y animal correspondiente
 * en el ciclo sexagenario del zodíaco chino.
 * - Información: https://www.travelchinaguide.com/intro/astrology/60year-cycle.htm
 * - El ciclo sexagenario se corresponde con la combinación de los elementos madera,
 *   fuego, tierra, metal, agua y los animales rata, buey, tigre, conejo, dragón, serpiente,
 *   caballo, oveja, mono, gallo, perro, cerdo (en este orden).
 * - Cada elemento se repite dos años seguidos.
 * - El último ciclo sexagenario comenzó en 1984 (Madera Rata).
 *
 * Información adicional:
 * - Usa el canal de nuestro Discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Tienes toda la información sobre los retos semanales en https://retosdeprogramacion.com/semanales2022.
 *
 */

function chineseZodiac (year) {
    const zodiac = {
        elements: ['Wood','Fire','Earth','Metal','Water'],
        animals: ['Rat','Ox','Tiger','Rabit','Dragon','Snake','Horse','Sheep','Monkey','Roster',
                'Dog','Pig'],
    }

    if (year < 604) {
        return 'The chinese zodiac began from the year 604';
    }

    let sexagenaryYear = (year - 4) % 60;
    let element = zodiac.elements[(sexagenaryYear % 10) / 2];
    let animal = zodiac.animals[sexagenaryYear % 12];

    return `${year}: ${element} ${animal}`;
}

function main() {
    console.log(chineseZodiac(1984));
    console.log(chineseZodiac(1924));
    console.log(chineseZodiac(1932));
    console.log(chineseZodiac(1960));
    console.log(chineseZodiac(1966));
}
main();