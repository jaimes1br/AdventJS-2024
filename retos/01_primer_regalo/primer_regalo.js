// const gifts1 = [3, 1, 2, 3, 4, 2, 5]
// const preparedGifts1 = prepareGifts(gifts1)
// console.log(preparedGifts1) // [1, 2, 3, 4, 5]

/**
 * @param {number[]} gifts - The array of gifts to prepare
 * @returns {number[]} An array with the prepared gifts
 */
function prepareGifts(gifts) {
    
    const result =  [...new Set(gifts)]; 
    return result.sort((a,b) => a - b);
}
 
module.exports = prepareGifts