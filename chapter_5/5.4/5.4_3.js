'use strict';

function getMaxSubSum(arr) {
    let sum = 0;
    let max = 0;

    for(let i = 0; i < arr.length; i++) {
        for(let j = i; j < arr.length; j++) {
            sum += arr[j];
            max = Math.max(sum, max);
        }
        sum = 0;
    }
    return max;
}

console.log(getMaxSubSum([-1, -2, -3]));