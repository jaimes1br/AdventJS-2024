/** @param {string} ornaments
 * @return {number} - The price of the tree
 */
function calculatePrice(ornaments) {
    const cost = { '*': 1, 'o': 5, '^': 10, '#': 50, '@': 100 }
    let result = 0
    let i = 1

    for(const o of ornaments){
        result += cost[o] < cost[ornaments[i]]
            ? -cost[o]
            : cost[o]

        i++
    }
    
    return result || undefined
}

module.exports = calculatePrice