# Resultado 5 ⭐
import re

def find_in_agenda(agenda: str, phone: str) -> dict | None:
    info = agenda.split('\n')
    r = []

    for i in info:
        if phone in i:
            r.append(i)

    if(len(r) == 0 or len(r) > 1):
        return None
    
    rgxName = r"<[A-Za-z\s]+>"
    rgxNumber = r"\+\d{1,2}[-\d{3}]*"
    rgxCleanName = r"<|>"

    tmpInfo = r[0]
    name = re.findall(rgxName,tmpInfo)[0]

    address = re.sub(rgxName,'',tmpInfo)
    address = re.sub(rgxNumber,'',address).strip()

    name = re.sub(rgxCleanName,'',name)

    return { 'name': name, 'address': address  }

agenda = """+34-600-123-456 Calle Gran Via 12 <Juan Perez>
 Plaza Mayor 45 Madrid 28013 <Maria Gomez> +34-600-987-654
<Carlos Ruiz> +1-800-555-0199 Fifth Ave New York"""

print(find_in_agenda(agenda, '34-600-123-456'))
# print(find_in_agenda(agenda, '111'))
