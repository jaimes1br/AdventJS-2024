# Resultado 4 ⭐
def drawRace(indices, length):
    race = []

    for i in range(len(indices)): 
        
        track = indices[i]
        tmpDraw = list('~' * (length))

        if(track != 0):
            if(track > 0): 
                tmpDraw[track] = 'r'
            else:
                tmpDraw[length + track] = 'r'
        

        spaces = (' ') * (len(indices) - (i + 1));
        race.append(spaces + ''.join(tmpDraw) + ' /' + i+1);


    return '\n'.join(race)
