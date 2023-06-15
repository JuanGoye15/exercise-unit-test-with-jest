
function fromEuroToDollar(euro) {
    const dollarResult = (euro * 1.2);
    return dollarResult;
}

function fromDollarToYen(dollar) {
    const yenResult = (dollar * 106.6);
    return yenResult;
}

function fromYenToPound(yen) {
    const poundResult = (yen * 0.0079);
    return poundResult;
}




module.exports = { fromDollarToYen, fromEuroToDollar, fromYenToPound };