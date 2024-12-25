/**
 * @param {object} tree1 - The first binary tree.
 * @param {object} tree2 - The second binary tree.
 * @returns {[boolean, string]}
 */
// 3 ⭐
// function isTreesSynchronized(tree1, tree2) {    
//   const sortKeys = (obj) => {
//     if (obj === null || typeof obj !== 'object') {
//         return obj;
//     }

//     const sortedKeys = Object.keys(obj).sort();
//     const sortedObj = {};

//     for (const key of sortedKeys) {
//         sortedObj[key] = sortKeys(obj[key]);
//     }

//     return sortedObj;
//   }  

//   let tmp = JSON.stringify(tree1)
//   tmp = tmp.replace(/left/g, 'tmpl');
//   tmp = tmp.replace(/right/g, 'left');
//   tmp = tmp.replace(/tmpl/g, 'right');
//   tmp = JSON.parse(tmp);
//   const newTree1 = sortKeys(tmp);
//   const newTree2 = sortKeys(tree2);

//   const result = JSON.stringify(newTree1) === JSON.stringify(newTree2)

//   return [result, tree1.value]
// }

// 5 ⭐
function isTreesSynchronized(tree1, tree2) {
  function check(t1, t2) {
      if (!t1 && !t2) return true;
      if (!t1 || !t2) return false;
      if (t1.value !== t2.value) return false;

      return check(t1.left, t2.right) && check(t1.right, t2.left);
  }

  const result = check(tree1, tree2);
  return [result, tree1.value];
}

module.exports = isTreesSynchronized;