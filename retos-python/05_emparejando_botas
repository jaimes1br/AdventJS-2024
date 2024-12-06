def organize_shoes(shoes):
    result = []
    tmp = {}

    for shoe in shoes:
        type_ = shoe['type']
        size = shoe['size']
        if size not in tmp:
            tmp[size] = {'I': 0, 'R': 0}
        tmp[size][type_] += 1

    for size, counts in tmp.items():
        min_count = min(counts['I'], counts['R'])
        result.extend([int(size)] * min_count)

    return result