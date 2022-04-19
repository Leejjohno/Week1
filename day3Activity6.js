// ----------------Activity 6 Arrays and Loops-------------------------
// 
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
