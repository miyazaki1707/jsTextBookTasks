'use strict';

let date = new Date(2012, 0, 3);

function getLocalDay(date) {
    let day = date.getDay();
    return day == 0 ? 7 : day; 
}

console.log(getLocalDay(date));