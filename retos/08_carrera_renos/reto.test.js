const drawRace = require('./carrera_renos');

test('Test: return type',() => {
    expect(typeof drawRace([0, 5, -3], 10))
        .toBe('string')
})

test('Test: drawRace([0, 5, -3], 10)',() => {
    expect(
        drawRace([0, 5, -3], 10)
    ).toBe(`  ~~~~~~~~~~ /1\n ~~~~~r~~~~ /2\n~~~~~~~r~~ /3`)
})

test('Test: drawRace([2, -1, 0, 5], 8)',() => {
    expect(
        drawRace([2, -1, 0, 5], 8)
    ).toBe(`   ~~r~~~~~ /1\n  ~~~~~~~r /2\n ~~~~~~~~ /3\n~~~~~r~~ /4`)
})

test('Test: drawRace([3, 7, -2], 12)',() => {
    expect(
        drawRace([3, 7, -2], 12)
    ).toBe(`  ~~~r~~~~~~~~ /1\n ~~~~~~~r~~~~ /2\n~~~~~~~~~~r~ /3`)
})

test('Test: drawRace([0, 0, 0], 6)',() => {
    expect(
        drawRace([0, 0, 0], 6)
    ).toBe(`  ~~~~~~ /1\n ~~~~~~ /2\n~~~~~~ /3`)
})

test('Test: drawRace([5, 3, -4], 9)',() => {
    expect(
        drawRace([5, 3, -4], 9)
    ).toBe(`  ~~~~~r~~~ /1\n ~~~r~~~~~ /2\n~~~~~r~~~ /3`)
})
