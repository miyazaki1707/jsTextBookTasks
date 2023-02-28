'use strict';

function unique(arr) {
    let uniqueValues = [];
    for(let i = 0; i < arr.length; i++) {
        if(!uniqueValues.includes(arr[i])) {
            uniqueValues.push(arr[i]);
        }
    }
    return uniqueValues;
}

let strings = ["кришна", "кришна", "харе", "харе",
  "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings));