const sum = (a, b) => {
    return a + b
}

const fromEuroToDollar = function (valueInEuro) {

    return valueInEuro * 1.07;
}

const fromDollarToYen = function (valueInDollar) {

    return (valueInDollar / 1.07) * 156.5;
}


const fromYenToLibra = function (valueInYen) {

    return (valueInYen / 156.5) * 0.87;


}

module.exports = { sum, fromEuroToDollar, fromDollarToYen, fromYenToLibra }