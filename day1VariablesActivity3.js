//  -------------------------------------------------------------
let endDate = new Date("April 15, 2022 18:17:00");  // <<<<<< This really is my birthday 
let now = new Date();

    let distance = endDate - now; // <<<<<<<<<<<<<<< This line was all me!
    
    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    console.log(`it is ${days} days, ${hours} hours and ${minutes} minutes until your birthday`); // <<< This line here. All me dude.