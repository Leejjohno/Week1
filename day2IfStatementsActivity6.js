//  ---------------------------------Activity 6----------------------------------

let palNum =  101
let palNumRev = palNum.toString().split("").reverse().join("")

if (palNum == palNumRev){
    console.log(`${palNum} is a palindrome`)
}
else {
    console.log(`${palNum} isn't a palindrome`)
}