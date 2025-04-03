const { sum, fromEuroToDollar, fromDollarToYen, fromYenToLibra } = require('./app.js');

test('la suma de 14 + 9 debe dar 23', () => {
    let total = sum(14, 9)
    expect(total).toBe(23)
})


test("One euro should be 1.07 dollars", function () {

    let dollars = fromEuroToDollar(3.5);
    expect(dollars).toBeCloseTo(3.745);
})

test('one dollar should be 1,46 yenes', function () {

    let yenes = fromDollarToYen(1)
    expect(yenes).toBeCloseTo(146.26)
})

test('one yen should be 0.0056 libras', function () {

    let libras = fromYenToLibra(1)
    expect(libras).toBeCloseTo(0.0056)


}) 