const compile = require('./ensamblador')

test('Test: return type',() => {
    expect(
        Number.isNaN(compile(['MOV -1 C'])))
        .toBe(false)
})

test("Test: compile(['MOV 0 A', 'INC A'])",() => {
    expect(
        compile(['MOV 0 A', 'INC A'])
    ).toBe(1)
})

test("Test: compile(['INC A', 'INC A', 'DEC A', 'MOV A B'])",() => {
    expect(
        compile(['INC A', 'INC A', 'DEC A', 'MOV A B'])
    ).toBe(1)
})

test("Test: compile(['MOV 5 B','DEC B','MOV B A', 'INC A'])",() => {
    expect(
        compile(['MOV 5 B','DEC B','MOV B A', 'INC A'])
    ).toBe(5)
})

test("Test: compile(['MOV 2 X','DEC X', 'DEC X', 'JMP X 1', 'MOV X A'])",() => {
    expect(
        compile(['MOV 2 X','DEC X', 'DEC X', 'JMP X 1', 'MOV X A'])
    ).toBe(-2)
})

test("Test: compile(['MOV 3 C','DEC C', 'DEC C', 'DEC C', 'JMP C 3', 'MOV C A'])",() => {
    expect(
        compile(['MOV 3 C','DEC C', 'DEC C', 'DEC C', 'JMP C 3', 'MOV C A'])
    ).toBe(-1)
})

