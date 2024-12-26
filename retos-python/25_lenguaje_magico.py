def execute(code):
    acc = 0

    def process_code(block):
        nonlocal acc
        i = 0
        while i < len(block):
            curr = block[i]

            if curr == '+':
                acc += 1
            elif curr == '-':
                acc -= 1
            elif curr == '[':
                end = block.find(']', i)
                new_code = block[i + 1:end]

                while acc != 0:
                    process_code(new_code)
                i = end
            elif curr == '{':
                if acc == 0:
                    i = block.find('}', i)
            i += 1

    code = code.replace('>', '')
    process_code(code)

    return acc