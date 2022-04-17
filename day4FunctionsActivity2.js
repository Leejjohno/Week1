//  Activity 2 (functions) include 2 parameters and a running order count

let orderCount = 0

function takeOrder(size, topping, drink) {
    console.log(`${size} ${topping} pizza and a can of ${drink}`);
    orderCount++;
        return(orderCount)
}

takeOrder("12 inch", "ham and pineapple", "fanta");
takeOrder("16 inch", "fungi", "coca cola")

console.log(`${orderCount} orders since last bank`)