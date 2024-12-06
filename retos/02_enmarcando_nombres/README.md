# Reto #2: 🖼 Enmarcando nombres

## Fácil 🟢

**Santa Claus** 🎅 quiere enmarcar los nombres de los niños buenos para decorar su taller 🖼️, pero el marco debe cumplir unas reglas específicas. Tu tarea es ayudar a los elfos a generar este marco mágico.

**Reglas:**

- **Dado un array de nombres, debes crear un marco rectangular que los contenga a todos.**
- **Cada nombre debe estar en una línea, alineado a la izquierda.**
- **El marco está construido con * y tiene un borde de una línea de ancho.**
- **La anchura del marco se adapta automáticamente al nombre más largo más un margen de 1 espacio a cada lado.**

Ejemplo de funcionamiento:

```javascript
createFrame(['midu', 'madeval', 'educalvolpz'])

// Resultado esperado:
***************
* midu        *
* madeval     *
* educalvolpz *
***************

createFrame(['midu'])

// Resultado esperado:
********
* midu *
********

createFrame(['a', 'bb', 'ccc'])

// Resultado esperado:
*******
* a   *
* bb  *
* ccc *
*******

createFrame(['a', 'bb', 'ccc', 'dddd'])
```

## Solución propuesta

```javascript
function createFrame(names) {
    
    let max = 0;
    names.forEach(n => {
        if (n.length > max) max = n.length
    });

    const top = '*'.repeat(max + 4);
    
    const frame = names.map(n => {
        return `* ${n + ' '.repeat(max - (n.length))} *`
    });

    return top + '\n' + frame.join('\n') + '\n' + top
}
```

---

### Resultado: ⭐ ⭐ ⭐ ⭐
