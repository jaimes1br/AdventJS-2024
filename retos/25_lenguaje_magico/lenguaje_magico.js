console.log(execute(`>+++[-]`))
console.log(execute(`-[+{++}]++{[-]}++`))
/**
 * @param {string} code - The magical program to execute
 * @returns {number} - The final value after executing the program
 */
// 5 ⭐
function execute(code) {
    let acc = 0
    
    const processCode = (block) => {
        let i = 0;
        while (i < block.length) {
            const curr = block[i];

            if (curr === '+') {
                acc++;
            } else if (curr === '-') {
                acc--;
            } else if (curr === '[') {
                const end = block.indexOf(']', i);
                const newCode = block.slice(i + 1, end);

                while (acc !== 0) {
                    processCode(newCode);
                }
                i = end;
            } else if (curr === '{') {
                if (acc === 0) {
                    i = block.indexOf('}', i);
                }
            }
            i++;
        }
    };

    code = code.replaceAll('>', '');
    processCode(code);

    return acc
}

// 1 ⭐
// function execute(code) {
//     let i = 0
//     let acc = 0

//     const bucle = (inst) => {
//         while(acc !== 0){
//             for (let j = 0; j < inst.length; j++) {
//                 const c = inst[j]
//                 if(c === '}') continue
//                 if(c === '['){
//                     let to = code.indexOf(']',j)
//                     let range = code.slice(j+1,to)
//                     bucle(range)  
//                 }if( c === '{'){
//                     if( !acc ){
//                         j = code.indexOf('}',j)
//                     }     
//                 }else{
//                     acc += c === '+' ? 1 : -1
//                 }
//             }
//         }
//     }

//     code = code.replaceAll('>','')

//     while (i < code.length) {
//         let curr = code[i];
//         if( curr === '}' || curr === '>'){
//             i++
//             continue
//         }

//         if( curr === '{'){
//             if( !acc ){
//                 i = code.indexOf('}',i)
//             }     
//         }else if( curr === '['){
//             if( !acc ){
//                 i = code.indexOf(']',i)
//             }else{
//                 let to = code.indexOf(']',i)
//                 let range = code.slice(i+1,to)
//                 bucle(range)  
//                 i = to
//             }
//         }else{
//             acc += curr === '+' ? 1 : -1
//         }
        
//         i++    
//     }
    
//     return acc
// }

module.exports = execute