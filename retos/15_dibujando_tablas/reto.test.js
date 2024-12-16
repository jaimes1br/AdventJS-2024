const drawTable = require('./dibujando_tablas')

test('Test: return type',() => {
    expect(typeof drawTable([{ name: 'Charlie', city: '' }]))
        .toBe('string')
})

test("Test: drawTable([{ name: 'Charlie', city: 'London' }])",() => {
    expect(
        drawTable([{ name: 'Alice', city: 'London' }])
    ).toBe("+-------+--------+\n| Name  | City   |\n+-------+--------+\n| Alice | London |\n+-------+--------+")
})

test("Test: drawTable([{ name: 'Charlie', city: '' }, { gift: 'Alice',   quantity: 10 },{ gift: 'Bob',     quantity: 5 },])",() => {
    expect(
        drawTable([  { name: 'Alice', city: 'London' },
            { name: 'Bob', city: 'Paris' }])
    ).toBe("+-------+--------+\n| Name  | City   |\n+-------+--------+\n| Alice | London |\n| Bob   | Paris  |\n+-------+--------+")
})

test("Test: drawTable([{ gift: 'Doll', quantity: 10 },{ gift: 'Book', quantity: 5 },{ gift: 'Music CD', quantity: 1 }])",() => {
    expect(
        drawTable([
            { gift: 'Doll', quantity: 10 },
            { gift: 'Book', quantity: 5 },
            { gift: 'Music CD', quantity: 1 }
          ])
    ).toBe("+----------+----------+\n| Gift     | Quantity |\n+----------+----------+\n| Doll     | 10       |\n| Book     | 5        |\n| Music CD | 1        |\n+----------+----------+")
})

test("Test: drawTable([{ id: 1 , score: 95 },{ id: 2 , score: 85 }])",() => {
    expect(
        drawTable([{ id: 1 , score: 95 },{ id: 2 , score: 85 }])
    ).toBe("+----+-------+\n| Id | Score |\n+----+-------+\n| 1  | 95    |\n| 2  | 85    |\n+----+-------+")
})

test("Test: drawTable([{ id: 'midugato', isCat: true },{ id: 'miduperro', isCat: false }])",() => {
    expect(
        drawTable([{ id: 'midugato', isCat: true },{ id: 'miduperro', isCat: false }])
    ).toBe("+-----------+-------+\n| Id        | IsCat |\n+-----------+-------+\n| midugato  | true  |\n| miduperro | false |\n+-----------+-------+")
})

test("Test: drawTable([{ game: 'indianajones', subtitle: 'the game' },{ game: 'pokemonblue', subtitle: '' }])",() => {
    expect(
        drawTable([{ game: 'indianajones', subtitle: 'the game' },{ game: 'pokemonblue', subtitle: '' }])
    ).toBe("+--------------+----------+\n| Game         | Subtitle |\n+--------------+----------+\n| indianajones | the game |\n| pokemonblue  |          |\n+--------------+----------+")
})
