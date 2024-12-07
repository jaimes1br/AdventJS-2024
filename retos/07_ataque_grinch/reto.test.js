const fixPackages = require("./ataque_grinch");

test("Test: return type",() => {
    expect(typeof fixPackages("a(cb)de"))
        .toBe("string")
})

test("Test: fixPackages('a(bc)de')",() => {
    expect(
        fixPackages("a(bc)de")
    ).toBe("acbde")
})

test("Test: fixPackages('a(bc(def)g)h')",() => {
    expect(
        fixPackages('a(bc(def)g)h')
    ).toBe("agdefcbh")
})

test("Test: fixPackages('abc(def(gh)i)jk')",() => {
    expect(
        fixPackages('abc(def(gh)i)jk')
    ).toBe("abcighfedjk")
})

test("Test: fixPackages('a(b(c))e')",() => {
    expect(
        fixPackages('a(b(c))e')
    ).toBe("acbe")
})

test("Test: fixPackages('a(b(cd(efg)))h')",() => {
    expect(
        fixPackages("a(b(cd(efg)))h")
    ).toBe("acdgfebh")
})

test("Test: fixPackages('(abc(def(ghi)))')",() => {
    expect(
        fixPackages("(abc(def(ghi)))")
    ).toBe("defihgcba")
})
