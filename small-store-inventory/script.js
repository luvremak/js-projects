//THE DELETE FUNCTION DOES NOT WORK PROPERLY

let inventory = [];


/*    { name: "ketchup", price: 38.80, quantity: 12 },
    { name: "mustard", price: 12.70, quantity: 31 },
    { name: "mayo", price: 48.90, quantity: 20 } */
     
displayInventory(inventory);
addItem();
/*
Algorithm:
1. get element by id
2. add event listener
3. get values by id
4. create an object
5. asign values to keys
6. push the new item
7. clear the form
*/

function addItem() {
    const addItemForm = document.getElementById('addItemForm');

    addItemForm.addEventListener('submit', function(event) {
        event.preventDefault();

    const nameValue = document.getElementById('name').value;
    const priceValue = parseFloat(document.getElementById('price').value);
    const quantityValue = parseInt(document.getElementById('quantity').value);

    const newItem = {
        name: nameValue,
        price: priceValue,
        quantity: quantityValue,
    }

    inventory.push(newItem);
    displayInventory(inventory); 
    saveInventoryToLocalStorage(inventory);
    addItemForm.reset(); 
    });
} 

/*
Algorithm:
1. get inventory
2. identify the item to change
3. get new value
4. update inventory
5. save changes
6. display new inventory
*/

function changeItem() {
    document.getElementById('updateItemForm').addEventListener('submit', function(event) {
        event.preventDefault();
        const itemName = document.getElementById('updateItem').value;
        const itemIndex = inventory.findIndex(item => item.name.toLowerCase() === itemName.toLowerCase());

        if (itemIndex === -1) {
            alert("Item not found!");
            return;
        };

    const editItemDiv = document.getElementById('editItem');
    editItemDiv.style.display = 'block';

    document.getElementById('newName').value = inventory[itemIndex].name;
    document.getElementById('newPrice').value = inventory[itemIndex].price;
    document.getElementById('newQuantity').value = inventory[itemIndex].quantity;
    document.getElementById('saveChanges').onclick = function() {
        const newName = document.getElementById('newName').value;
        const newPrice = parseFloat(document.getElementById('newPrice').value);
        const newQuantity = parseInt(document.getElementById('newQuantity').value);

        inventory[itemIndex] = { name: newName, price: newPrice, quantity: newQuantity };

    editItemDiv.style.display = 'none';
    displayInventory(inventory);
    saveInventoryToLocalStorage(inventory);
    };
});

}


function deleteItem() {
    const itemName = document.getElementById('deleteItem').value;
    const itemIndex = inventory.findIndex(item => item.name.toLowerCase() === itemName.toLowerCase());
    if (itemIndex === -1) {
        alert("Item not found.");
        return;
    } else {
        inventory.splice(itemIndex); 
        displayInventory(inventory);  
        saveInventoryToLocalStorage(inventory);
    }
}

function displayInventory(){
    let tableBody = document.querySelector("#inventoryTable tbody");
    tableBody.innerHTML = "";
    inventory.forEach(item => {
        let row = document.createElement("tr");let nameCell = document.createElement("td");
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        let priceCell = document.createElement("td");
        priceCell.textContent = item.price.toFixed(2); 
        row.appendChild(priceCell);

        let quantityCell = document.createElement("td");
        quantityCell.textContent = item.quantity;
        row.appendChild(quantityCell);

        tableBody.appendChild(row);
    });
}



function saveInventoryToLocalStorage(inventory) {
    localStorage.setItem('inventory', JSON.stringify(inventory));
}
saveInventoryToLocalStorage(inventory);

console.log(inventory);
