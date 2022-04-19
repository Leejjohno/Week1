// let coffeeIsGrinding = false;

// const pressGrindBeans = () => {
//     if (coffeeIsGrinding) {
//         console.log("Stopping the grind");
//         coffeeIsGrinding
//     }
// }

// pressGrindBeans();

//  ---------------------------------------------------------

// let accnumber =
// const cashWithdrawal = (amount, accnum) => {

//     console.log(`Withdrawing ${amount} from account ${accnum}`);

// }

// cashWithdrawal(300, accnumber);
// cashWithdrawal(30, accnumber);
// cashWithdrawal(200, accnumber);

//  ------------------------------------------------------------

// const addUp = (num1, num2) => {
//     return num1 + num2;
// }

// addUp(7,3);
// console.log(addUp(2,5));

// //  -------------------------------------------------------------

// const multiplyByNineFifths = (celsius) => {
//     return celsius * (9/5);
// };

// const getFahrenheit = (celsius) => {
//     return multiplyByNineFifths(celsius) + 32;
// };

// console.log("The temperature is " + getFahrenheit(15) + "°F")

//  --------------------------------------------------------------

// const capitalise = (name) => {

//     let letters = name.split("")
//     letters[0] = letters[0].toUpperCase()
//     name = letters.join("")
//     return name

// }

// const formatName = (fname, sname) => {
//     return `${capitalise(fname)} ${capitalise(sname)}`

// }

// console.log(formatName("lee", "johnson"))

//  -------------------------------------------------------------
// // example 1 function (declaration)

// function square(number) {
//     return number * number;
// };

// square(5);

// // example 2 function (expression/anonymous)

// const square = function(number) {
//     return number * number
// };

// square(5);

// // example 3 function (arrow function syntax)

// const square = (number) => {
//     return number * number;
// };

// square(5);

//  -------------------------Objects--------------------------------

// const cafe = {
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"
//     ]
// }

// -----------------------------------------------------------------

// let person = {
//     fname: "Lee",
//     lname: "Johnson",
//     userName: "Leejjohno",
//     age: 32,
//     occupation: "unemployed",
//     favBands: [
//         "Manic Street Preachers",
//         "Creedence Clearwater Revival",
//         "The Animals",
//         "Queen"
//     ],
//     plays: [
//         "Elden Ring",
//         "Doom Eternal",
//         "TimeSplitters 2",
//         "Final Fantasy 7",
//         "Halo Infinite"
//     ]
// }

// let selectedOption()

// if (false) {
//     selectedOption = "lname"
// } else {
//     selectedOption = "username"
// };

// console.log(person[selectedOption])

//  -----------------------------------------------------------------------
//  ----------------------------Objects-----------------------

// const cafe = {              //variable called Cafe. The {} determins that this is an Object not a variable or array.
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true, //name, seatingCapacity, hasSpecialOffers and drinks are all KEYS
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"     //keys and values are seperated by a colon.
//     ]
//};

// let person = {
//     name: "Lee",
//     age: 33
//}

//  person.name refers to the object: 'person' and the key: 'name'
//  console.log(person.name)
//  console.log(person["name"])
//-----------------------------------------------------------------------------------
// let offer = "none";
// let time = 1200;

// const cafe = {                      //variable called Cafe. The {} determins that this is an Object not a variable or array.
//     name: "Whitesheep",
//     seatingCapacity: 100,
//     hasSpecialOffers: true,     //name, seatingCapacity, hasSpecialOffers and drinks are all KEYS
//     drinks: [
//         "Cappuccino",
//         "Latte",
//         "Filter coffee",
//         "Tea",
//         "Hot chocolate"         //keys and values are seperated by a colon.
//         ],

//         // breakfastOffer: "Free croissant with coffee",
//         // lunchOffer: "Free drink with surprisingly priced sandwich",
//         // noOffer: "Sorry no offer"
//     openCafe(){
//         if(hasSpecialOffers){
//              return "Time for a special offer";
//         }
//     },
//     openCafe:(){
//         return "Come on in";
//     },
//     closeCafe:(){
//         return "We are closed, come back tomorrow!"
//     }
// };
// console.log(cafe.openCafe());
// console.log(cafe.closeCafe());

// if (time < 1100) {
//     offer = cafe.breakfastOffer;
//     console.log(cafe.breakfastOffer);
// } else if (time < 1500) {
//     offer = cafe.lunchOffer;
//     console.log(cafe.lunchOffer);
// }
//

//  --------------------------------------------------------------------

// let day = ("Monday")

// const alarm = {
//     readout: "",
//     weekendAlarm: "No alarm",
//     weekdayAlarm: "Alarm set"
// };

// if (day == "Saturday" || day == "Sunday") {
//     alarm.readout = alarm.weekendAlarm
// }
// else if (day == "Monday" || day == "Tuesday" || day == "Wednesday" || day == "Thursday" || day == "Friday") {
//     alarm.readout = alarm.weekdayAlarm
// }
// console.log(alarm.readout)
//  ------------------------------------------------------------------------------

