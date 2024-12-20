const distributeWeight = require('./apila_cajas')

test('Test: return type',() => {
    expect(typeof distributeWeight(1) )
        .toBe('string')
})

test("Test: distributeWeight(1)",() => {
    expect(
        distributeWeight(1)
    ).toBe(` _ \n|_|`)
})

test("Test: distributeWeight(2)",() => {
    expect(
        distributeWeight(2)
    ).toBe(` ___ \n|___|`)
})

test("Test: distributeWeight(3)",() => {
    expect(
        distributeWeight(3)
    ).toBe(` _ \n|_|_\n|___|`)
})

test("Test: distributeWeight(4)",() => {
    expect(
        distributeWeight(4)
    ).toBe(` ___ \n|___|\n|___|`)
})

test("Test: distributeWeight(5)",() => {
    expect(
        distributeWeight(5)
    ).toBe(` _____ 
|     |
|_____|`)
})

test("Test: distributeWeight(6)",() => {
    expect(
        distributeWeight(6)
    ).toBe(` _ 
|_|___
|     |
|_____|`)
})

test("Test: distributeWeight(7)",() => {
    expect(
        distributeWeight(7)
    ).toBe(` ___ 
|___|_
|     |
|_____|`)
})

test("Test: distributeWeight(18)",() => {
    expect(
        distributeWeight(18)
    ).toBe(` _ 
|_|_
|___|_
|     |
|_____|___
|         |
|_________|`)
})

test("Test: distributeWeight(121)",() => {
    expect(
        distributeWeight(121)
    ).toBe(` _ 
|_|_______
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|
|         |
|_________|`)
})
