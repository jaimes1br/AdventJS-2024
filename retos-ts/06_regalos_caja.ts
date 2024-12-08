// Resultado 5 ⭐
function inBox(box: string[]): boolean {
    for (let i = 1; i < box.length - 1; i++) {
        const line: string = box[i]
        const j: number = line.indexOf('*');    
        
        if(j !== 0 && j !== line.length - 1 && j !== -1 ){
            return true
        }
    }

    return false
}
