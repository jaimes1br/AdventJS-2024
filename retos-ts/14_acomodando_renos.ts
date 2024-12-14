// Resultado 5 ⭐
function minMovesToStables(reindeer: number[], stables: number[]): number {
    const sortReindeer: number[] = reindeer.sort((a,b) => a - b) 
    const sortStables: number[] = stables.sort((a,b) => a - b) 
    let moves: number = 0
    
    for (let i = 0; i < reindeer.length; i++) {
        
        const tmp = sortStables[i] - sortReindeer[i]
        moves += Math.abs(tmp)
    }

    return moves
}
  