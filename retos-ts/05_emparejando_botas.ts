// Resultado 5 ⭐
type Shoe = {
    type: 'I' | 'R'
    size: number
}

type tempPair = {
    [key: number]: {
        I: number;
        R: number;
    };
};

function organizeShoes(shoes: Shoe[]): number[] {

    const result: number[] = [];
    const tmp: tempPair = {};

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