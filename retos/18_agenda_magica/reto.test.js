const findInAgenda = require('./agenda_magica')

test('Test: return type',() => {
    expect(typeof findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
    Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
    <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`))
        .toBe('object')
})

test(`Test: findInAgenda('+34-600-123-456 Calle Gran Via 12 <Juan Perez>
    Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
    <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York')`, () => {
    expect(
        findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
            Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
            <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,'34-600-123-456')
    ).toMatchObject({
        "name": "Juan Perez",
        "address": "Calle Gran Via 12"
      })
})

test(`Test: findInAgenda('+34-600-123-456 Calle Gran Via 12 <Juan Perez>
    Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
    <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York')`, () => {
    expect(
        findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
            Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
            <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,'600-987')
    ).toMatchObject({
        "name": "Maria Gomez",
        "address": "Plaza Mayor 45 Madrid 28013"
      })
})

test(`Test: findInAgenda('+34-600-123-456 Calle Gran Via 12 <Juan Perez>
    Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
    <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York')`, () => {
    expect(
        findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
            Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
            <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,'111')
    ).toBe(null)
})

test(`Test: findInAgenda('+34-600-123-456 Calle Gran Via 12 <Juan Perez>
    Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
    <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York')`, () => {
    expect(
        findInAgenda(`+34-600-123-456 Calle Gran Via 12 <Juan Perez>
            Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
            <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`,'1')
    ).toBe(null)
})