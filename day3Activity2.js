let randNum1 = ranNumGen()
let randNum2 = ranNumGen()
let randNum3 = ranNumGen()
let randNum4 = ranNumGen()
let randNum5 = ranNumGen()
let randNum6 = ranNumGen()

    function ranNumGen() {
    x = Math.random() * 50;
        return x;
    }

console.log (`${randNum1}, ${randNum2}, ${randNum3}, ${randNum4}, ${randNum5}, ${randNum6}`)