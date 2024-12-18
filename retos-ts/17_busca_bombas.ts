// Resultado 5 ⭐ 
function detectBombs(grid: boolean[][]): number[][]{    
    return grid.map((row,i) => {
        return row.map((_,j) => {
            let bombs: number = 0

            for (let r = -1; r < 2; r++) {
                for (let c = -1; c < 2; c++) {
                    if(c === 0 && r === 0) continue;
                    const x: number = i + r
                    const y: number = j + c
             
                    if(grid[x] && grid[x][y]) bombs++
       
                }
            }

            return bombs
        })
    })

}