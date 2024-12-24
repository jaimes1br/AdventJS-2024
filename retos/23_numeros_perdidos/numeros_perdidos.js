/**
 * @param {number[]} nums - List of integers.
 * @returns {number[]} - List of missing numbers.
 */

// 5 ⭐
function findMissingNumbers(nums) {
    const limit = Math.max(...nums);
    let values = new Array(limit).fill().map((_,i) => i + 1)    
    
    const c1 = new Set(nums)
    const c2 = new Set(values)

    return [...c2.difference(c1)]
}


// 4 ⭐
// function findMissingNumbers(nums) {
//     const limit = Math.max(...nums);
    
//     const missing = [];

//     for(let i = 1; i <= limit; i++){
//         if(nums.indexOf(i) === -1) 
//             missing.push(i)
//     }
//     return missing
// }
    
module.exports = findMissingNumbers