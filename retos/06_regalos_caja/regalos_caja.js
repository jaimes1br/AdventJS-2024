// console.log(inBox([
//     "###",
//     "#*#",
//     "###"
//   ])) // ➞ true

/** 
 *  @param {string[]} gifts
 *  @returns {boolean} True if the gift is inside the box
 */
function inBox(box) {
    for (let i = 1; i < box.length - 1; i++) {
        const line = box[i]
        const j = line.indexOf('*');    
        
        if(j !== 0 && j !== line.length - 1 && j !== -1 ){
            return true
        }
    }

    return false
}

module.exports = inBox