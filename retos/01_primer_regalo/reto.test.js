const prepareGifts = require('./primer_regalo');

test('Test: return type',() => {
    expect(
        Array.isArray(prepareGifts([3, 1, 2, 3, 4, 2, 5])))
        .toBe(true)
})

test("Test: prepareGifts([3, 1, 2, 3, 4, 2, 5])", () => {
    expect(
        prepareGifts([3, 1, 2, 3, 4, 2, 5])
    ).toStrictEqual(
        [
            1,
            2,
            3,
            4,
            5
        ]
    )
})

test("Test: prepareGifts([5, 5, 5, 5])", () => {
    expect(
        prepareGifts([5,5,5,5])
    ).toStrictEqual(
        [
            5
        ] 
    )
})

test("Test: prepareGifts([1, 2, 3])", () => {
    expect(
        prepareGifts([1,2,3])
    ).toStrictEqual(
        [
            1,
            2,
            3
        ]
    )
})

test("Test: prepareGifts([])", () => {
    expect(
        prepareGifts([])
    ).toStrictEqual(
        []
    )
})

test("Test: prepareGifts([10, 20, 10, 30, 20, 30, 40])", () => {
    expect(
        prepareGifts([10,20,10,30,20,30,40])
    ).toStrictEqual(
        [
            10,
            20,
            30,
            40
        ]
    )
})

test("Test: prepareGifts([3, 1, 2, 3, 1, 2])", () => {
    expect(
        prepareGifts([3, 1, 2, 3, 1, 2])
    ).toStrictEqual(
        [
            1,
            2,
            3
        ]
    )
})