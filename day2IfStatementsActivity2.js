//  ---------------------------------Activity 2 (if statements. Switches, cases, breaks.)-------------------------

let topping = "ham and pineapple"

console.log(topping);

switch (topping) {
    case "margarita":
    case "fungi":
        console.log("This is okay... Nice and simple.")
        break;
    case "parma ham and italian cheese":
    case "ham and pineapple":
        console.log("This is probably one of the best pizza toppings depending on budget")
        break;
    case "pepperoni":
    case "anchovies":
        console.log("...Wrong choice my friend")
    default:
        console.log("Sold out. Choose a different one");
 }
