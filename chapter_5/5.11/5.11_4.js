'use strict';

let date = new Date(2015, 0, 2);


function getDateAgo(date, days) {
    let result = new Date(date.getTime() - (days * 24 * 3600 * 1000));
    return result.getDate();
}

console.log(getDateAgo(date, 1));