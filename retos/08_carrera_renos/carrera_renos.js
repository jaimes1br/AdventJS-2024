// console.log(drawRace([0, 5, -3], 10));
// console.log(drawRace([2, -1, 0, 5], 8))
// console.log(drawRace([3, 7, -2], 12))

/**
 * @param {number[]} indices - The reno indices
 * @param {number} length - The length of the race
 * @returns {string} The reno race
 */
function drawRace(indices, length) {
    const race = [];

    for (let i = 0; i < indices.length; i++) {
        const track = indices[i];
        const tmpDraw = ('~').repeat(length).split('');


        if(track !== 0){
            (track > 0) 
                ? tmpDraw[track] = 'r'
                : tmpDraw[length + track] = 'r'
        }

        const spaces = (' ').repeat(indices.length - (i + 1));
        race.push(spaces + tmpDraw.join('') + ` /${i+1}`);
    }

    return race.join('\n');
}

module.exports = drawRace;