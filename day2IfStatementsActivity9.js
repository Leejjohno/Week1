//  -------------------------------Activity 9---------------------------------------

let originalWord = "dood";
let wordSplit    = originalWord.split("")
let wordArray    = wordSplit.reverse()
let joinArray    = wordArray.join("")

console.log(joinArray);
console.log(originalWord);

if  (joinArray === originalWord)  {
    (activity) = true
}
else {
    (activity) = false
}
console.log(activity)