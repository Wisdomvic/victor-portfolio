// Prompt
const customerName = prompt("What is your name");
console.log("Cutomer Name:", customerName);

//items
const selectedItem = prompt(" What Items do you want ");
console.log("Selected Item:", selectedItem);

//Amount of items
const itemAmount = prompt("How many items do you want");
console.log("Item Amount:", itemAmount);

// Final confirmation
alert("Order fully accepted for " + customerName + ": " + itemAmount + " x " + selectedItem);

