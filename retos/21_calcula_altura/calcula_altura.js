/**
 * @param {{ value: string; left: any; right: any }} tree
 * @returns {number} - Height of the tree.
 */
//Resultado 5 ⭐
function treeHeight(tree) {
    if (!tree) return 0;

    const left = treeHeight(tree.left);
    const right = treeHeight(tree.right);

    return Math.max(left, right) + 1;
}

module.exports = treeHeight

//Resultado 1 ⭐
// function treeHeight(tree) {
    
//     if(!tree ) return 0
//     let height = 0
    
//     const getHeight = (element,acc) => {
//         acc++
//         for(const side of ['right','left']){
//             if(element[side]){
//                 getHeight(element[side],acc)
//             }else{
//                 height = Math.max(height,acc)
//             } 
//         }
//     }

//     getHeight(tree,0)
    
//     return height
// }