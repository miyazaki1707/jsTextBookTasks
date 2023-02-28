'use strict';

function readNumber() {
    let num;
    while(isNaN(num) != false ) {
        num = prompt("Введите число", "");
        if(num === null || num === ""){
            return null;
        }
    }
    return +num;
}

console.log(readNumber());