// Import the required functions from the app.js file
const { sum, fromEuroToDollar, fromDollarToYen, fromYenToPound } = require('./app.js');

// Start your first test
test('adds 14 + 9 to equal 23', () => {
    // Inside the test we call our sum function with 2 numbers
    let total = sum(14, 9);

    // We expect the sum of those 2 numbers to be 23
    expect(total).toBe(23);
});

test("One euro should be 1.07 dollars", function() {
    // Use the function as it's supposed to be used
    const dollars = fromEuroToDollar(3.5);

    // If 1 euro is 1.07 dollars, then 3.5 euros should be (3.5 * 1.07)
    const expected = 3.5 * 1.07; 
    
    // This is the comparison for the unit test
    expect(dollars).toBe(3.745); // 1 euro is 1.07 dollars, then 3.5 euros should be = (3.5 * 1.07)
});

test("Two dollars should convert to its equivalent in yen", function() {
    // Use the function as it's supposed to be used
    const yen = fromDollarToYen(2);

    // Convert dollars to euros using the conversion rate, then convert that euro amount to yen
    const expected = 2 * (1 / 1.07) * 156.5;  // based on the provided conversion rates in your oneEuroIs object
    
    // This is the comparison for the unit test
    expect(yen).toBeCloseTo(expected);  // Using toBeCloseTo() because of potential floating point imprecision
});

test("One thousand yen should convert to its equivalent in pounds", function() {
    // Use the function as it's supposed to be used
    const pounds = fromYenToPound(1000);

    // Convert yen to euro using the conversion rate, then convert that euro amount to pounds
    const expected = 1000 * (1 / 156.5) * 0.87;  // based on the provided conversion rates in your oneEuroIs object

    expect(pounds).toBeCloseTo(expected);  // Using toBeCloseTo() because of potential floating point imprecision
});