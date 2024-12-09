// const board = ['·····', '*····', '@····', 'o····', 'o····']
// console.log(moveTrain(board, 'U')) // 'eat'
// console.log(moveTrain(board, 'D')) // 'crash'
// console.log(moveTrain(board, 'L'))// 'crash
// console.log(moveTrain(board, 'R')) // 'none

/**
 * @param {string[]} board - Represent the train situation
 * @param {'U' | 'D' | 'R' | 'L' } mov - Movement direction
 * @returns {'none' | 'crash' | 'eat'}
 */
function moveTrain(board, mov) {
    
    let row, line;

    for (const [i,r] of board.entries()) {
        const index = r.indexOf('@');
        if (index !== -1) {
            row = i;
            line = index;
            break;
        }
    }

    const moves = {
        'U': [row - 1, line],
        'D': [row + 1, line],
        'R': [row, line + 1],
        'L': [row, line - 1],
    }

    const [r,l] = moves[mov]
   
    const result = {
        '*': 'eat',
        '·': 'none',
        '@': 'crash',
        'o': 'crash' 
    }

    return result[board[r]?.[l]] ?? 'crash';
}

module.exports = moveTrain;