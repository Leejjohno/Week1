//  Activity 2 (functions) include 2 parameters and a running order count

//  This variable resets to zero every time the code runs.
let orderCount = 0

function takeOrder(size, topping, drink) {
    console.log(`${size} ${topping} pizza and a ${drink}`);
    return(orderCount ++)
}

//  The days orders
takeOrder("12 inch", "ham and pineapple", "fanta");
takeOrder("16 inch", "fungi", "coca cola");
takeOrder("16 inch", "margherita", "vanilla milkshake");
takeOrder("16 inch", "pepperoni", "diet coca cola");

console.log(`${orderCount} orders since last day`)