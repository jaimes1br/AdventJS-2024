# Reto #18: 📇 La agenda mágica de Santa  

## Difícil 🔴

Santa Claus tiene una agenda mágica 📇 donde guarda las direcciones de los niños para entregar los regalos. El problema: **la información de la agenda está mezclada y malformateada.** Las líneas contienen un número de teléfono mágico, el nombre de un niño y su dirección, pero todo está rodeado de caracteres extraños.

Santa necesita tu ayuda para encontrar información específica de la agenda. Escribe una función que, **dado el contenido de la agenda y un número de teléfono, devuelva el nombre del niño y su dirección.**

Ten en cuenta que en la agenda:

- **Los números de teléfono están formateados como +X-YYY-YYY-YYY (donde X es uno o dos dígitos, e Y es un dígito).**
- **El nombre de cada niño está siempre entre < y >**

La idea es que escribas una funcióna que, pasándole el teléfono completo o una parte, devuelva el nombre y dirección del niño. **Si no encuentra nada o hay más de un resultado**, debes devolver ``null``.

```javascript
const agenda = `+34-600-123-456 Calle Gran Via 12 <Juan Perez>
Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York`

findInAgenda(agenda, '34-600-123-456')
// { name: "Juan Perez", address: "Calle Gran Via 12" }

findInAgenda(agenda, '600-987')
// { name: "Maria Gomez", address: "Plaza Mayor 45 Madrid 28013" }

findInAgenda(agenda, '111')
// null
// Explicación: No hay resultados

findInAgenda(agenda, '1')
// null
// Explicación: Demasiados resultados
```

## Solución propuesta

```javascript
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
```

---

### Resultado: ⭐ ⭐ ⭐ ⭐ ⭐
