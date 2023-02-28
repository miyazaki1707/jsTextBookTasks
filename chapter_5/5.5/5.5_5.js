'use strict';

function copySorted(arr) {
    let copy = arr.slice();
    return copy.sort((a, b) => a.localeCompare(b));
}

let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr);

console.log(sorted);
console.log(arr);