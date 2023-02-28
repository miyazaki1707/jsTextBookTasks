'use strict';

function sumInput() {
    let value = 0;
    let sum = 0;
    let array = [];

    while(true) {
        value = prompt("Введите значение");
        if(isNaN(+value) == true || value == null || value == "") {
            for(let i of array) {
                sum += i;
            }
            return sum;
        } else {
            array.push(+value);
        }
    }
}

console.log(sumInput());