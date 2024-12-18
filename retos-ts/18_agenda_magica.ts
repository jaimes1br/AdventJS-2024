// Resultado 5 ⭐
function findInAgenda(agenda: string, phone: string): { name: string; address: string } | null {
    const info = agenda.split('\n')

    const r: string[] = [];
    for(const i of info){
        if(i.includes(phone)) r.push(i)
    }

    if( r.length === 0 || r.length > 1)
        return null
    
    const rgxName = /<[A-Za-z\s]+>/g
    const rgxNumber = /\+\d{1,2}[-\d{3}]*/g
    const rgxCleanName = /<|>/g

    let tmpInfo: string = r[0]
    let name: string = tmpInfo.match(rgxName)![0]
    const num: string = tmpInfo.match(rgxNumber)![0]
    const address = tmpInfo.replace(name,'').replace(num,'').trim()
    name = name.replace(rgxCleanName,'')
    
    return { name, address }
    
}
      