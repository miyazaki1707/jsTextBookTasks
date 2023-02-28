'use strict';

function unique(arr) {
    let set = new Set(arr);
    let result = [];

    for(let item of set) {
        result.push(item);
    }
    
    return result;
}

let values = ["Hare", "Krishna", "Hare", "Krishna",
  "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values))