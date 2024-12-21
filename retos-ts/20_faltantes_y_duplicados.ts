// Resultado 5 ⭐
function fixGiftList(received: string[], expected: string[]): { missing: Record<string, number>, extra: Record<string, number> } {
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
    