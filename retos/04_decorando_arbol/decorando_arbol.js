// console.log(createXmasTree(5, '*'))

/**
 * @param {number} height - Height of the tree
 * @param {string} ornament - Symbol to draw
 * @returns {string} Drawn tree
 */
function createXmasTree(height, ornament) {

    let tree = '';
    for (let i = 0; i < height; i++) {
        let line = '_'.repeat(height - i - 1);
        let orna = ornament.repeat((2*i) + 1);

        tree += line + orna + line + '\n';
    }  
    
    const base = '_'.repeat(height - 1);
    
    tree += base + '#' + base + '\n';
    tree += base + '#' + base;
    
    return tree;
}

module.exports = createXmasTree;