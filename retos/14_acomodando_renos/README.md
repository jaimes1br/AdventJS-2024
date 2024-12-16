# Reto #14: 🦌 Acomodando los renos

## Fácil 🟢

Los renos necesitan moverse para ocupar los establos, pero **no puede haber más de un reno por establo.** Además, para que los renos estén cómodos, debemos minimizar la distancia total que recorren para acomodarse.

Tenemos dos parámetros:

- **``reindeer``: Un array de enteros que representan las posiciones de los renos.**
- **``stables``: Un array de enteros que representan las posiciones de los establos.**

Hay que mover cada reno, desde su posición actual, hasta un establo. Pero hay que tener en cuenta que **sólo puede haber un reno por establo.**

Tu tarea es calcular el **mínimo número de movimientos necesarios** para que todos los renos acaben en un establo.

*Nota:* Ten en cuenta que **el array de establos siempre tendrá el mismo tamaño que el array de renos** y que **siempre los establos serán únicos.**
Ejemplo

```javascript
minMovesToStables([2, 6, 9], [3, 8, 5]) // -> 3
// Explicación:
// Renos en posiciones: 2, 6, 9
// Establos en posiciones: 3, 8, 5
// 1er reno: se mueve de la posición 2 al establo en la posición 3 (1 movimiento).
// 2do reno: se mueve de la posición 6 al establo en la posición 5 (1 movimiento)
// 3er reno: se mueve de la posición 9 al establo en la posición 8 (1 movimiento).
// Total de movimientos: 1 + 1 + 1 = 3 movimientos

minMovesToStables([1, 1, 3], [1, 8, 4])
// Explicación:
// Renos en posiciones: 1, 1, 3
// Establos en posiciones: 1, 8, 4
// 1er reno: no se mueve (0 movimientos)
// 2do reno: se mueve de la posición 1 al establo en la posición 4 (3 movimientos)
// 3er reno: se mueve de la posición 3 al establo en la posición 8 (5 movimientos)
// Total de movimientos: 0 + 3 + 5 = 8 movimientos
```

## Solución propuesta

```javascript
function minMovesToStables(reindeer, stables) {
    const sortReindeer = reindeer.sort((a,b) => a - b) 
    const sortStables = stables.sort((a,b) => a - b) 
    let moves = 0
    
    for (let i = 0; i < reindeer.length; i++) {
        
        const tmp = sortStables[i] - sortReindeer[i]
        moves += Math.abs(tmp)
    }

    return moves
}
```

---

### Resultado: ⭐ ⭐ ⭐ ⭐ ⭐
