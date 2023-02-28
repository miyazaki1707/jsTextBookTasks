'use strict';

let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

function aclean(arr) {
    let set = new Set();
    let resultArray = [];

    for (let item of arr) {
        if(!set.has(Array.from(item).sort().toString().toLowerCase())) {
            set.add(Array.from(item).sort().toString().toLowerCase());
            resultArray.push(item);
        }
    }
    return resultArray;
}

console.log(aclean(arr));