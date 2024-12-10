// Resultado 4 ⭐
function compile (instructions: string[]): number {
        
    const result: { [key: string]: number } = {};
    let index: number = 0;

    const operations = {
        DEC: (r: string) => result[r]--,
        INC: (r: string) => result[r]++,
        MOV: (x: string, y: string) => result[y] = isNaN(Number(x)) ? result[x] : +x,
        JMP: (r: string, i: string) => { if(result[r] === 0) index = Number(i) - 1 }          
    }

    while(index < instructions.length){
        const [comm, x, y] = instructions[index].split(' ');

        if(result[x] === undefined ) result[x] = 0;
        operations[comm](x, y)        
        index++
    }

    return result['A']
  }