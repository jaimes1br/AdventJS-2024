const minMovesToStables = require('./acomodando_renos')

test('Test: return type',() => {
    expect(
        Number.isNaN(minMovesToStables([2, 6, 9], [3, 8, 5])))
        .toBe(false)
})

test("Test: minMovesToStables([2, 6, 9], [3, 8, 5])",() => {
    expect(
        minMovesToStables([2, 6, 9], [3, 8, 5])
    ).toBe(3)
})

test("Test: minMovesToStables([1, 1, 3], [1, 4, 8])",() => {
    expect(
        minMovesToStables([1, 1, 3], [1, 4, 8])
    ).toBe(8)
})

test("Test: minMovesToStables([5, 15, 10], [8, 18, 12])",() => {
    expect(
        minMovesToStables([5, 15, 10], [8, 18, 12])
    ).toBe(8)
})

test("Test: minMovesToStables([30, 1, 2], [1, 2 ,30])",() => {
    expect(
        minMovesToStables([30, 1, 2], [1, 2 ,30])
    ).toBe(0)
})

test("Test: minMovesToStables([30, 20, 10], [35, 25, 15])",() => {
    expect(
        minMovesToStables([30, 20, 10], [35, 25, 15])
    ).toBe(15)
})

test("Test: minMovesToStables([100, 1], [50, 75])",() => {
    expect(
        minMovesToStables([100, 1], [50, 75])
    ).toBe(74)
})
