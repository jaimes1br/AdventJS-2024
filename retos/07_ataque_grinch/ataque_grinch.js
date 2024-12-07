// console.log(fixPackages('a(cb)de')) // -> abcde

/** 
 * @param {string} packages with parentheses
 *  @returns {string} Fixed and sorted packages
 */

// v4 Restultado: 5
function fixPackages(packages) {
    let tmpPack = packages;

    while (tmpPack.includes('(')) {
        const startIndex = tmpPack.lastIndexOf('(');
        const endIndex = tmpPack.indexOf(')',startIndex);

        const newPack = tmpPack.substring(startIndex,endIndex + 1);
        const reverse = [...newPack].slice(1,-1).reverse().join("")
        tmpPack = tmpPack.replace(newPack,reverse);

    } 

    return tmpPack;
}

module.exports = fixPackages;



//v3 Resutlado: 4
// function fixPackages(packages) {
//     const rgx = /\(([^()]*)\)/;

//     function checkParentheses(pack) {
//         const match = pack.match(rgx);

//         if (match) {
//             const tmpPack = match[1].split("").reverse().join("");
//             const newPack = pack.replace(rgx, tmpPack);

//             return checkParentheses(newPack);
//         }

//         return pack;
//     }

//     const result = checkParentheses(packages); 
//     return result;
// }

// v2 Restultado: 3
// function fixPackages(packages) {
   
//     function checkParentheses(pack) {
//         if(pack.includes('(')){
//             let startIndex = pack.lastIndexOf('(');
//             const endIndex = pack.indexOf(')',startIndex);
            
//             if(endIndex < startIndex){
//                 startIndex = pack.indexOf('(');
//             }
            
//             const tmpPack = pack.slice(startIndex + 1,endIndex).split("").reverse().join("")
            
//             const tmpl = pack.slice(0,startIndex);
//             const tmpr = pack.slice(endIndex + 1);
            
//             pack = tmpl + tmpPack + tmpr
//             return checkParentheses(pack)  
//         }

//         return pack
//     }

//     return checkParentheses(packages)
// }

//v1 Error: Script execution timed out after 1000ms
// function fixPackages(packages) {
//     let tmp = packages;

//     while (tmp.includes('(')){
//         const startIndex = tmp.lastIndexOf('(');
//         const endIndex = tmp.indexOf(')');
        
//         const tmpPack = tmp.slice(startIndex + 1,endIndex)
//         const tmpl = tmp.slice(0,startIndex);
//         const tmpr = tmp.slice(endIndex + 1,);

//         tmp = tmpl + tmpPack.split("").reverse().join("") + tmpr
//     }

//     return tmp
// }
 
