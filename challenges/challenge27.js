/*
 * Reto #28
 * MÁQUINA EXPENDEDORA
 * Fecha publicación enunciado: 11/07/22
 * Fecha publicación resolución: 18/07/22
 * Dificultad: MEDIA
 *
 * Enunciado: Simula el funcionamiento de una máquina expendedora creando una operación
 * que reciba dinero (array de monedas) y un número que indique la selección del producto.
 * - El programa retornará el nombre del producto y un array con el dinero de vuelta (con el menor
 *   número de monedas).
 * - Si el dinero es insuficiente o el número de producto no existe, deberá indicarse con un mensaje
 *   y retornar todas las monedas.
 * - Si no hay dinero de vuelta, el array se retornará vacío.
 * - Para que resulte más simple, trabajaremos en céntimos con monedas de 5, 10, 50, 100 y 200.
 * - Debemos controlar que las monedas enviadas estén dentro de las soportadas.
 *
 * Información adicional:
 * - Usa el canal de nuestro discord (https://mouredev.com/discord) "🔁reto-semanal" para preguntas, dudas o prestar ayuda a la comunidad.
 * - Puedes hacer un Fork del repo y una Pull Request al repo original para que veamos tu solución aportada.
 * - Revisaré el ejercicio en directo desde Twitch el lunes siguiente al de su publicación.
 * - Subiré una posible solución al ejercicio el lunes siguiente al de su publicación.
 *
 */

function vendingProvider (money, product) {
    let vending = {
        products: {
            1: 'Coca cola',
            2: 'Hot cheetos',
            3: 'Candys',
            4: 'Doritos',
            5: "Hershey's",
        },
        productPrice: {
            1: 30,
            2: 35,
            3: 15,
            4: 50,
            5: 60,
        },
        coins: [5,10,50,100,200],
        existCoinNotSupported: false,
        coinNotSupported: ``,
        existProductNotSupported: false,
        productNotSupported: `The product entered is not supported`,

        totalmoneyEntered: 0,
        remainingMoney: 0,
        insufficientMoney: false,
        isThereChange: true,
        surplusMoney: [],

        product: '',
        delivery: ``,
    }

    //Is there any coin not supported?
    money.forEach(coin => {
        if (!vending.coins.includes(coin)) {            
            vending.existCoinNotSupported = true;
            vending.coinNotSupported = `The ${coin} coin is not supported`;
            return;
        }
        vending.totalmoneyEntered += coin;
    });
    if (vending.existCoinNotSupported) {
        return vending.coinNotSupported;
    }

    //Is there any product not supported
    let productsSupported = Object.keys(vending.products);
    if(!productsSupported.includes(product.toString())){
        return vending.productNotSupported;
    }

    let productValue = Object.values(vending.productPrice);
    let products = Object.values(vending.products);
    productsSupported.forEach((element,index) => {
        if (element === product.toString()) {
            vending.remainingMoney = vending.totalmoneyEntered - parseInt(productValue[index]);
            vending.product = products[index];
        }
        if (vending.remainingMoney < 0) {
            vending.insufficientMoney = true;
            vending.delivery = `The money amount is insufficient`;
        }
    });

    //In case of surplus money
    if (!vending.insufficientMoney) {
        while (vending.remainingMoney != 0) {
            if (vending.isThereChange) {
                for (let index = vending.coins.length; index >=0; index--) {
                    if (vending.remainingMoney - vending.coins[index] >= 0){
                        vending.remainingMoney = vending.remainingMoney - vending.coins[index];
                        vending.surplusMoney.push(vending.coins[index]);
                    }
                }
            }
        }

        vending.delivery = `Here is your ${vending.product} and your change is ${vending.surplusMoney}`;
    }


    return vending.delivery;
}

function main () {
    console.log(vendingProvider([5,10,50,5],3));
    console.log(vendingProvider([5,10,50,5],5));
    console.log(vendingProvider([5,10,50,5],1));
}
main();