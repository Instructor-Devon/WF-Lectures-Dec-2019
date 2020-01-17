
function secondLast(arr){
    var max = arr[0],
        second = arr[0];

    for (var i = 0; i < arr.length; i++){
        // if we find a new max, set second to old max?
        if(max < arr[i]) {
            second = max;
            max = arr[i];
        }
    }
    return second;
}

console.log(secondLast([2,4,6,8])); // <= 6