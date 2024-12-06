
def create_frame(names):
    max_length = max(names, key=len).length

    top = '*' * (max_length + 4)
    frame = f"{top}\n"

    for name in names:
        spaces = max_length - len(name)
        tmp = f"* {name}{' ' * spaces}"
        frame += (tmp + ' *\n') 

    return frame + top