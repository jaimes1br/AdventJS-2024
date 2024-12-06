const createFrame = require('./enmarcando_nombres');

test('Test: return type',() => {
    expect(typeof createFrame(['midu', 'madeval', 'educalvolpz']))
        .toBe('string')
})

test('Test: createFrame(["midu"])',() => {
    expect(
        createFrame(["midu"])
    ).toBe(`********\n* midu *\n********`)
})

test('Test: createFrame(["midu","madeval","educalvolpz"])',() => {
    expect(
        createFrame(["midu","madeval","educalvolpz"])
    ).toBe(`***************\n* midu        *\n* madeval     *\n* educalvolpz *\n***************`)
})

test('Test: createFrame(["a","bb","ccc"])',() => {
    expect(
        createFrame(["a","bb","ccc"])
    ).toBe(`*******\n* a   *\n* bb  *\n* ccc *\n*******`)
})

test('Test: createFrame(["a","bb","ccc","dddd"])',() => {
    expect(
        createFrame(["a","bb","ccc","dddd"])
    ).toBe(`********\n* a    *\n* bb   *\n* ccc  *\n* dddd *\n********`)
})

test('Test: createFrame(["midu","madeval","educalvolpz","midu"])',() => {
    expect(
        createFrame(["midu","madeval","educalvolpz","midu"])
    ).toBe(`***************\n* midu        *\n* madeval     *\n* educalvolpz *\n* midu        *\n***************`)
})