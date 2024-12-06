// console.log(createFrame(['midu', 'madeval', 'educalvolpz']));

/**
 * @param {string[]} names - Array of names to frame
 * @returns {string} The framed names
 */
function createFrame(names) {
    
    let max = 0;
    names.forEach(n => {
        if (n.length > max) max = n.length
    });

    const top = '*'.repeat(max + 4);
    
    const frame = names.map(n => {
        return `* ${n + ' '.repeat(max - (n.length))} *`
    });

    return top + '\n' + frame.join('\n') + '\n' + top
}

module.exports = createFrame