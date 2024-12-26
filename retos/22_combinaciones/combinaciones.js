// console.log(generateGiftSets(['car', 'doll', 'puzzle']))
// console.log(generateGiftSets(['a', 'b', 'c','d']))
// console.log(generateGiftSets(['ball']))//[['ball']]
// console.log(generateGiftSets(['game', 'pc'])) // [['game'],['pc'],['game', 'pc']]

/**
 * @param {string[]} gifts - List of unique gifts.
 * @returns {string[][]} - All possible combinations of gifts, sorted by length.
 */
function generateGiftSets(gifts) {
    const result = []

    function getCombinations(sI, currSet) {
        for (let i = sI; i < gifts.length; i++) {
            currSet.push(gifts[i])
            result.push([...currSet])
            getCombinations(i + 1, currSet)
            currSet.pop()
        }
    }

    getCombinations(0, [])

    return result.sort((a, b) => a.length - b.length)
}

module.exports = generateGiftSets