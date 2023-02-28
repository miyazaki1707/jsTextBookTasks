'use strict';

function getSecondsToTomorrow() {
    let today = new Date();
    let day = new Date(today.getFullYear(), today.getMonth(), today.getDate() + 1);
    return (day - today) / 1000;
}

console.log(getSecondsToTomorrow());