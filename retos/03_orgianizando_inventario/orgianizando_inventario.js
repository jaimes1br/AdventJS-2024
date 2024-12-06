// const inventory = [
//     { name: 'doll', quantity: 5, category: 'toys' },
//     { name: 'car', quantity: 3, category: 'toys' },
//     { name: 'ball', quantity: 2, category: 'sports' },
//     { name: 'car', quantity: 2, category: 'toys' },
//     { name: 'racket', quantity: 4, category: 'sports' }
//   ]
// console.log(organizeInventory(inventory));

/**
 * @param {{ name: string, quantity: number, category: string }[]} inventory
 * @returns {object} The organized inventory
 */
function organizeInventory(inventory) {
    
    const final_inventory = {};

    for (const toy of inventory ){
        if(final_inventory[toy.category]){
            final_inventory[toy.category][toy.name]
             ? final_inventory[toy.category][toy.name] += toy.quantity
             : final_inventory[toy.category][toy.name] = toy.quantity
        }else{
            final_inventory[toy.category] = {
                [toy.name] : toy.quantity
            }
        }
    }

    return final_inventory;
}

module.exports = organizeInventory;