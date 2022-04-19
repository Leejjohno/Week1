//  ----------------------Activity 1 (Objects)

let person = {
        fname: "Lee",
        lname: "Johnson",
        fullname: function() {
            return this.fname + " " + this.lname
        },
        userName: "Leejjohno",
        age: 33,
        occupation: "unemployed",
        favBands: [
            "Manic Street Preachers",
            "Creedence Clearwater Revival",
            "The Animals",
            "Queen"
        ],
        plays: [
            "Elden Ring",
            "Doom Eternal",
            "TimeSplitters 2",
            "Final Fantasy 7",
            "Halo Infinite"
        ],
        sayHi() {
            return(console.log(`Hello, my name is ${this.fullname()}.`))
        }
    };
    
    // console.log(person.favBands)

// const sayHi = () => {
//     return(console.log(`Hello, my name is ${person.fname} ${person.lname}`))
// };

person.sayHi()