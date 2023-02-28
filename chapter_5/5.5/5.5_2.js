'use strict';

let arr = [5, 3, 8, 1];
let filtered = filterRange(arr, 1, 4);

function filterRange(arr, a, b) {
    let result = arr.filter(item => item >= a && item <= b);
    return result;
}

console.log(filtered);