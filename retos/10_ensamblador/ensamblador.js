const instructions = [
    'MOV -1 C', // copia -1 al registro 'C',
    'INC C', // incrementa el valor del registro 'C'
    'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
    'MOV C A', // copia el registro 'C' al registro 'a',
    'INC A' // incrementa el valor del registro 'a'
]

/**
    Ejecución paso a paso:
    0: MOV -1 C -> El registro C recibe el valor -1
    1: INC C    -> El registro C pasa a ser 0
    2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
    1: INC C    -> El registro C pasa a ser 1
    2: JMP C 1  -> C es 1, ignoramos la instrucción
    3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
    4: INC A    -> El registro A pasa a ser 2
 */
  
console.log(compile(instructions)) // -> 2

/**
 * @param {string[]} instructions - The instructions to execute
 * @returns {number} The value of the register A
 */
function compile(instructions) {
    
    const result = {};
    let index = 0;

    const operations = {
        DEC: (r) => result[r]--,
        INC: (r) => result[r]++,
        MOV: (x,y) => result[y] = isNaN(x) ? result[x] : +x,
        JMP: (r,i) => { if(result[r] === 0) index = i - 1 }          
    }

    while(index < instructions.length){
        const [comm, x, y] = instructions[index].split(' ');

        if(result[x] === undefined ) result[x] = 0;
        operations[comm](x, y)        
        index++
    }

    return result['A']
}

module.exports = compile