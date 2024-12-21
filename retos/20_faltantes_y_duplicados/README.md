# Reto #20: 🎁 Encuentra los regalos faltantes y duplicados

## Fácil 🟢

**Santa Claus** 🎅 está revisando la lista de regalos que debe entregar esta Navidad. Sin embargo, **algunos regalos faltan, otros están duplicados, y algunos tienen cantidades incorrectas.** Necesita tu ayuda para resolver el problema.

Recibirás dos arrays:

- **``received``: Lista con los regalos que Santa tiene actualmente.**
- **``expected``: Lista con los regalos que Santa debería tener.**

Tu tarea es escribir una función que, dado ``received`` y ``expected``, devuelva un objeto con dos propiedades:

- **``missing``: Un objeto donde las claves son los nombres de los regalos faltantes y los valores son las cantidades que faltan.**
- **``extra``: Un objeto donde las claves son los nombres de los regalos extra o duplicados y los valores son las cantidades que sobran.**

Ten en cuenta que:

- **Los regalos pueden repetirse en ambas listas.**
- **Las listas de regalos están desordenadas.**
- **Si no hay regalos que falten o sobren, las propiedades correspondientes (``missing`` o ``extra``) deben ser objetos vacíos.**

```javascript
fixGiftList(['puzzle', 'car', 'doll', 'car'], ['car', 'puzzle', 'doll', 'ball'])
// Devuelve:
// {
//   missing: { ball: 1 },
//   extra: { car: 1 }
// }

fixGiftList(
  ['book', 'train', 'kite', 'train'],
  ['train', 'book', 'kite', 'ball', 'kite']
)
// Devuelve:
// {
//   missing: { ball: 1, kite: 1 },
//   extra: { train: 1 }
// }

fixGiftList(
  ['bear', 'bear', 'car'],
  ['bear', 'car', 'puzzle', 'bear', 'car', 'car']
)
// Devuelve:
// {
//   missing: { puzzle: 1, car: 2 },
//   extra: {}
// }

fixGiftList(['bear', 'bear', 'car'], ['car', 'bear', 'bear'])
// Devuelve:
// {
//   missing: {},
//   extra: {}
// }
```

## Solución propuesta

```javascript
function fixGiftList(received, expected) {
  const missing = {}
  const extra = {}
  const objReceived = {}
  const objExpected = {}

  for(const gift of received){
    objReceived[gift] 
      ? objReceived[gift]++
      : objReceived[gift] = 1
  }

  if(expected.length === 0){
    for(const gift of Object.keys(objReceived)){
      extra[gift] = objReceived[gift]
    }

    return { missing, extra } 
  }

  for(const gift of expected){
    objExpected[gift] 
      ? objExpected[gift]++
      : objExpected[gift] = 1
  }

  for(const gift of Object.keys(objExpected)){
    if(!objReceived[gift]){
      missing[gift] = objExpected[gift] 
    }else{
      const giftExp = objExpected[gift]
      const giftRec = objReceived[gift]

      if(giftExp < giftRec){
        extra[gift] = giftRec - giftExp
      }

      if(giftExp > giftRec){
        missing[gift] = giftExp - giftRec
      }
    }
  }

  for(const gift of Object.keys(objReceived)){
    if(!objExpected[gift]){
      extra[gift] = objReceived[gift]
    }
  }

  return { missing, extra }
}
```

---

### Resultado: ⭐ ⭐ ⭐ ⭐ ⭐
