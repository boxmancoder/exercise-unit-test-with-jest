// This is your function that sums two numbers
const sum = (a,b) => {
    return a + b;
} 

// Just a console log for ourselves
// console.log(sum(7,3))

// One euro is:
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
};

// 1. Convert from US dollars to Japanese yen
const fromDollarToYen = (dollarAmount) => {
    const dollarToEuro = dollarAmount / oneEuroIs.USD;
    return dollarToEuro * oneEuroIs.JPY;
}

// 2. Convert from euros to US dollars
const fromEuroToDollar = (euroAmount) => {
    return euroAmount * oneEuroIs.USD;
}

// 3. Convert from Japanese yen to British pounds
const fromYenToPound = (yenAmount) => {
    const yenToEuro = yenAmount / oneEuroIs.JPY;
    return yenToEuro * oneEuroIs.GBP;
}

// Export the functions to be used on other files 
// (similar to the keyword "export" when using webpack)
module.exports = {
    sum,
    fromDollarToYen,
    fromEuroToDollar,
    fromYenToPound
};