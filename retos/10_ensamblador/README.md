# Reto #10: 👩‍💻 El ensamblador élfico  

## Medio 🟠

Los elfos programadores están creando un **pequeño ensamblador mágico** para controlar las máquinas del taller de Santa Claus.

Para ayudarles, vamos a implementar un intérprete sencillo que soporte las siguientes instrucciones mágicas:

- **``MOV x y``: Copia el valor ``x`` (puede ser un número o el contenido de un registro) en el registro ``y``**
- **``INC x``: Incrementa en 1 el contenido del registro ``x``**
- **``DEC x``: Decrementa en 1 el contenido del registro ``x``**
- **``JMP x y``: Si el valor del registro ``x`` es ``0`` entonces salta a la instrucción en el índice ``y`` y sigue ejecutándose el programa desde ahí.**

Comportamiento esperado:

- **Si se intenta acceder, incrementar o decrementar a un registro que no ha sido inicializado, se tomará el valor ``0`` por defecto.**
- **El salto con ``JMP`` es absoluto y lleva al índice exacto indicado por ``y``.**
- **Al finalizar, el programa debe devolver el contenido del registro ``A``. Si ``A`` no tenía un valor definido, retorna ``undefined``.**

```javascript
const instructions = [
  'MOV -1 C', // copia -1 al registro 'C',
  'INC C', // incrementa el valor del registro 'C'
  'JMP C 1', // salta a la instrucción en el índice 1 si 'C' es 0
  'MOV C A', // copia el registro 'C' al registro 'a',
  'INC A' // incrementa el valor del registro 'a'
]

compile(instructions) // -> 2

/**
 Ejecución paso a paso:
 0: MOV -1 C -> El registro C recibe el valor -1
 1: INC C    -> El registro C pasa a ser 0
 2: JMP C 1  -> C es 0, salta a la instrucción en el índice 1
 1: INC C    -> El registro C pasa a ser 1
 2: JMP C 1  -> C es 1, ignoramos la instrucción
 3: MOV C A  -> Copiamos el registro C en A. Ahora A es 1
 4: INC A    -> El registro A pasa a ser 2
 */

```

``Nota:`` Los registros que no han sido inicializados previamente se inicializan a ``0``.

## Solución propuesta

```javascript
function compile(instructions) {
    
    const result = {};
    let index = 0;

    const operations = {
        DEC: (r) => result[r]--,
        INC: (r) => result[r]++,
        MOV: (x,y) => result[y] = isNaN(x) ? result[x] : +x,
        JMP: (r,i) => { if(result[r] === 0) index = i - 1 }          
    }

    while(index < instructions.length){
        const [comm, x, y] = instructions[index].split(' ');

        if(result[x] === undefined ) result[x] = 0;
        operations[comm](x, y)        
        index++
    }

    return result['A']
}
```

---

### Resultado: ⭐ ⭐ ⭐ ⭐ ⭐
