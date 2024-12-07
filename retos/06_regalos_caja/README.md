# Reto #6: 📦 ¿Regalo dentro de la caja?  

## Medio 🟠

Ya hemos empaquetado cientos de regalos 🎁… pero **a un elfo se le ha olvidado revisar si el regalo**, representado por un asterisco ``*``, está dentro de la caja.

La caja tiene un regalo (``*``) y cuenta como *dentro de la caja* si:

- **Está rodeada por ``#`` en los bordes de la caja.**
- **El ``*`` no está en los bordes de la caja.**

Ten en cuenta entonces que el ``*`` puede estar dentro, fuera o incluso no estar. Y debemos devolver ``true`` si el ``*`` está dentro de la caja y ``false`` en caso contrario.

**Ejemplos:**

```javascript
inBox([
  "###",
  "#*#",
  "###"
]) // ➞ true

inBox([
  "####",
  "#* #",
  "#  #",
  "####"
]) // ➞ true

inBox([
  "#####",
  "#   #",
  "#  #*",
  "#####"
]) // ➞ false

inBox([
  "#####",
  "#   #",
  "#   #",
  "#   #",
  "#####"
]) // ➞ false
```

## Solución propuesta

```javascript
function inBox(box) {
    for (let i = 1; i < box.length - 1; i++) {
        const line = box[i]
        const j = line.indexOf('*');    
        
        if(j !== 0 && j !== line.length - 1 && j !== -1 ){
            return true
        }
    }

    return false
}
```

---

### Resultado: ⭐ ⭐ ⭐ ⭐ ⭐
