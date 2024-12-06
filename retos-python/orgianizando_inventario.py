def organize_inventory(inventory):
    final_inventory = {}

    for toy in inventory:
        if toy['category'] in final_inventory:
            if toy['name'] in final_inventory[toy['category']]:
                final_inventory[toy['category']][toy['name']] += toy['quantity']
            else:
                final_inventory[toy['category']][toy['name']] = toy['quantity']
        else:
            final_inventory[toy['category']] = {toy['name']: toy['quantity']}

    return final_inventory