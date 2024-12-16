# Resultado 4 ⭐
def draw_table(data):
    sizes = []
    headers = []

    for key in data[0].keys():
        column_values = [str(row[key]) for row in data]
        header = key[0].upper() + key[1:]
        column_values.insert(0, header)
        headers.append(header)
        max_length = max(len(value) for value in column_values)
        sizes.append(max_length)

    result = []

    for row in data:
        row_str = '|'
        for i, key in enumerate(row.keys()):
            value = str(row[key])
            row_str += f" {value.ljust(sizes[i])} |"
        result.append(row_str)

    separator = '+'
    header_row = '|'
    for i, header in enumerate(headers):
        separator += '-' * (sizes[i] + 2) + '+'
        header_row += f" {header.ljust(sizes[i])} |"

    result.insert(0, separator)
    result.insert(1, header_row)
    result.insert(2, separator)
    result.append(separator)

    return '\n'.join(result)
