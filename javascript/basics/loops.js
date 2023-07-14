// for loop

for (let i = 1; i <= 5; i++) {
    console.log('For loop Iteration number '+i);
}

// while loop

let w = 1
while (w <= 5) {
    console.log('While loop Iteration number '+w);
    w++;
}

// do while loop

let d = 1
do {
    console.log('Do While loop Iteration number '+d);
    d++;
}while (d <= 5);

//for of loop

const arr = [1,2,3,4,5];
for (const num of arr) {
    console.log('For of loop Iteration number '+num);
}