# Resultado 5 ⭐
def min_moves_to_stables(reindeer, stables):
    sort_reindeer = sorted(reindeer)
    sort_stables =  sorted(stables)
    moves = 0

    for i in range(len(reindeer)):
        tmp = sort_reindeer[i] - sort_stables[i]
        moves += abs(tmp)

    return moves 