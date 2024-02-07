const {fromEuroToDollar, fromDollarToYen, fromYenToPound} = require("./app.js")

describe('Currency convertions', ()=> {
    //EURO TEST
    test('1 euro should be 1.07 dollars', () => {
        //call imported funct and store it inside total
        let dollars = fromEuroToDollar(3.5)
        //if 1 euro is 1.07dollars, then 3.5 euros should be (3.5 * 1.07)
        let expected = 3.5 * 1.07
        //expect the dollars to be expected
        expect(dollars).toBe(expected)
    })

    //DOLLAR TEST 
    test('1 dollar should be 146.26 yen', ()=>{
        let yens = fromDollarToYen(3.5)
        //if 1 dollar is 146.26 yen, then 3.5 dollars should be (3.5 * 146,26)
        let expected = 3.5 / 1.07 * 156.5
        expect(yens).toBe(expected)
    })
    //POUND TEST 
    test('1yen should be 00.555 pound', () =>{
        expect(fromYenToPound(3.5)).toBe(3.5 / 156.5 * 0.87)
    })
})
