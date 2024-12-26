// 5 ⭐
function execute(code: string): number {
    let acc: number = 0
    
    const processCode = (block: string) => {
        let i: number = 0;
        while (i < block.length) {
            const curr: string = block[i];

            if (curr === '+') {
                acc++;
            } else if (curr === '-') {
                acc--;
            } else if (curr === '[') {
                const end: number = block.indexOf(']', i);
                const newCode: string = block.slice(i + 1, end);

                while (acc !== 0) {
                    processCode(newCode);
                }
                i = end;
            } else if (curr === '{') {
                if (acc === 0) {
                    i = block.indexOf('}', i);
                }
            }
            i++;
        }
    };

    code = code.replaceAll('>', '');
    processCode(code);

    return acc
}