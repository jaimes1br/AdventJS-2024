// console.log(minMovesToStables([2, 6, 9], [3, 8, 5])) // -> 3
// console.log(minMovesToStables([1, 1, 3], [1, 8, 4])) // -> 8
/**
 * @param {number[]} reindeer
 * @param {number[]} stables
 * @returns {number}
 */
function minMovesToStables(reindeer, stables) {
    const sortReindeer = reindeer.sort((a,b) => a - b) 
    const sortStables = stables.sort((a,b) => a - b) 
    let moves = 0
    
    for (let i = 0; i < reindeer.length; i++) {
        
        const tmp = sortStables[i] - sortReindeer[i]
        moves += Math.abs(tmp)
    }

    return moves
}
  
module.exports = minMovesToStables