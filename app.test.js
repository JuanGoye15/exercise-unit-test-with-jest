


test("10 dollars are 1.066 yen", () => {
    const { fromDollarToYen } = require('./app.js');
    expect(fromDollarToYen(10)).toBe(1066)
});

test("10 euros are 12 dollars", () => {
    const { fromEuroToDollar } = require('./app.js');
    expect(fromEuroToDollar(10)).toBe(12)
});

test("100 yens are 0.79 pounds", () => {
    const { fromYenToPound } = require('./app.js');
    expect(fromYenToPound(100)).toBe(0.79)
});

test("One euro should be 1.206 dollars", function(){
    //import the function from app.js
    const { fromEuroToDollar } = require('./app.js')

    // use the function like its suppoed to be used
    const dollars = fromEuroToDollar(3.5)

    // if 1 euro are 1.206 dollars, then 3.5 euros should be (3.5 * 1.2)
    const expected = 3.5 * 1.2; 
    
    // this is the comparison for the unit test
     expect(fromEuroToDollar(3.5)).toBe(4.2); //1 euro are 1.2 dolares, then 3.5 euros should be = (3.5 * 1.2)
})