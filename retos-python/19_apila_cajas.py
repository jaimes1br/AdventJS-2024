# Problema en el compilador; agrega un valor
def distribute_weight(weight: int) -> str:
    box_representations = {
        1: [" _ ", "|_|"],
        2: [" ___ ", "|___|"],
        5: [" _____ ", "|     |", "|_____|"],
        10: [" _________ ", "|         |", "|_________|"]
    }

    boxes = [10, 5, 2, 1]
    num_boxes = []
    rest = weight

    for box in boxes:
        q = rest // box
        rest = rest % box

        if q:
            for _ in range(q):
                num_boxes.insert(0, box)

    result = []
    i = 0
    while i < len(num_boxes):
        tmp_box = box_representations[num_boxes[i]]
        if i + 1 < len(num_boxes) and num_boxes[i] < num_boxes[i + 1]:
            last = tmp_box[len(tmp_box) - 1]

            if num_boxes[i + 1] == 2:
                last = last + ('_' * (4 - len(last)))
            elif num_boxes[i + 1] == 5:
                last = last + ('_' * (6 - len(last)))
            else:
                last = last + ('_' * (10 - len(last)))

            tmp_box[len(tmp_box) - 1] = last
            
            if i == 0:
                result.extend(tmp_box[:]) 
            else:
                result.extend(tmp_box[1:])
        elif i == 0:
            result.extend(tmp_box)
        else:
            result.extend(tmp_box[1:])

        i += 1

    return '\n'.join(result)


print(distribute_weight(1))