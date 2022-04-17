// ----------------Activity 6 Arrays and Loops-------------------------
// Bizzarely I did this one as a function but whatever.
let bobsFollowers = [
    "John Smith",
    "James Jones",
    "Francis Duncan",
    "David Openshaw"
];
let hannahsFollowers = [
    "Christopher Maloney",
    "David Openshaw",
    "John Smith",
    "Daniel Frost"
];
function commonFollowers() {
    for(let arrayBob of bobsFollowers) {
        for(let arrayHannah of hannahsFollowers) {
            if(arrayBob == arrayHannah) {
                console.log(`${arrayBob} follows both Bob and Hannah.`);
            }
        }
    }
}

commonFollowers();
