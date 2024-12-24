// 5 ⭐ 
function findMissingNumbers(nums: number[]): number[] {
    const limit:number = Math.max(...nums);
    let values = new Array(limit).fill(0).map((_,i) => i + 1)    
    
    const c1 = new Set(nums)
    const c2 = new Set(values)

    return [...c2.difference(c1)]
}