# Resultado 3 ⭐
def move_train(board, mov):
    row, line = None, None

    for i, r in enumerate(board):
        if '@' in r:
            row = i
            line = r.index('@')
            break

    moves = {
        'U': (row - 1, line),
        'D': (row + 1, line),
        'R': (row, line + 1),
        'L': (row, line - 1),
    }

    r, l = moves[mov]

    result = {
        '*': 'eat',
        '·': 'none',
        '@': 'crash',
        'o': 'crash'
    }

    return result.get(board[r][l], 'crash') if 0 <= r < len(board) and 0 <= l < len(board[0]) else 'crash'