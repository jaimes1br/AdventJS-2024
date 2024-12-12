// Resultado 5 ⭐
function calculatePrice(ornaments: string): number | undefined {
    const cost: { [key:string]: number } = { '*': 1, 'o': 5, '^': 10, '#': 50, '@': 100 }
    let result: number = 0
    let i: number = 1

    for(const o of ornaments){
        result += cost[o] < cost[ornaments[i]]
            ? -cost[o]
            : cost[o]

        i++
    }
    
    return result || undefined
}