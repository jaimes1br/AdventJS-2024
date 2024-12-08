// Resultado 5 ⭐
function fixPackages(packages: string): string {
    let tmpPack: string = packages;

    while (tmpPack.includes('(')) {
        const startIndex: number = tmpPack.lastIndexOf('(');
        const endIndex: number = tmpPack.indexOf(')',startIndex);

        const newPack: string = tmpPack.substring(startIndex,endIndex + 1);
        const reverse: string = [...newPack].slice(1,-1).reverse().join("")
        tmpPack = tmpPack.replace(newPack,reverse);

    } 

    return tmpPack;
}