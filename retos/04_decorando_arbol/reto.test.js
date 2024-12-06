const createXmasTree = require('./decorando_arbol');

test('Test: return type',() => {
    expect(typeof createXmasTree(5, '*'))
        .toBe('string')
})

test('Test: createXmasTree(3, "*")',() => {
    expect(
        createXmasTree(3, '*')
    ).toBe("__*__\n_***_\n*****\n__#__\n__#__")
})

test('Test: createXmasTree(5, "+")',() => {
    expect(
        createXmasTree(5, '+')
    ).toBe("____+____\n___+++___\n__+++++__\n_+++++++_\n+++++++++\n____#____\n____#____")
})

test('Test: createXmasTree(6, "@")',() => {
    expect(
        createXmasTree(6, "@")
    ).toBe("_____@_____\n____@@@____\n___@@@@@___\n__@@@@@@@__\n_@@@@@@@@@_\n@@@@@@@@@@@\n_____#_____\n_____#_____")
})

test('Test: createXmasTree(1, "*")',() => {
    expect(
        createXmasTree(1, '*')
    ).toBe("*\n#\n#")
})

test('Test: createXmasTree(4, "#")',() => {
    expect(
        createXmasTree(4, '#')
    ).toBe("___#___\n__###__\n_#####_\n#######\n___#___\n___#___")
})