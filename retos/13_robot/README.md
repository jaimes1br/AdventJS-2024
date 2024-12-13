# Reto #13: 🤖 ¿El robot está de vuelta?  

## Difícil 🔴

os elfos del Polo Norte han creado un **robot** 🤖 especial que ayuda a Papá Noel a distribuir regalos dentro de un gran almacén. **El robot se mueve en un plano 2D y partimos desde el origen (0, 0).**

Queremos saber si, tras ejecutar una serie de movimientos, el robot vuelve a estar justo donde empezó.

Las órdenes básicas del robot son:

- **L: Mover hacia la izquierda**
- **R: Mover hacia la derecha**
- **U: Mover hacia arriba**
- **D: Mover hacia abajo**

Pero también tiene ciertos modificadores para los movimientos:

- **``*``: El movimiento se realiza con el doble de intensidad (ej: ``*R`` significa ``RR``)**
- **``!``: El siguiente movimiento se invierte (ej: ``R!L`` se considera como ``RR``)**
- **``?``: El siguiente movimiento se hace sólo si no se ha hecho antes (ej: ``R?R`` significa ``R``)**

Nota: Cuando el movimiento se invierte con ``!`` **se contabiliza el movimiento invertido y no el original.** Por ejemplo, ``!U?U`` invierte el movimiento de ``U``, por lo que contabiliza que se hizo el movimiento ``D`` pero no el ``U``. Así ``!U?U`` se traduce como ``D?U`` y, por lo tanto, se haría el movimiento ``U`` final.

Debes devolver:

- **``true``: si el robot vuelve a estar justo donde empezó**
- **``[x, y]``: si el robot no vuelve a estar justo donde empezó, devolver la posición donde se detuvo**

```javascript
isRobotBack('R')     // [1, 0]
isRobotBack('RL')    // true
isRobotBack('RLUD')  // true
isRobotBack('*RU')   // [2, 1]
isRobotBack('R*U')   // [1, 2]
isRobotBack('LLL!R') // [-4, 0]
isRobotBack('R?R')   // [1, 0]
isRobotBack('U?D')   // true
isRobotBack('R!L')   // [2,0]
isRobotBack('U!D')   // [0,2]
isRobotBack('R?L')   // true
isRobotBack('U?U')   // [0,1]
isRobotBack('*U?U')  // [0,2]
isRobotBack('U?D?U') // true

// Ejemplos paso a paso:
isRobotBack('R!U?U') // [1,0]
// 'R'  -> se mueve a la derecha 
// '!U' -> se invierte y se convierte en 'D'
// '?U' -> se mueve arriba, porque no se ha hecho el movimiento 'U'

isRobotBack('UU!U?D') // [0,1]
// 'U'  -> se mueve arriba
// 'U'  -> se mueve arriba
// '!U' -> se invierte y se convierte en 'D'
// '?D' -> no se mueve, ya que ya se hizo el movimiento 'D'
```

## Solución propuesta

```javascript
function isRobotBack(moves) {
    let finalmoves = ''
    let i = 0
    const changes = {
        U: 'D',
        D: 'U',
        R: 'L',
        L: 'R'
    }

    while(i < moves.length){
        const move = moves[i];    
        if(move === '*'){
            finalmoves += moves[i + 1]
        }else if(move === '!'){
            const tmpmove = moves[i+1]
            finalmoves += changes[tmpmove] 
            i++         
        }else{
            finalmoves += move
        }

        i++
    }

    while(finalmoves.includes('?')){
        const index = finalmoves.indexOf('?');
        const values = finalmoves.substring(index,index+2);
        const temp = finalmoves.slice(0,index)
    
        if(!temp.includes(values[1])){
            finalmoves = finalmoves.replace(values,values[1])
        }else{
            finalmoves = finalmoves.replace(values,'')
        }
    }

    let x = 0
    let y = 0

    const operations = {
        R: () => y++,
        L: () => y--,
        U: () => x++,
        D: () => x--,
    }

    for(const m of finalmoves){
        operations[m]()
    }

    return x === 0 && y === 0 || [y , x]
}
```

---

### Resultado: ⭐ ⭐ ⭐ ⭐ ⭐
