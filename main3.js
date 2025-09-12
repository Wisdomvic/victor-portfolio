function placeOrder() {
// Items
const customerItem = prompt("What item do you want ?");
console.log("Customer Item:" , customerItem);

// Amount of item
const amountItem = Number (prompt("How many items do you want ?"));
console.log("Amount Item:", amountItem);

// validate input
if (isNaN(amountItem) || amountItem <= 0){
    alert("X invalid quantity! please enter a positive number.");
    console.log("Invalid order attempt X ");
    return; // stop execution
}

// fixed Price
const fixedPrice = 100;

// Total price
const totalAmount = fixedPrice * amountItem;

// show order summary 
alert(`Your total for ${amountItem} ${customerItem} ( S ) is $${totalAmount}`);
console.log("Total amount :", totalAmount);

// confirm Order
if(confirm("Do you want to proceed ?")) {
console.log("order accepted ✅");
} else{
    console.log("Order declined ❎");
}
}

// call the function
placeOrder();