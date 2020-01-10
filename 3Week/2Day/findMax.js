function findMax(arr) { // [2,-5,-24,200]
    // return largest number in array

    // boolean/placeholder number
    // we need a initial "max" number (use the first val)
    var max = arr[0];

    // loop the array
    for(var i=0; i<arr.length; i++) {

        // use an if statement to...
        // compare max < arr[i]
        if(max < arr[i]) {
            // update max to be arr[i]
            max = arr[i];
        }
    }
    return max;
}
var result = findMax([2,-5,-24,200]);
console.log(result);