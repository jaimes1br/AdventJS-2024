// const shoes = [
//     { type: 'I', size: 38 },
//     { type: 'R', size: 38 },
//     { type: 'R', size: 42 },
//     { type: 'I', size: 41 },
//     { type: 'I', size: 42 }
//   ]
  
// console.log(organizeShoes(shoes)); // [38, 42]

/**
 * @param {{ type: 'I' | 'R', size: number }[]} shoes
 * @returns {number[]} Available shoes 
 */
function organizeShoes(shoes) {

    const result = [];
    const tmp = {};

    for (const { type, size } of shoes){
        if(!tmp[size]){
            tmp[size] = { I: 0, R: 0 };
            tmp[size][type]++;
        }else{
            tmp[size][type]++
        } 
    }

    for( const [size, { I, R }] of Object.entries(tmp)){
        const min = Math.min(I,R); 
        for (let i = 0; i < min; i++) {
            result.push(+size)
        }
    }

    return result
}

module.exports = organizeShoes;