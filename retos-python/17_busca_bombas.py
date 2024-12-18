# Resultado 2 ⭐
def detect_bombs(grid):
    def count_bombs(i, j):
        bombs = 0
        for r in range(-1, 2):
            for c in range(-1, 2):
                if r == 0 and c == 0:
                    continue
                x, y = i + r, j + c
                if 0 <= x < len(grid) and 0 <= y < len(grid[0]) and grid[x][y]:
                    bombs += 1
        return bombs

    return [[count_bombs(i, j) for j in range(len(row))] for i, row in enumerate(grid)]