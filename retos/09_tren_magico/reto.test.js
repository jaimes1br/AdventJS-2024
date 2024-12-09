const moveTrain = require('./tren_magico');

test('Test: return type',() => {
    expect(typeof moveTrain(['·····', '*····', '@····', 'o····', 'o····'], 'U'))
        .toBe('string')
})

test("Test: moveTrain(['·····', '··*··', '··@··', '··o··', '··o··'], 'U')",() => {
    expect(
        moveTrain(['·····', '··*··', '··@··', '··o··', '··o··'], 'U')
    ).toBe("eat")
})

test("Test: moveTrain(['·····', '··*··', '··.··', '··o··', '··@··'], 'D')",() => {
    expect(
        moveTrain(['·····', '··*··', '··.··', '··o··', '··@··'], 'D')
    ).toBe("crash")
})

test("Test: moveTrain(['·····', '··*··', '··@··', '··o··', '··o··'], 'D')",() => {
    expect(
        moveTrain(['·····', '··*··', '··@··', '··o··', '··o··'], 'D')
    ).toBe("crash")
})

test("Test: moveTrain(['·····', '··*··', '··@··', '··o··', '··o··'], 'R')",() => {
    expect(
        moveTrain(['·····', '··*··', '··@··', '··o··', '··o··'], 'R')
    ).toBe("none")
})

test("Test: moveTrain(['··@··', '··o··', '·*o··', '··o··', '··o··'], 'U')",() => {
    expect(
        moveTrain(['··@··', '··o··', '·*o··', '··o··', '··o··'], 'U')
    ).toBe("crash")
})

test("Test: moveTrain(['··@··', '··o··', '·*o··', '··o··', '··o··'], 'L')",() => {
    expect(
        moveTrain(['·····', '··*··', '··@··', '··o··', '··o··'], 'L')
    ).toBe("none")
})

test("Test: moveTrain(['·····', '··@··', '··*··', '·····', '·····'], 'D')",() => {
    expect(
        moveTrain(['·····', '··@··', '··*··', '·····', '·····'], 'D')
    ).toBe("eat")
})