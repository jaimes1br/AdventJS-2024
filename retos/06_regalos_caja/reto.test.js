const inBox = require('./regalos_caja')

test('Test: return type',() => {
    expect(typeof inBox([
            "###",
            "#*#",
            "###"
        ]))
        .toBe('boolean')
})

test(`Test: inBox([
        "###",
        "#*#",
        "###"
    ])`,() => {
    expect(inBox([
        "###",
        "#*#",
        "###"
    ])).toBeTruthy()
})

test(`Test: inBox([
        "#*#",
        "###",
        "###"
    ])`,() => {
    expect(inBox([
        "#*#",
        "###",
        "###"
    ])).toBeFalsy()
})

test(`Test: inBox([
        "###",
        "# #",
        "###"
    ])`,() => {
    expect(inBox([
        "###",
        "# #",
        "###"
    ])).toBeFalsy()
})

test(`Test: inBox([
        "####",
        "#* #",
        "#  #",
        "####",
    ])`,() => {
    expect(inBox([
        "####",
        "#* #",
        "#  #",
        "####",
    ])).toBeTruthy()
})

test(`Test: inBox([
        "####",
        "#  #",
        "# #*",
        "####",
    ])`,() => {
    expect(inBox([
        "####",
        "#  #",
        "# #*",
        "####",
    ])).toBeFalsy()
})

test(`Test: inBox([
        "#####",
        "#   #",
        "#   #",
        "#####",
    ])`,() => {
    expect(inBox([
        "#####",
        "#   #",
        "#   #",
        "#####",
    ])).toBeFalsy()
})

test(`Test: inBox([
        "#####",
        "#   #",
        "*#  #",
        "#####",
    ])`,() => {
    expect(inBox([
        "#####",
        "#   #",
        "*#  #",
        "#####",
    ])).toBeFalsy()
})

test(`Test: inBox([
        "##*##",
        "#   #",
        "#   #",
        "#####",
    ])`,() => {
    expect(inBox([
        "##*##",
        "#   #",
        "#   #",
        "#####",
    ])).toBeFalsy()
})

test(`Test: inBox([
        "####",
        "#  #",
        "##*#",
    ])`,() => {
    expect(inBox([
        "####",
        "#  #",
        "##*#",
    ])).toBeFalsy()
})

test(`Test: inBox([
        "###",
        "###",
        "#*#",
    ])`,() => {
    expect(inBox([
        "###",
        "###",
        "#*#",
    ])).toBeFalsy()
})