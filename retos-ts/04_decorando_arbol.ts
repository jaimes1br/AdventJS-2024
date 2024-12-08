// Resultado 5 ⭐
function createXmasTree(height: number, ornament: string): string {
    let tree: string = '';
    for (let i = 0; i < height; i++) {
        let line = '_'.repeat(height - i - 1);
        let orna = ornament.repeat((2 * i) + 1);

        tree += line + orna + line + '\n';
    }

    const base: string = '_'.repeat(height - 1);

    tree += base + '#' + base + '\n';
    tree += base + '#' + base;

    return tree;
}