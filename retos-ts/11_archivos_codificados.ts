// Resultado 5 ⭐
function decodeFilename(filename: string): string {
    let from: number = filename.indexOf('_');
    let to: number = filename.lastIndexOf('.');

    return filename.slice(from + 1,to)
}