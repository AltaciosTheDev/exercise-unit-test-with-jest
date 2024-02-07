//define one euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

//Define function
function fromEuroToDollar(euro){
    return euro * oneEuroIs.USD 
}

function fromDollarToYen(dollar){
    return dollar / oneEuroIs.USD * oneEuroIs.JPY
}


function fromYenToPound(yen){
    return yen / oneEuroIs.JPY * oneEuroIs.GBP
}

//Log to the console the evaluated result of invoking the sum function 
console.log(fromEuroToDollar(10))
console.log(fromDollarToYen(1))
console.log(fromYenToPound(1))

//Export the convertion functions to be used as a module 
module.exports = {fromEuroToDollar, fromDollarToYen, fromYenToPound}