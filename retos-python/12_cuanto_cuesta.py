# Resultado 
# Espera un undefined pero se puede regresar null
def calculate_price(ornaments: str):
    cost = { '*': 1, 'o': 5, '^': 10, '#': 50, '@': 100 }
    result = 0
    i = 1

    for o in ornaments:
        if i < len(ornaments) and cost[o] < cost[ornaments[i]]:
            result -= cost[o]
        else:
            result += cost[o]
        i += 1

    return result or None

