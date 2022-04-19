//  -----------------Activity 3 (coffee shop)---------------------

let coffeeShop = {
    branch: "high street manchester",
    drinks: [String, Number] = {
        "filter coffee":    2.89,
        "espresso":         2.29,
        "americano":        2.29,
        "flat white":       3.29,    
        "cappacinno":       3.39,
        "latte":            3.49,
        "coca cola":        2.49,
        "fanta":            2.49,
        "diet coca cola":   2.39,
        "fanta zero":       2.39,
        "tropicana":        2.59,
    },
    food: [String, Number] = {
        "sad tuna sandwich":            3.59,
        "ham & sandwich":               3.59,
        "ham & cheese sandwich":        3.59,
        "ham & cheese toastie":         3.59,
        "cheese & tomato toastie":      3.59,
        "cheese & onion toastie":       3.59,
        "sausage cheese & bean melt":   3.59,
        "salt & vinegar crisps":        1.99,
        "cheese & onion crisps":        1.99,
        "ready salted crisps":          1.99,
        "smokey bacon crisps":          1.99,
        "prawn cocktail crisps":        1.99,
        "pork scratchings you minger":  1.99,
    },
    drinksOrdered: function() {
        for (custOrder of coffeeShop.drinks) {
        return(console.log(`${this.drinks} is}`))
    },
    foodOrdered: function() {
        for (custOrder of coffeeShop.food) {
        return(console.log(`${this.food} is}`))
    }
};
    custOrder = [
        "sad tuna sandwich",
        "cheese & onion crisps",
        "tropicana"
    ]