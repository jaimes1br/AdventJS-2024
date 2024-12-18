// const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
// Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
// <Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

// console.log(findInAgenda(agenda, '34-600-123-456'))
// // { name: "Juan Perez", address: "Calle Gran Via 12" }
// console.log(findInAgenda(agenda, '600-987'))
// // { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }
// console.log(findInAgenda(agenda, '111'))
// // null
// // Explicación: No hay resultados
// console.log(findInAgenda(agenda, '1'))
// // null
// // Explicación: Demasiados resultados

/**
 * @param {string} agenda
 * @param {string} phone
 * @returns {{ name: string, address: string } | null}
 */
function findInAgenda(agenda, phone) {
    const info = agenda.split('\n')

    const r = [];
    for(const i of info){
        if(i.includes(phone)) r.push(i)
    }

    if( r.length === 0 || r.length > 1)
        return null
    
    const rgxName = /<[A-Za-z\s]+>/g
    const rgxNumber = /\+\d{1,2}[-\d{3}]*/g
    const rgxCleanName = /<|>/g

    let tmpInfo = r[0]
    let name = tmpInfo.match(rgxName)[0]
    const num = tmpInfo.match(rgxNumber)[0]
    const address = tmpInfo.replace(name,'').replace(num,'').trim()
    name = name.replace(rgxCleanName,'')

    return { name, address }
}

module.exports = findInAgenda
    