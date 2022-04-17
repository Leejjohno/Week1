//  Activity 5 (Generate a random no. between 1 and 30, 6 times,checking if the no. is divisible by 7 each time)
//  Special note: The returned random number was working out as divisible by 7 incorrectly and vice versa by -1
//  for reasons I cannot quite discern, I assume it's to do with the inclusive 0/exclusive 30 rule.
//  It may be that my solution is missing something but I circumvented the issue on line 11

function numberGen() {
    x = (Math.round(Math.random() * 30))
     return x;
}
for (i = 0; i <= 5; i += 1) {
    if ((numberGen() +1) % 7 == 0) {
        console.log(`Your random number is ${numberGen()} and is divisible by 7`)
    } else {
        console.log(`Your random number is ${numberGen()} and is not divisible by 7`)
    }
}