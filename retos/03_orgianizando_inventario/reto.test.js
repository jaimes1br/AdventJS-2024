const organizeInventory = require('./orgianizando_inventario');

test('Test: return type',() => {
    expect(typeof organizeInventory([{ name: 'doll', quantity: 5, category: 'toys' }]))
        .toBe('object')
})

test("Test: organizeInventory([])", () => {
    expect(
        organizeInventory([])
    ).toMatchObject({})
})

test("Test: organizeInventory([{ name: 'doll', quantity: 5, category: 'toys' }])", () => {
    expect(
        organizeInventory([{ name: 'doll', quantity: 5, category: 'toys' }])
    ).toMatchObject({
        "toys": {
            "doll": 5
        }
    })
})

test(`Test: organizeInventory([
        { name: 'book', quantity: 10, category: 'education' },
        { name: 'book', quantity: 5, category: 'education' },
        { name: 'paint', quantity: 3, category: 'art' }
    ])`, () => {
    expect(
        organizeInventory([
            { name: 'book', quantity: 10, category: 'education' },
            { name: 'book', quantity: 5, category: 'education' },
            { name: 'paint', quantity: 3, category: 'art' }
        ])
    ).toMatchObject({
        "education": {
            "book": 15
        },
        "art": {
            "paint": 3
        },
    })
})

test(`Test: organizeInventory([
     { name: 'doll', quantity: 5, category: 'toys' },
     { name: 'car', quantity: 3, category: 'toys' },
     { name: 'ball', quantity: 2, category: 'sports' },
     { name: 'car', quantity: 2, category: 'toys' },
     { name: 'racket', quantity: 4, category: 'sports' }
    ])`, () => {
    expect(
        organizeInventory([
            { name: 'doll', quantity: 5, category: 'toys' },
            { name: 'car', quantity: 3, category: 'toys' },
            { name: 'ball', quantity: 2, category: 'sports' },
            { name: 'car', quantity: 2, category: 'toys' },
            { name: 'racket', quantity: 4, category: 'sports' }
        ])
    ).toMatchObject({
        "toys": {
          "doll": 5,
          "car": 5
        },
        "sports": {
          "ball": 2,
          "racket": 4
        }
    })
})
