const treeHeight = require('./calcula_altura')

test('Test: return type',() => {
    expect(
        Number.isNaN(treeHeight({
            value: '🎁',
            left: null,
            right: null
        })))
        .toBe(false)
})

test("Test: treeHeight({value: '🎁',left: null,right: null})",() => {
    expect(
        treeHeight({value: '🎁',left: null,right: null})
    ).toBe(1)
})

test("Test: treeHeight({ value: '🎁',left: { value: '🎄', left: null, right:null },right: {value: '❄️',left: null,right: null }})",() => {
    expect(
        treeHeight({ value: '🎁',left: { value: '🎄', left: null, right:null },right: {value: '❄️',left: null,right: null }})
    ).toBe(2)
})

test(`Test: treeHeight({
    value: '🎁',
    left: {
        value: '🎄',
        left: {
        value: '⭐',
        left: null,
        right: null
        },
        right: null
    },
    right: {
        value: '❄️',
        left: null,
        right: null
    }
    })`,() => {
    expect(
        treeHeight({
            value: '🎁',
            left: {
                value: '🎄',
                left: {
                value: '⭐',
                left: null,
                right: null
                },
                right: null
            },
            right: {
                value: '❄️',
                left: null,
                right: null
            }
        })
    ).toBe(3)
})

test(`Test: treeHeight(null)`,() => {
    expect(
        treeHeight(null)
    ).toBe(0)
})

test(`Test: treeHeight({
        value: '🎁',
        left: {
            value: '🎄',
            left: {
                value: '⭐',
                left: {
                    value: '🎅',
                    left: null,
                    right: null
                },
                right: null
            },
            right: null
        },
        right: null
    })`,() => {
    expect(
        treeHeight({
            value: '🎁',
            left: {
                value: '🎄',
                left: {
                    value: '⭐',
                    left: {
                        value: '🎅',
                        left: null,
                        right: null
                    },
                    right: null
                },
                right: null
            },
            right: null
        })
    ).toBe(4)
})
