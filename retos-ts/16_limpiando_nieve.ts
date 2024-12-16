//  Resultado 5 ⭐
function removeSnow(s: string): string {
    const regex = /(.)\1/g;
  
    while(regex.test(s)){
      const matches: string[] | null = s.match(regex)
      if(matches){
          matches.forEach(match => {
              s = s.replace(match,'')
          })
      }
    }
  
    return s;
}