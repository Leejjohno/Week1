//  ---------------------Activity 7 (Arrays and loops)-----------------
i2 = 0
i3 = 0
message = "This is message "

//  For loop seems to be more self contained. If you know the number of times you want
//  to do something, you should use a for loop.
for (i1 = 0; i1 <= 5; i1 += 1) {
    console.log(`${message}${i1} on your for loop.`);
}
//  While loop appears to be good for running while an external variable is in a certain condition
//  and then stopping once that condition changes. Will run forever if that condition doesn't change.
while (i2 <= 5) {
    i2 += 1
    console.log(`${message}${i2} on your while loop`);
}

//  Do -- while appears to execute the body of the while loop before evaluating the condition.
//  Perhaps you would want to display a message one more time after the condition has changed.
do {
    console.log(`${message}${i3} do--while loop' is now counting`)
    i3 += 1
}   while (i3 <= 5);