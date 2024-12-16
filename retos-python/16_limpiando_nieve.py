#  Resultado 5 ⭐
import re

def remove_snow(s: str)-> str:
    regex = r"(.)\1"

    while re.search(regex, s):
        matches = re.findall(regex, s)
        for match in matches:
            s = re.sub(f"{match}{match}", "", s)

    return s