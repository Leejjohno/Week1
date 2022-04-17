//  --------------------------------Activity 1 (if statements)----------------------------- 

let age = 18
let country = ("USA")

if (age > 17 && country == "UK") {
    console.log("Yes. What would you like?");
}
else if (age > 17 && country != "UK") {
    console.log("Ahh a tourist, how are you finding it?\n What can I get you?");
}
else {
    console.log("You're not old enough to buy alcohol; I'm afraid I can't serve you.")
}