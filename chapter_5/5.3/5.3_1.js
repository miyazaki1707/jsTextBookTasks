'use strict';

function ucFirst(str) {
    let result = str[0].toUpperCase() + str.slice(1);
    return result;
}

console.log(ucFirst("вася"));
