function reverseArray(arr) {
    // returns new array in reverse order of arr
    //             i
    // -> [2,4,6,8,10]
    // <- [10,8,6,4,2]

    // create new (empty) array
    var newArr = [];
    // loop arr (going backwards)
    for(var i=arr.length-1; i>=0; i--) {
        // insert each value of arr into new array
        newArr.push(arr[i]);
    }
    // return new array
    return newArr;
}
function reverseArray2(arr) {
    // reverse arr (no new array) AKA in-place
    for(var i=0; i<arr.length/2; i++) {
        // swap array value (across the middle)
        var temp = arr[i];
        arr[i] = arr[arr.length-1-i];
        arr[arr.length-1-i] = temp;
    }
    return arr;
}
var result = reverseArray2([2,4,6,8,10]);
console.log(result);

