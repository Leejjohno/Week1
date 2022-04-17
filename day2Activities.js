//  --------------------------------Activity 1----------------------------- 

//let age = 18
// let country = ("USA")

// if (age > 17 && country == "UK") {
//     console.log("Yes. What would you like?");
// }
// else if (age > 17 && country != "UK") {
//     console.log("Ahh a tourist, how are you finding it?\n What can I get you?");
// }
// else {
//     console.log("You're not old enough to buy alcohol; I'm afraid I can't serve you.")
// }

//  ---------------------------------Activity 2-------------------------

// let topping = "ham and pineapple"

// console.log(topping);

// switch (topping) {
//     case "margarita":
//     case "fungi":
//         console.log("This is okay... Nice and simple.")
//         break;
//     case "parma ham and italian cheese":
//     case "ham and pineapple":
//         console.log("This is probably one of the best pizza toppings depending on budget")
//         break;
//     case "pepperoni":
//     case "anchovies":
//         console.log("...Wrong choice my friend")
//     default:
//         console.log("Sold out. Choose a different one");
//  }

//  ---------------------------------Activity 3-------------------------

// let password = "pass"
//     if (password.length < 8) {
//         console.log("Password is too short, password length must be greater than 8 characters");
//     }

//  --------------------------------Activity 4--------------------------

// let num = 4

// if (num % 5 == 0) {
//     console.log("This number is divisible by 5")
// }
//     else if (num % 3 == 0) {
//         console.log("This number is divisible by 3")
//     }
//     else {   
//         console.log("This number is NOT divisible by 5 or 3")
// }

//  -------------------------------Activity 5------------------------------

// let num = 7

// if (num % 5 == 0 && num % 3 == 0) {
//     console.log("fizzBuzz")
// }
//     else if (num % 3 == 0) {
//         console.log("fizz")
//     }
//     else if (num % 5 == 0) {
//         console.log("buzz")
//     }
//     else {   
//         console.log("This number is NOT divisible by 5 or 3")
//     }

//  ---------------------------------Activity 6----------------------------------

// let palNum =  101
// let palNumRev = palNum.toString().split("").reverse().join("")

// if (palNum == palNumRev){
//     console.log(`${palNum} is a palindrome`)
// }
// else {
//     console.log(`${palNum} isn't a palindrome`)
// }

//  ---------------------------------Activity 7---------------------------------

// let time = 18.30
// let placeOfWork = "Manchester"
// let townOfHome = "Oldham"

// if (time < 8.30 || time > 18.00) {
//     console.log(`${townOfHome}`)
// }
//     else {
//         console.log(`${placeOfWork}`)
//     }

//  ---------------------------------Activity 8---------------------------------------------

// let text = "jrfndklhgfndjkjlkgperfijfhdknsadcvjhiiohjfkledsopiuhgtyujwsdxcvhgfdjhiopiwquhejkdsoiufghedjwshi";
// let result = text.lastIndexOf("a","e","i","o","u");

//     console.log(`The last vowel in the string is index number ${result}.`)

//  ---------------------------------Activity 9-----------------------------------------------

// let originalWord = "dood";
// let wordSplit    = originalWord.split("")
// let wordArray    = wordSplit.reverse()
// let joinArray    = wordArray.join("")

// console.log(joinArray);
// console.log(originalWord);

// if  (joinArray === originalWord)  {
//     (activity) = true
// }
// else {
//     (activity) = false
// }
// console.log(activity)

//  ----------------------------------activity 10-----------------------------------------------

let num1 = 7
let num2 = 3

if ((num1 + num2) % 2 == 0) {
    console.log(`Number 1 and number 2 added together are ${num1 + num2}; this is an even number`)
} else { 
    (num1 * num2)
    console.log(`the numbers add up to ${num1 + num2}. This number is odd, so I've multiplied them \n
    ${num1} multiplied by ${num2} is ${num1 * num2}`)
    }