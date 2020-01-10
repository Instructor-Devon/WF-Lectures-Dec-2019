
// remembering stuff!
// variables!
var name = "Devon"; // string
var numby = 13; // numbers
var isCool = true; // bool (true/false)
// object
var footballPlayer = {
    firstName: "Richard",
    lastName: "Sherman",
    number: 25,
    team: "49ers"
};

// repeating stuff (loops!)
// var num = 1;
// while(num <= 10) {
    //     console.log(num);
    //     num++;
    // }
    
    // todo: create iterator
    //  A        B      D
var numbers = [13, 24, 1, 20]; // arrays
// for(var i=0; i<numbers.length; i++) {
//     // C
//     if(numbers[i] < 10) {
//         console.log('small number!', numbers[i]);
//     }
//     else if(numbers[i] < 20) {
//         console.log('medium number!', numbers[i]);
//     }
//     else {
//         console.log('big number!', numbers[i]);
//     }
// }

// for(var i=0; i<numbers.length; i++) {
//     // if even, print EVEN!
//     if(numbers[i]%2 === 0) {
//         console.log("EVEN NUMBER", numbers[i]);
//     }
//     else {
//         console.log("ODD NUMBER", numbers[i]);
//     }
//     // if odd, print ODD
// }

function sayHi(greeting) { // hi
    console.log(greeting + "!"); // hi!
}

function firstEven(arr) {
    // given an array, return the first even number
    for(var i=0; i<arr.length; i++) {
        if(arr[i]%2===0) {
            return arr[i];
        }
    }
    return null;
    // if no even numbers return null;
}
var numbaz = [13,5,5,353];
var even = firstEven(numbaz);
console.log(even);