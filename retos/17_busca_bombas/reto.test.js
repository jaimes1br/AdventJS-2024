const detectBombs = require('./busca_bombas')

test('Test: return type',() => {
    expect(
        Array.isArray(detectBombs([[true, false, false]])))
        .toBe(true)
})

test(`Test: detectBombs([
        [true, false, false],
        [false, true, false],
        [false, false, false]
    ])`, () => {
    expect(
        detectBombs([
            [true, false, false],
            [false, true, false],
            [false, false, false]
        ])
    ).toStrictEqual(
        [
            [
              1,
              2,
              1
            ],
            [
              2,
              1,
              1
            ],
            [
              1,
              1,
              1
            ]
          ]
    )
})

test(`Test: detectBombs([
        [false, true, false],
        [true, false, true],
        [false, true, false]
    ])`, () => {
    expect(
        detectBombs([
            [false, true, false],
            [true, false, true],
            [false, true, false]
        ])
    ).toStrictEqual(
        [
            [
                2,
                2,
                2
            ],
            [
                2,
                4,
                2
            ],
            [
                2,
                2,
                2
            ]
        ]
        )
    })

test(`Test: detectBombs([
        [true, true],
        [true, true],
        [false, false]
    ])`, () => {
    expect(
        detectBombs([
            [true, true],
            [true, true],
            [false, false]
        ])
        ).toStrictEqual(
            [
                [
                    3,
                    3
                ],
                [
                    3,
                    3
                ],
                [
                    2,
                    2
                ]
            ]
        )
    })

test(`Test: detectBombs([
        [true, true],
        [true, true]
    ])`, () => {
    expect(
        detectBombs([
            [true, true],
            [true, true]
        ])
    ).toStrictEqual(
        [
            [
                3,
                3
            ],
            [
                3,
                3
            ]
        ]
    )
    })

test(`Test: detectBombs([
        [false, false, false],
        [false, true, false],
        [false, false, false]
    ])`, () => {
    expect(
        detectBombs([
            [false, false, false],
            [false, true, false],
            [false, false, false]
        ])
    ).toStrictEqual(
        [
            [
                1,
                1,
                1
            ],
            [
                1,
                0,
                1
            ],
            [
                1,
                1,
                1
            ]
        ]
    )
    })

test(`Test: detectBombs([
        [true, false],
        [false, false]
    ])`, () => {
    expect(
        detectBombs([
            [true, false],
            [false, false]
        ])
    ).toStrictEqual(
        [
            [
                0,
                1
            ],
            [
                1,
                1
            ]
        ]
    )
    })

