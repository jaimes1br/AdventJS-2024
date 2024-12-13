# Resultado 5 ⭐
def is_robot_back(moves):
    final_moves = ""
    i = 0
    changes = {
        'U': 'D',
        'D': 'U',
        'R': 'L',
        'L': 'R'
    }

    while i < len(moves):
        move = moves[i]
        if move == '*':
            final_moves += moves[i + 1]
        elif move == '!':
            tmp_move = moves[i + 1]
            final_moves += changes[tmp_move]
            i += 1
        else:
            final_moves += move
        i += 1

    while '?' in final_moves:
        index = final_moves.index('?')
        values = final_moves[index:index + 2]
        temp = final_moves[:index]

        if values[1] not in temp:
            final_moves = final_moves.replace(values, values[1], 1)
        else:
            final_moves = final_moves.replace(values, '', 1)

    x, y = 0, 0

    operations = {
        'R': (0, 1),
        'L': (0, -1),
        'U': (1, 0),
        'D': (-1, 0),
    }

    for move in final_moves:
        dx, dy = operations[move]
        x += dx
        y += dy

    return True if x == 0 and y == 0 else [y, x]