//  ---Activity 1 (functions) Turn it into arrow function syntax--------------

// function factorial (n) {
//     if ((n === 0) || (n === 1)) {
//         return 1;
//     } else {
//         return (n * factorial(n-1));
//     }
// }
// console.log(factorial(33));

//  -----------------------------------------------------

const factorial = (n) => {
    if ((n === 0) || (n === 1)) {
        return 1
    } else {
        return (n * factorial(n-1));
    }
}
console.log(factorial(33));
// test