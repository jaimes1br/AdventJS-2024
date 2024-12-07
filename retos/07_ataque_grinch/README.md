# Reto #7: 👹 El ataque del Grinch  

## Medio 🟠

¡El **grinch** 👹 ha pasado por el taller de Santa Claus! Y menudo desastre ha montado. Ha cambiado el orden de algunos paquetes, por lo que los envíos no se pueden realizar.

Por suerte, el elfo *Pheralb* ha detectado el patrón que ha seguido el grinch para desordenarlos. **Nos ha escrito las reglas que debemos seguir para reordenar los paquetes. Las instrucciones que siguen son:**

Recibirás un string que contiene letras y paréntesis.
Cada vez que encuentres un par de paréntesis, debes voltear el contenido dentro de ellos.
Si hay paréntesis anidados, resuelve primero los más internos.
Devuelve el string resultante con los paréntesis eliminados, pero con el contenido volteado correctamente.

Nos ha dejado algunos ejemplos:

```javascript
fixPackages('a(cb)de')
// ➞ "abcde"
// Volteamos "cb" dentro de los paréntesis

fixPackages('a(bc(def)g)h')
// ➞ "agdefcbh"
// 1º volteamos "def" → "fed", luego volteamos "bcfedg" → "gdefcb"

fixPackages('abc(def(gh)i)jk')
// ➞ "abcighfedjk"
// 1º volteamos "gh" → "hg", luego "defhgi" → "ighfed"

fixPackages('a(b(c))e')
// ➞ "acbe"
// 1º volteamos "c" → "c", luego "bc" → "cb"
```

## Solución propuesta #1

```javascript
function fixPackages(packages) {
    let tmpPack = packages;

    while (tmpPack.includes('(')) {
        const startIndex = tmpPack.lastIndexOf('(');
        const endIndex = tmpPack.indexOf(')',startIndex);

        const newPack = tmpPack.substring(startIndex,endIndex + 1);
        const reverse = [...newPack].slice(1,-1).reverse().join("")
        tmpPack = tmpPack.replace(newPack,reverse);

    } 

    return tmpPack;
}
```

## Solución propuesta #2

```javascript
function fixPackages(packages) {
    const rgx = /\(([^()]*)\)/;

    function checkParentheses(pack) {
        const match = pack.match(rgx);

        if (match) {
            const tmpPack = match[1].split("").reverse().join("");
            const newPack = pack.replace(rgx, tmpPack);

            return checkParentheses(newPack);
        }

        return pack;
    }

    const result = checkParentheses(packages); 
    return result;
}
```

## Solución propuesta #3

```javascript
function fixPackages(packages) {
   
    function checkParentheses(pack) {
        if(pack.includes('(')){
            let startIndex = pack.lastIndexOf('(');
            const endIndex = pack.indexOf(')',startIndex);
            
            if(endIndex < startIndex){
                startIndex = pack.indexOf('(');
            }
            
            const tmpPack = pack.slice(startIndex + 1,endIndex).split("").reverse().join("")
            
            const tmpl = pack.slice(0,startIndex);
            const tmpr = pack.slice(endIndex + 1);
            
            pack = tmpl + tmpPack + tmpr
            return checkParentheses(pack)  
        }

        return pack
    }

    return checkParentheses(packages)
}
```

---

### Resultado #1: ⭐ ⭐ ⭐ ⭐ ⭐

### Resultado #2: ⭐ ⭐ ⭐ ⭐

### Resultado #3: ⭐ ⭐ ⭐
