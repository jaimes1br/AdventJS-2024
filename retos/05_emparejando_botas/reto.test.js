const organizeShoes = require('./emparejando_botas');

test('Test: return type',() => {
    expect(
        Array.isArray(organizeShoes([{ type: 'I', size: 38 }])))
        .toBe(true)
})

test(`Test: organizeShoes([
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 42 }
          ])`, () => {
    expect(
        organizeShoes([
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 42 }
          ])
    ).toStrictEqual(
        [
            38,
            42
        ]
    )
})

test(`Test: organizeShoes([
        { type: 'I', size: 38 },
        { type: 'R', size: 38 },
        { type: 'I', size: 38 },
        { type: 'I', size: 38 },
        { type: 'R', size: 38 }
    ])`, () => {
    expect(
        organizeShoes([
            { type: 'I', size: 38 },
            { type: 'R', size: 38 },
            { type: 'I', size: 38 },
            { type: 'I', size: 38 },
            { type: 'R', size: 38 }
        ])
    ).toStrictEqual(
        [
            38,
            38
        ]
    )
})

test(`Test: organizeShoes([
        { type: 'I', size: 38 },
        { type: 'R', size: 36 },
        { type: 'R', size: 42 },
        { type: 'I', size: 41 },
        { type: 'I', size: 42 }
    ])`, () => {
    expect(
        organizeShoes([
            { type: 'I', size: 38 },
            { type: 'R', size: 36 },
            { type: 'R', size: 42 },
            { type: 'I', size: 41 },
            { type: 'I', size: 42 }
        ])
    ).toStrictEqual(
        [
            42
        ]
    )
})

test(`Test: organizeShoes([
        { type: 'I', size: 40 },
        { type: 'R', size: 40 },
        { type: 'I', size: 40 },
        { type: 'R', size: 40 }
    ])`, () => {
    expect(
        organizeShoes([
            { type: 'I', size: 40 },
            { type: 'R', size: 40 },
            { type: 'I', size: 40 },
            { type: 'R', size: 40 }
        ])
    ).toStrictEqual(
    [
        40,
        40
    ]
    )
})

test(`Test: organizeShoes([
        { type: 'I', size: 39 },
        { type: 'R', size: 39 },
        { type: 'R', size: 39 },
    ])`, () => {
    expect(
        organizeShoes([
            { type: 'I', size: 39 },
            { type: 'R', size: 39 },
            { type: 'R', size: 39 },
        ])
    ).toStrictEqual(
    [
        39
    ]
    )
})
