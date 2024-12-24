# Resultado 4 ⭐
def find_missing_numbers(nums):
    numMax = max(nums)
    values = [i + 1 for i in range(numMax)]

    c1 = set(nums)
    c2 = set(values)

    return list(c2.difference(c1))
