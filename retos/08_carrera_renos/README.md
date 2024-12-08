# Reto #2: 🦌 La carrera de los renos

## Fácil 🟢

**¡Es hora de seleccionar a los renos más rápidos para los viajes de Santa!** 🦌🎄
Santa Claus ha organizado unas emocionantes carreras de renos para decidir cuáles están en mejor forma.

Tu tarea es mostrar el progreso de cada reno en una pista de nieve **en formato isométrico.**

La información que recibes:

- **``indices``: Un array de enteros que representan el progreso de cada reno en la pista:**
- **``0``: El carril está vacío.**
- **Número positivo: La posición actual del reno desde el inicio de la pista.**
- **Número negativo: La posición actual del reno desde el final de la pista.**
- **``length``: La longitud de cada carril.**

Devuelve un string que represente la pista de la carrera:

- **Cada carril tiene exactamente ``length`` posiciones llenas de nieve (``~``).**
- **Cada reno se representa con la letra ``r``.**
- **Los carriles están numerados al final con ``/1``, ``/2``, etc.**
- **La vista es *isométrica*, por lo que los carriles inferiores están desplazados hacia la derecha.**

*Ejemplos:*

```javascript
drawRace([0, 5, -3], 10)
/*
  ~~~~~~~~~~ /1
 ~~~~~r~~~~ /2
~~~~~~~r~~ /3
*/

drawRace([2, -1, 0, 5], 8)
/*
   ~~r~~~~~ /1
  ~~~~~~~r /2
 ~~~~~~~~ /3
~~~~~r~~ /4
*/

drawRace([3, 7, -2], 12)
/*
  ~~~r~~~~~~~~ /1
 ~~~~~~~~r~~~ /2
~~~~~~~~~r~~ /3
*/

```

## Solución propuesta

```javascript
function drawRace(indices, length) {
    const race = [];

    for (let i = 0; i < indices.length; i++) {
        const track = indices[i];
        const tmpDraw = ('~').repeat(length).split('');


        if(track !== 0){
            (track > 0) 
                ? tmpDraw[track] = 'r'
                : tmpDraw[length + track] = 'r'
        }

        const spaces = (' ').repeat(indices.length - (i + 1));
        race.push(spaces + tmpDraw.join('') + ` /${i+1}`);
    }

    return race.join('\n');
}
```

---

### Resultado: ⭐ ⭐ ⭐ ⭐ ⭐
