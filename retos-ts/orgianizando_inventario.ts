interface InventoryItem {
    name: string;
    quantity: number;
    category: string;
}

interface OrganizedInventory {
    [category: string]: {
        [name: string]: number;
    };
}

function organizeInventory(inventory: InventoryItem[]): OrganizedInventory {
    const finalInventory: OrganizedInventory = {};

    for (const item of inventory) {
        if (finalInventory[item.category]) {
            finalInventory[item.category][item.name]
                ? finalInventory[item.category][item.name] += item.quantity
                : finalInventory[item.category][item.name] = item.quantity;
        } else {
            finalInventory[item.category] = {
                [item.name]: item.quantity
            };
        }
    }

    return finalInventory;
}