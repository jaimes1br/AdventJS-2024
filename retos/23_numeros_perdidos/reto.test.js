const findMissingNumbers = require('./numeros_perdidos')

test('Test: return type',() => {
    expect(
        Array.isArray(findMissingNumbers([1,2,3])))
        .toBe(true)
})

test(`Test: findMissingNumbers([[1,2,4,6]])`, () => {
    expect(
        findMissingNumbers([1,2,4,6])
    ).toStrictEqual(
        [3,5]
    )
})

test(`Test: findMissingNumbers([4,8,7,2])`, () => {
    expect(
        findMissingNumbers([4,8,7,2])
    ).toStrictEqual(
        [1,3,5,6]
    )
})

test(`Test: findMissingNumbers([3,2,1,1])`, () => {
    expect(
        findMissingNumbers([3,2,1,1])
    ).toStrictEqual(
        []
    )
})

test(`Test: findMissingNumbers([5,5,5,3,3,2,1])`, () => {
    expect(
        findMissingNumbers([5,5,5,3,3,2,1])
    ).toStrictEqual(
        [4]
    )
})

test(`Test: findMissingNumbers([1,2,3,4,5])`, () => {
    expect(
        findMissingNumbers([1,2,3,4,5])
    ).toStrictEqual(
        []
    )
})