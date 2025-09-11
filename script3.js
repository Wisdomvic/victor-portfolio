const fixedPrice = {
    price:50
}

// Budget
if (fixedPrice.price * 2 > 50) {
    console.log("Large quantity");
} else {
    console.log("smaller quantity");
}

alert("Total is equal to " + (fixedPrice.price * 2));

if (confirm("Do you want to continue the order")){
    console.log("Order Confirmed");
} else {
console.log("Order cancelled");
}