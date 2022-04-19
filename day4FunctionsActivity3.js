//  Activity 3 (functions) how a cashnachine might sort of kind of work

const pinNo = 1234
let bankBalance = 2000

const cashMachinePrompter = require("readline").createInterface({
    input: process.stdin,
    output: process.stdout
})
    cashMachinePrompter.question(`What's your pin?\n` , pin => {
        if (pin == pinNo) {
            cashMachinePrompter.close();
            cashMachineWithdraw.call();
        } else {
            console.log(`Incorrect Pin\nAccess Denied`)
            cashMachinePrompter.close()
            }
    })

function cashMachineWithdraw() {
    console.log("Access Granted")
        const cashMachineAccess = require("readline").createInterface({
            input: process.stdin,
            output: process.stdout
        })
    cashMachineAccess.question(`How much would you like to withdraw?\n` , amount => {
        if (amount <= bankBalance) {
            console.log(`You have withdrawn £${amount}\nYour remaining balance is £${bankBalance - amount}`)
            cashMachineAccess.close();
            return (bankBalance - amount)
        } else {
            console.log(`Insufficient funds`)
            cashMachineAccess.close();
            }
    })
}

//  Had to research input output and mess with it to no end to get this to work. 
//  Used 'console.log' and comments to continuously check whether it was working.