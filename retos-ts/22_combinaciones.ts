// Resultado 5 ⭐
function generateGiftSets(gifts: string[]): string[][] {
    const result: string[][] = []

    function getCombinations(sI: number, currSet: string[]) {
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