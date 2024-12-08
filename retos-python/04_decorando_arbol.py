# No se imprime la base en el navegador
def create_xmas_tree(height, ornament):
    HASHTAG = '#' 
    tree = []

    for i in range(height):
        line = '_' * (height - i - 1)
        orna = ornament * ((2 * i) + 1)
        tree.append(line + orna + line)

    
    base = '_' * (height - 1)
    
    tree.append(base + HASHTAG + base)
    tree.append(base + HASHTAG + base)
    
    return '\n'.join(tree)