# Resultado 5 ⭐
def fixPackages(packages):
    tmpPack = packages

    while '(' in tmpPack:
        startIndex = tmpPack.rfind('(')
        endIndex = tmpPack.find(')',startIndex)
        
        newPack = tmpPack[startIndex:endIndex+1]
        packRev = ''.join(list(newPack)[::-1][1:-1])

        tmpPack = tmpPack.replace(newPack,packRev)

    return tmpPack

