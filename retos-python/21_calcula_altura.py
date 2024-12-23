# Resultado 5 ⭐
def tree_height(tree):
    if not tree:
        return 0

    left = tree_height(tree['left'])
    right = tree_height(tree['right'])

    return max(left,right) + 1
