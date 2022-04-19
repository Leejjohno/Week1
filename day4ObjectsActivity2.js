//  -----------------------Activity 2 (Pets?)--------------------

let pet = {
    name:       "Cookie",
    typeOfPet:  "Cockatiel",
    age:        16,
    colour:     "Mostly Grey?",
    foodType:   "seed",
    eat: function () {
        return this.name+ " is eating " +this.foodType;
    },
    drink: function () {
        return this.name+ " is drinking water"
    }
};

console.log(pet.eat());
console.log(pet.drink());