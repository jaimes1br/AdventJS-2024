// Resultado 5 ⭐
function createFrame(names: string[]): string {
    const max: number = names.reduce((a, b) => 
        a.length > b.length ? a : b, '').length;

    const top: string = '*'.repeat(max + 4);    
    let frame: string = `${top}\n`;

    for (const name of names) {
        const spaces: number = max - name.length;
        const tmp: string = `* ${name + ' '.repeat(spaces)} *` + '\n';
        frame += tmp;
    }

    return frame + top;
}