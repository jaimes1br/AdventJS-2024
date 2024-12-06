# Reto #5: 👞 Emparejando botas

## Fácil 🟢

**Los elfos 🧝🧝‍♂️ de Santa Claus** han encontrado un montón de botas mágicas desordenadas en el taller. Cada bota se describe por dos valores:

- **type indica si es una bota izquierda (I) o derecha (R).**
- **size indica el tamaño de la bota.**

Tu tarea es ayudar a los elfos a emparejar todas las botas del mismo tamaño que tengan izquierda y derecha. Para ello, debes devolver una lista con los pares disponibles después de emparejar las botas.

¡Ten en cuenta que **puedes tener más de una zapatilla emparejada del mismo tamaño**!

```javascript
const shoes = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]

const shoes2 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'I', size: 38 },
  { type: 'I', size: 38 },
  { type: 'R', size: 38 }
]
// [38, 38]

const shoes3 = [
  { type: 'I', size: 38 },
  { type: 'R', size: 36 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 43 }
]

organizeShoes(shoes3)
// []
```

## Solución propuesta #1

```javascript
function organizeShoes(shoes) {

    const result = [];
    const used = [];
    for (const [i,shoe] of shoes.entries()){
        for (let index = i + 1; index < shoes.length; index++) {
            if(shoes[index].type !== shoe.type && shoes[index].size === shoe.size) {
                if(!used.includes(i) && !used.includes(index)){
                    result.push(shoe.size)
                    used.push(i,index)
                    break;
                }
            }   
        }

    }

    return result
}
```

## Solución propuesta #2

```javascript
function organizeShoes(shoes) {

    const result = [];
    const tmp = {};

    for (const { type, size } of shoes){
        if(!tmp[size]){
            tmp[size] = { I: 0, R: 0 };
            tmp[size][type]++;
        }else{
            tmp[size][type]++
        } 
    }

    for( const [size, { I, R }] of Object.entries(tmp)){
        const min = Math.min(I,R); 
        for (let i = 0; i < min; i++) {
            result.push(+size)
        }
    }

    return result
}
```

---

### Resultado #1: ⭐ ⭐ ⭐

### Resultado #2: ⭐ ⭐ ⭐ ⭐ ⭐
