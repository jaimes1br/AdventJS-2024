const removeSnow = require('./limpiando_nieve')

test('Test: return type',() => {
    expect(typeof removeSnow('zxxzoz') )
        .toBe('string')
})

test("Test: removeSnow('abbaca')",() => {
    expect(
        removeSnow('abbaca')
    ).toBe("ca")
})

test("Test: removeSnow('azxxzy')",() => {
    expect(
        removeSnow('azxxzy')
    ).toBe("ay")
})

test("Test: removeSnow('aabccba')",() => {
    expect(
        removeSnow('aabccba')
    ).toBe("a")
})

test("Test: removeSnow('aaabbaacc')",() => {
    expect(
        removeSnow('aaabbaacc')
    ).toBe("a")
})

test("Test: removeSnow('xyzzy')",() => {
    expect(
        removeSnow('xyzzy')
    ).toBe("x")
})

test("Test: removeSnow('abbacddce')",() => {
    expect(
        removeSnow('abbacddce')
    ).toBe("e")
})

test("Test: removeSnow('')",() => {
    expect(
        removeSnow('')
    ).toBe("")
})
test("Test: removeSnow('a')",() => {

    expect(
        removeSnow('a')
    ).toBe("a")
})

test("Test: removeSnow('aa')",() => {
    expect(
        removeSnow('aa')
    ).toBe("")
})

test("Test: removeSnow('ab')",() => {
    expect(
        removeSnow('ab')
    ).toBe("ab")
})

test("Test: removeSnow('abc')",() => {
    expect(
        removeSnow('abc')
    ).toBe("abc")
})