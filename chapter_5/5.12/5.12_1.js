'use strict';

let user = {
    name: "Василий Иванович",
    age: 35
};


let json = JSON.stringify(user);

let value = JSON.parse(json);

console.log(json);
console.log(value);
