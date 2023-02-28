'use strict';

let age = 2;

if(!(age >= 14 && age <= 90)) { // 1 вариант
    console.log("Не находится в диапазоне");
}

if(age < 14 || age > 90) { // 2 вариант
    console.log("Не находится в диапазоне");
}

