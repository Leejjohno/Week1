// let coffeeOrder = [
//     "Alex - Cortado",
//     "Ben - Cortado",
//     "Charlie - Whatever's new"
// ];
// console.log(coffeeOrder);
// coffeeOrder[1] = "Ann - vanilla latte"
// coffeeOrder.push("Donna - espresso");
// coffeeOrder.pop();
// console.log(coffeeOrder);
// console.log(coffeeOrder.length);

//  ----------------------------------------------------------

// let favSongs = [
//     "Everything Must Go - Manic Street Preachers",
//     "If You Tolerate This - Manic Street Preachers",
//     "The Tracks Of My Tears - Smokey Robinson & The Miracles",
//     "The Only Thing They Fear is You - Mick Gordon"
// ]
// favSongs.push("House of the Rising Sun - The Animals", 
//                 "Burnin' for You - Blue Oyster Cult", 
//                 "Come and Get Your Love - Redbone")
// console.log(favSongs)
// favSongs.shift()
// console.log(favSongs)

//  -----------------------------------------------------------

// let favDrinks = [
//         "Vanilla Milkshake",
//         "Coka Cola",
//         "OJ",
// ]
// console.log(favDrinks[0])
// console.log(favDrinks[1])
// console.log(favDrinks[2])

// // An array of our favourite drinks. There are three items in this array
// let favDrinks = [
//     "Vanilla Milkshake",
//     "Coka Cola",
//     "OJ",
//     "Tea"
// ]

// // loop unless index number is less than the amount of items in the array
// for(let index = 0; index < favDrinks.length; index ++) {

//     console.log(favDrinks[index]);
// }

//  -------------------------------------------------------------------

// let multiplesTwo = [];

// for(let i = 0; i < 20; i ++) {
//     if (i % 2 == 0) {
//         multiplesTwo.push(i);
//     }
// }

// console.log(`Numbers divisible by 2 between 0 and 20 are: ${multiplesTwo}.`);

//Numbers divisible by 2 between 0 and 20 are: 0,2,4,6,8,10,12,14,16,18.

//  -------------------------------------------------------------------

// let age = 0;
// while(age <18){

//     console.log("You're a child!");
//     age ++;
// }

// console.log("You're an adult!");

//  -------------------------------------------------------------------

// let card = ["Ace of Diamonds", "Jack of Diamonds", "Queen of Diamonds", "King of Diamonds", "2 of Diamonds", "3 of Diamonds", "4 of Diamonds", "5 of Diamonds", "6 of Diamonds", "7 of Diamonds", "8 of Diamonds", "9 of Diamonds", "10 of Diamonds", "Ace of Spades", "Jack of Spades", "Queen of Spades", "King of Spades", "2 of Spades", "3 of Spades", "4 of Spades", "5 of Spades", "6 of Spades", "7 of Spades", "8 of Spades", "9 of Spades", "10 of Spades",
// "Ace of Hearts", "Jack of Hearts", "Queen of Hearts", "King of Hearts", "2 of Hearts", "3 of Hearts", "4 of Hearts", "5 of Hearts", "6 of Hearts", "7 of Hearts", "8 of Hearts", "9 of Hearts", "10 of Hearts",
// "Ace of Clubs", "Jack of Clubs", "Queen of Clubs", "King of Clubs", "2 of Clubs", "3 of Clubs", "4 of Clubs", "5 of Clubs", "6 of Clubs", "7 of Clubs", "8 of Clubs", "9 of Clubs", "10 of Clubs", "Red Joker", "Black Joker"]
// let currentCard = "Ace of Hearts";

// while(currentCard != "Ace of Spades") {

//     console.log(currentCard);
//     currentCard = card[Math.floor(Math.random()*52)]

// }
// console.log(currentCard);

