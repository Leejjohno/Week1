//  ---------Activity 2 (generate a no. between 1 & 50, 6 times)-----------
function numberGen() {
       x = (Math.random() * 50)
        return x;
}
for (i = 0; i <= 5; i += 1) {
console.log(`${numberGen()}`)
}
