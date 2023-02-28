"use strict";

let schedule = {};
schedule["8:30"] = "get up";

function isEmpty(obj) {
    let counter = 0;

    for(let prop in obj) {
        counter++;
    }
    
    if(counter == 0) {
        return true;
    }

    return false;
}

console.log(isEmpty(schedule));