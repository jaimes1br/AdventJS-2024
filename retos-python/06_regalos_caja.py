# Resultado 5 ⭐
def in_box(box):
    for i in range(1, len(box) - 1):
        line = box[i]
        j = line.find('*')
        
        if j != 0 and j != len(line) - 1 and j != -1:
            return True

    return False