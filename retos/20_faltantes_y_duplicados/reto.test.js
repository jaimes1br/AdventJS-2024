const fixGiftList = require('./faltantes_y_duplicados')

test('Test: return type',() => {
    expect(typeof fixGiftList([],['bear', 'bear', 'car']))
        .toBe('object')
})

test("Test: fixGiftList(['puzzle', 'car'], ['puzzle', 'car', 'ball'])", () => {
    expect(
        fixGiftList(['puzzle', 'car'], ['puzzle', 'car', 'ball'])
    ).toMatchObject({
        "missing": {
          "ball": 1
        },
        "extra": {}
    })
})

test("Test: fixGiftList(['car', 'puzzle', 'car'], ['puzzle', 'car', 'doll'])", () => {
    expect(
        fixGiftList(['car', 'puzzle', 'car'], ['puzzle', 'car', 'doll'])
    ).toMatchObject({
        "missing": {
          "doll": 1
        },
        "extra": {
          "car": 1
        }
      })
})

test("Test: fixGiftList(['train', 'book', 'kite'], ['train', 'kite', 'book', 'kite'])", () => {
    expect(
        fixGiftList(['train', 'book', 'kite'], ['train', 'kite', 'book', 'kite'])
    ).toMatchObject({
        "missing": {
          "kite": 1
        },
        "extra": {}
      })
})

test("Test: fixGiftList(['bear', 'car'], ['bear', 'car', 'car'])", () => {
    expect(
        fixGiftList(['bear', 'car'], ['bear', 'car', 'car'])
    ).toMatchObject({
        "missing": {
          "car": 1
        },
        "extra": {}
      })
})

test("Test: fixGiftList([], ['bear', 'car', 'car'])", () => {
    expect(
        fixGiftList([], ['bear', 'car', 'car'])
    ).toMatchObject({
        "missing": {
          "car": 2,
          "bear": 1
        },
        "extra": {}
      })
})

test("Test: fixGiftList(['puzzle', 'puzzle', 'car'], ['puzzle', 'car'])", () => {
    expect(
        fixGiftList(['puzzle', 'puzzle', 'car'], ['puzzle', 'car'])
    ).toMatchObject({
        "missing": {},
        "extra": {
          "puzzle": 1
        }
      })
})

test("Test: fixGiftList(['car'], ['puzzle', 'car','ball'])", () => {
    expect(
        fixGiftList(['car'], ['puzzle', 'car','ball'])
    ).toMatchObject({
        "missing": {
          "puzzle": 1,
          "ball": 1
        },
        "extra": {}
      })
})

test("Test: fixGiftList(['bear', 'bear', 'car'], ['bear', 'bear', 'car'])", () => {
    expect(
        fixGiftList(['bear', 'bear', 'car'], ['bear', 'bear', 'car'])
    ).toMatchObject({
        "missing": {},
        "extra": {}
      })
})