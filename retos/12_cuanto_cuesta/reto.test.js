const calculatePrice = require('./cuanto_cuesta');

test('Test: return type',() => {
    expect(
        Number.isNaN(calculatePrice('***')))
        .toBe(false)
})

test("Test: calculatePrice('***')",() => {
    expect(
        calculatePrice('***')
    ).toBe(3)
})

test("Test: calculatePrice('*o')",() => {
    expect(
        calculatePrice('*o')
    ).toBe(4)
})

test("Test: calculatePrice('o*')",() => {
    expect(
        calculatePrice('o*')
    ).toBe(6)
})

test("Test: calculatePrice('*o@')",() => {
    expect(
        calculatePrice('*o@')
    ).toBe(94)
})

test("Test: calculatePrice('^#')",() => {
    expect(
        calculatePrice('^#')
    ).toBe(40)
})

test("Test: calculatePrice('#@Z')",() => {
    expect(
        calculatePrice('#@Z')
    ).toBe(undefined)
})

