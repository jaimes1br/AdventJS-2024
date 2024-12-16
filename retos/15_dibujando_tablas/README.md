# Reto #15: ✏ Dibujando tablas  

## Fácil 🟢

**Al Polo Norte ha llegado ChatGPT** y el elfo *Sam Elfman* está trabajando en una aplicación de administración de regalos y niños.

Para mejorar la presentación, quiere crear una función ``drawTable`` que reciba un array de objetos y lo convierta en una tabla de texto.

La tabla dibujada debe representar los datos del objeto de la siguiente manera:

- **Tiene una cabecera con el nombre de la columna.**
- **El nombre de la columna pone la primera letra en mayúscula.**
- **Cada fila debe contener los valores de los objetos en el orden correspondiente.**
- **Cada valor debe estar alineado a la izquierda.**
- **Los campos dejan siempre un espacio a la izquierda.**
- **Los campos dejan a la derecha el espacio necesario para alinear la caja.**

Mira el ejemplo para ver cómo debes dibujar la tabla:

```javascript
drawTable([
  { name: 'Alice', city: 'London' },
  { name: 'Bob', city: 'Paris' },
  { name: 'Charlie', city: 'New York' }
])
// +---------+-----------+
// | Name    | City      |
// +---------+-----------+
// | Alice   | London    |
// | Bob     | Paris     |
// | Charlie | New York  |
// +---------+-----------+

drawTable([
  { gift: 'Doll', quantity: 10 },
  { gift: 'Book', quantity: 5 },
  { gift: 'Music CD', quantity: 1 }
])
// +----------+----------+
// | Gift     | Quantity |
// +----------+----------+
// | Doll     | 10       |
// | Book     | 5        |
// | Music CD | 1        |
// +----------+----------+
```

## Solución propuesta

```javascript
function drawTable(data) {
    const sizes = []
    const headers = []
    for(const v of Object.keys(data[0])){
        const tmp = data.map( ob => `${ob[v]}`)
        const nv = v[0].toUpperCase() + v.slice(1)
        tmp.unshift(nv)
        headers.push(nv)
        const max = tmp.reduce((a, b) => 
            a.length > b.length ? a : b, '').length;
        
        sizes.push(max)
    }

    const result = []
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
```

---

### Resultado: ⭐ ⭐ ⭐ ⭐ ⭐
