// Resultado 5 ⭐
function drawRace(indices: number[], length: number): string {
    const race: string[] = [];

    for (let i = 0; i < indices.length; i++) {
        const track: number = indices[i];
        const tmpDraw: string[] = ('~').repeat(length).split('');


        if(track !== 0){
            (track > 0) 
                ? tmpDraw[track] = 'r'
                : tmpDraw[length + track] = 'r'
        }

        const spaces: string = (' ').repeat(indices.length - (i + 1));
        race.push(spaces + tmpDraw.join('') + ` /${i+1}`);
    }

    return race.join('\n');
}