# Reto #21: 🎄 Calcula la altura del arból de Navidad

## Fácil 🟢

Santa Claus 🎅 está decorando un árbol de Navidad mágico , que este año tiene una estructura especial en forma de **árbol binario**. Cada nodo del árbol representa un regalo, y Santa quiere saber la **altura del árbol** para colocar la estrella mágica en la punta.

Tu tarea es escribir una función que calcule la altura de un árbol binario. La altura de un árbol binario se define como el número máximo de niveles desde la raíz hasta una hoja. Un árbol vacío tiene una altura de ``0``.

```javascript
// Definición del árbol
const tree = {
  value: '🎁',
  left: {
    value: '🎄',
    left: {
      value: '⭐',
      left: null,
      right: null
    },
    right: {
      value: '🎅',
      left: null,
      right: null
    }
  },
  right: {
    value: '❄️',
    left: null,
    right: {
      value: '🦌',
      left: null,
      right: null
    }
  }
}

// Representación gráfica del árbol:
//        🎁
//       /   \
//     🎄     ❄️
//    /  \      \
//  ⭐   🎅      🦌

// Llamada a la función
treeHeight(tree)
// Devuelve: 3
```

## Solución propuesta #1

```javascript
function treeHeight(tree) {
    
    if(!tree ) return 0
    let height = 0
    
    const getHeight = (element,acc) => {
        acc++
        for(const side of ['right','left']){
            if(element[side]){
                getHeight(element[side],acc)
            }else{
                height = Math.max(height,acc)
            } 
        }
    }

    getHeight(tree,0)
    
    return height
}
```

---

### Resultado v1: ⭐

## Solución propuesta #2

```javascript
function treeHeight(tree) {
    if (!tree) return 0;

    const left = treeHeight(tree.left);
    const right = treeHeight(tree.right);

    return Math.max(left, right) + 1;
}
```

---

### Resultado v2: ⭐ ⭐ ⭐ ⭐ ⭐
