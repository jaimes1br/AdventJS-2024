// console.log(createFrame(['midu', 'madeval', 'educalvolpz']));
// console.log(createFrame(["a","bb","ccc"]));
console.log(createFrame(["midu","madeval","educalvolpz","midu"]));
/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    
    const max = names.reduce((a, b) => 
        a.length > b.length ? a : b, '').length;

    const top = '*'.repeat(max + 4);    
    let frame = `${top}\n`;

    for (const name of names) {
        const spaces = max - name.length;
        const tmp = `* ${name + ' '.repeat(spaces)} *` + '\n';
        frame += tmp;
    }

    return frame + top;
}

module.exports = createFrame