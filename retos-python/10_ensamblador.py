# Resultado 4 ⭐
def compile(instructions):
    result = {}
    index = 0

    def dec(r):
        result[r] -= 1

    def inc(r):
        result[r] += 1

    def mov(x, y):
        result[y] = result[x] if x.isalpha() else int(x)

    def jmp(r, i):
        nonlocal index
        if result[r] == 0:
            index = int(i) - 1

    operations = {
        'DEC': dec,
        'INC': inc,
        'MOV': mov,
        'JMP': jmp
    }

    while index < len(instructions):
        parts = instructions[index].split(' ')
        comm = parts[0]
        x = parts[1]
        y = parts[2] if len(parts) > 2 else None

        if x not in result:
            result[x] = 0
        operations[comm](x, y)
        index += 1

    return result.get('A')