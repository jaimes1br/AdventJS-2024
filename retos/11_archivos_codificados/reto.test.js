const decodeFilename = require('./archivos_codificados')

test('Test: return type',() => {
    expect(typeof decodeFilename('42_chimney_dimensions.pdf.hack2023'))
        .toBe('string')
})

test("Test: decodeFilename('2023122512345678_sleighDesign.png.grinchwa')",() => {
    expect(
        decodeFilename('2023122512345678_sleighDesign.png.grinchwa')
    ).toBe("sleighDesign.png")
})

test("Test: decodeFilename('42_chimney_dimensions.pdf.hack2023')",() => {
    expect(
        decodeFilename('42_chimney_dimensions.pdf.hack2023')
    ).toBe("chimney_dimensions.pdf")
})

test("Test: decodeFilename('987654321_elf-roster.csv.tempfile')",() => {
    expect(
        decodeFilename('987654321_elf-roster.csv.tempfile')
    ).toBe("elf-roster.csv")
})

test("Test: decodeFilename('2024212345678_magic_wand-blueprint.jpg.grinchwa')",() => {
    expect(
        decodeFilename('2024212345678_magic_wand-blueprint.jpg.grinchwa')
    ).toBe("magic_wand-blueprint.jpg")
})

test("Test: decodeFilename('2023122512345678_trainSchedule.txt.extra')",() => {
    expect(
        decodeFilename('2023122512345678_trainSchedule.txt.extra')
    ).toBe("trainSchedule.txt")
})



