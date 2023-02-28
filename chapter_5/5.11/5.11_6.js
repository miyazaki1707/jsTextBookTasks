'use strict';

function getSecondsToday() {
    let today = new Date();
    let day = new Date(today.getFullYear(), today.getMonth(), today.getDate());
    return (today - day) / 1000;
}

console.log(getSecondsToday());