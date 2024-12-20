/**
 * @param {number} weight - Total weight of the gifts
 * @returns {string} - Stacked boxes represented as ASCII art
 */
function distributeWeight(weight) {
    const boxRepresentations = {
        1: [" _ ", "|_|"] ,
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }
    
    const boxes = [10,5,2,1]
    const numBoxes = []
    let rest = weight

    for(const box of boxes){
        const q = Math.floor(rest / box)
        rest = rest % box
    
        if( q ){
            for (let i = 0; i < q; i++) {
                numBoxes.unshift(box)
            }
        }
    }  

    const result = []
    let i = 0

    while( i < numBoxes.length){
        const tmpBox = boxRepresentations[numBoxes[i]]

        if(numBoxes[i+1] && numBoxes[i] < numBoxes[i+1]){
            let last = tmpBox.at(-1)
            if(numBoxes[i+1] === 2){
                last = last.padEnd(4,'_')
            }else if(numBoxes[i+1] === 5){
                last = last.padEnd(6,'_')
            }else {
                last = last.padEnd(10,'_')
            }

            tmpBox[tmpBox.length - 1 ] = last
            const nBox = ( i === 0) 
                ? tmpBox.slice()
                : tmpBox.slice(1)
                
            result.push(...nBox)

        }else if(i === 0){
            result.push(...tmpBox)
        }else{
            const [ , ...rest ] = tmpBox
            result.push(...rest)
        }

        i++
    }

    return result.join('\n');
}

module.exports = distributeWeight