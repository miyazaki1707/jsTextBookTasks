'use strict';

function filterRangeInPlace(arr, a, b) {
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] > b || arr[i] < a) {
            arr.splice(i, 1);
            i--;
        }
    }
}

let arr = [5, 3, 1, 8];
filterRangeInPlace(arr, 2, 5);
console.log(arr);