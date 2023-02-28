'use strict';

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

function getAverageAge(users) {
    let result = users.reduce((sum, item) => sum + item.age, 0);
    return result / users.length;
}

console.log(getAverageAge(arr));