// Resultado 4 ⭐
function drawTable(data: Array<Record<string, string | number>>): string {
    const sizes: number[] = []
    const headers: string[] = []
    for(const v of Object.keys(data[0])){
        const tmp = data.map( ob => `${ob[v]}`)
        const nv: string = v[0].toUpperCase() + v.slice(1)
        tmp.unshift(nv)
        headers.push(nv)
        const max = tmp.reduce((a, b) => 
            a.length > b.length ? a : b, '').length;
        
        sizes.push(max)
    }

    const result: string[] = []
    data.forEach(row => {
        let tmp = '|'
        Object.keys(row).forEach((k,i) => {
            let tstr = `${row[k]}`
            tmp += ` ${tstr.padEnd(sizes[i],' ')} |`
        })
        result.push(tmp)
    })
    
    let sep = '+'
    let fh = '|'
    headers.forEach((h,i) => {
        sep += '-'.repeat(sizes[i] + 2) + '+'
        fh += ` ${h.padEnd(sizes[i],' ')} |`
    })

    result.unshift(sep,fh,sep)
    result.push(sep)

    return result.join('\n')
}

module.exports = drawTable