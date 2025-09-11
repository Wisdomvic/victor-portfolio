// function for order
function placeOrder() {
    //item name
const customerItem = prompt("What item do you ?");
console.log("Customer Item:", customerItem );

// Amount Item
const amountItem = Number(prompt("How many pieces do you want ?"));
console.log("Amount Item:", amountItem);

// Price
const fixedPrice = 50;
//Total Amount
const totalAmount = fixedPrice * amountItem;
alert(`Your total for ${amountItem} ${customerItem} ( S ) is $${totalAmount}`);

if (confirm("Do you want to confirm the order ? ")){
    console.log("Order confirmed ✅");
} else {
    console.log("Order cancelled ❎");
 }
}
// call the function
placeOrder()