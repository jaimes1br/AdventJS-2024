const isRobotBack = require('./robot')

test('Test: return type',() => {
    expect(typeof isRobotBack('RL'))
        .toBe('boolean')
})

test(`Test: isRobotBack('R') `,() => {
    expect(isRobotBack('R'))
    .toStrictEqual(
        [
            1,
            0
        ]
    )
})

test(`Test: isRobotBack('RL') `,() => {
    expect(isRobotBack('RL'))
    .toBeTruthy()
})

test(`Test: isRobotBack('RLUD') `,() => {
    expect(isRobotBack('RLUD'))
    .toBeTruthy()
})

test(`Test: isRobotBack('*RU') `,() => {
    expect(isRobotBack('*RU'))
    .toStrictEqual(
        [
            2,
            1
        ]
    )
})

test(`Test: isRobotBack('R*U') `,() => {
    expect(isRobotBack('R*U'))
    .toStrictEqual(
        [
            1,
            2
        ]
    )
})

test(`Test: isRobotBack('LLL!R') `,() => {
    expect(isRobotBack('LLL!R'))
    .toStrictEqual(
        [
            -4,
            0
        ]
    )
})

test(`Test: isRobotBack('R?R') `,() => {
    expect(isRobotBack('R?R'))
    .toStrictEqual(
        [
            1,
            0
        ]
    )
})

test(`Test: isRobotBack('U?D') `,() => {
    expect(isRobotBack('U?D'))
    .toBeTruthy()
})

test(`Test: isRobotBack('R!L') `,() => {
    expect(isRobotBack('R!L'))
    .toStrictEqual(
        [
            2,
            0
        ]
    )
})

test(`Test: isRobotBack('U!D') `,() => {
    expect(isRobotBack('U!D'))
    .toStrictEqual(
        [
            0,
            2
        ]
    )
})

test(`Test: isRobotBack('R?L') `,() => {
    expect(isRobotBack('R?L'))
    .toBeTruthy()
})

test(`Test: isRobotBack('U?U') `,() => {
    expect(isRobotBack('U?U'))
    .toStrictEqual(
        [
            0,
            1
        ]
    )
})