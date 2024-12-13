/** @param {string} moves
 * @returns {true|[number, number]} Return true if robot returns or position
 */
function isRobotBack(moves) {
    let finalmoves = ''
    let i = 0
    const changes = {
        U: 'D',
        D: 'U',
        R: 'L',
        L: 'R'
    }

    while(i < moves.length){
        const move = moves[i];    
        if(move === '*'){
            finalmoves += moves[i + 1]
        }else if(move === '!'){
            const tmpmove = moves[i+1]
            finalmoves += changes[tmpmove] 
            i++         
        }else{
            finalmoves += move
        }

        i++
    }

    while(finalmoves.includes('?')){
        const index = finalmoves.indexOf('?');
        const values = finalmoves.substring(index,index+2);
        const temp = finalmoves.slice(0,index)
    
        if(!temp.includes(values[1])){
            finalmoves = finalmoves.replace(values,values[1])
        }else{
            finalmoves = finalmoves.replace(values,'')
        }
    }

    let x = 0
    let y = 0

    const operations = {
        R: () => y++,
        L: () => y--,
        U: () => x++,
        D: () => x--,
    }

    for(const m of finalmoves){
        operations[m]()
    }

    return x === 0 && y === 0 || [y , x]
}

module.exports = isRobotBack