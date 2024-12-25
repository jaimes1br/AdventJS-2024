# Reto #24: 🪞 Verfiica si los árboles son espejos mágicos

## Medio 🟠

En el Polo Norte, los elfos tienen **dos árboles binarios mágicos que generan energía** 🌲🌲 para mantener encendida la estrella navideña ⭐️. Sin embargo, para que funcionen correctamente, los árboles deben estar en perfecta sincronía **como espejos 🪞.**

**Dos árboles binarios son espejos si:**

- **Las raíces de ambos árboles tienen el mismo valor.**
- **Cada nodo del primer árbol debe tener su correspondiente nodo en la posición opuesta en el segundo árbol.**

Y el árbol se representa con tres propiedades ``value``, ``left`` y ``right``. Dentro de estas dos últimas va mostrando el resto de ramas (si es que tiene):

```javascript
const tree = {
  value: '⭐️',
  left: {
    value: '🎅'
    // left: {...}
    // right: { ... }
  },
  right: {
    value: '🎁'
    // left: { ... }
    // right: { ...&nbsp;}
  }
}
```

Santa necesita tu ayuda para verificar si los árboles están sincronizados para que la estrella pueda seguir brillando. **Debes devolver un array** donde la **primera posición indica si los árboles están sincronizados** y la **segunda posición devuelve el valor de la raíz del primer árbol.**

```javascript
const tree1 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

const tree2 = {
  value: '🎄',
  left: { value: '🎅' }
  right: { value: '⭐' },
}

isTreesSynchronized(tree1, tree2) // [true, '🎄']

/*
  tree1          tree2
   🎄              🎄
  / \             / \
⭐   🎅         🎅   ⭐
*/

const tree3 = {
  value: '🎄',
  left: { value: '🎅' },
  right: { value: '🎁' }
}

isTreesSynchronized(tree1, tree3) // [false, '🎄']

const tree4 = {
  value: '🎄',
  left: { value: '⭐' },
  right: { value: '🎅' }
}

isTreesSynchronized(tree1, tree4) // [false, '🎄']

isTreesSynchronized(
  { value: '🎅' },
  { value: '🧑‍🎄' }
) // [false, '🎅']
```

## Solución propuesta #1

```javascript
function isTreesSynchronized(tree1, tree2) {    
  const sortKeys = (obj) => {
    if (obj === null || typeof obj !== 'object') {
        return obj;
    }

    const sortedKeys = Object.keys(obj).sort();
    const sortedObj = {};

    for (const key of sortedKeys) {
        sortedObj[key] = sortKeys(obj[key]);
    }

    return sortedObj;
  }  

  let tmp = JSON.stringify(tree1)
  tmp = tmp.replace(/left/g, 'tmpl');
  tmp = tmp.replace(/right/g, 'left');
  tmp = tmp.replace(/tmpl/g, 'right');
  tmp = JSON.parse(tmp);
  const newTree1 = sortKeys(tmp);
  const newTree2 = sortKeys(tree2);

  const result = JSON.stringify(newTree1) === JSON.stringify(newTree2)

  return [result, tree1.value]
}
```

---

### Resultado v1: ⭐ ⭐ ⭐

## Solución propuesta #2

```javascript
function isTreesSynchronized(tree1, tree2) {
  function check(t1, t2) {
      if (!t1 && !t2) return true;
      if (!t1 || !t2) return false;
      if (t1.value !== t2.value) return false;

      return check(t1.left, t2.right) && check(t1.right, t2.left);
  }

  const result = check(tree1, tree2);
  return [result, tree1.value];
}
```

---

### Resultado v2: ⭐ ⭐ ⭐ ⭐ ⭐
