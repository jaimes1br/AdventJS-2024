# Reto #16: ❄ Limpiando la nieve del camino

## Fácil 🟢

Los elfos están trabajando arduamente para limpiar los caminos llenos de nieve mágica ❄️. Esta nieve tiene una propiedad especial: si dos montículos de nieve **idénticos y adyacentes** se encuentran, **desaparecen automáticamente**.

Tu tarea es escribir una función que ayude a los elfos a simular este proceso. **El camino se representa por una cadena de texto y cada montículo de nieve un carácter.**

Tienes que eliminar todos los montículos de nieve adyacentes que sean iguales **hasta que no queden más movimientos posibles.**

El resultado debe ser el camino final después de haber eliminado todos los montículos duplicados:

```javascript
removeSnow('zxxzoz') // -> "oz"
// 1. Eliminamos "xx", quedando "zzoz"
// 2. Eliminamos "zz", quedando "oz"

removeSnow('abcdd') // -> "abc"
// 1. Eliminamos "dd", quedando "abc"

removeSnow('zzz') // -> "z"
// 1. Eliminamos "zz", quedando "z"

removeSnow('a') // -> "a"
// No hay montículos repetidos
```

## Solución propuesta

```javascript
function removeSnow(s) {
  const regex = /(.)\1/g;

  while(regex.test(s)){
    const matches = s.match(regex)
    matches.forEach(match => {
        s = s.replace(match,'')
    })
  }

  return s;
}
```

---

### Resultado: ⭐ ⭐ ⭐ ⭐ ⭐
