'use strict';

let menu = {
    width: 200,
    heigh: 300,
    title: "My menu"
};

function multiplyNumeric(obj) {
    for(let prop in obj) {
        if(typeof(obj[prop]) == "number") {
            obj[prop] *= 2;
        }
    }
}
multiplyNumeric(menu);

console.log(menu.heigh);