let oneEuroIs = {
    "JPY": 127.9, // japan yen
    "USD": 1.2, // us dollar
    "GBP": 0.8, // british pound


function fromEuroToDollar(euro) {
    const dollarResult = Math.floor(Math.random(euro * 1.2));
    return dollarResult;
}

function fromDollarToYen(dollar) {
    const yenResult = Math.floor(Math.random(dollar * 106.6));
    return yenResult;
}

function fromYenToPound(yen) {
    const poundResult = Math.floor(Math.random(yen * 159.9 ));
    return poundResult;
}




module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };