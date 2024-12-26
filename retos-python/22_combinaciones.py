# Resultado 5 ⭐
def generate_gift_sets(gifts):
    result = []

    def backtrack(start_index, current_set):
        for i in range(start_index, len(gifts)):
            current_set.append(gifts[i])
            result.append(current_set[:])
            backtrack(i + 1, current_set)
            current_set.pop()

    backtrack(0, [])
    return sorted(result, key=len)
