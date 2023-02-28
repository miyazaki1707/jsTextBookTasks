'use strict';

function formatDate(date) {
    let now = Date.now();
    let diff  = now - date;

    if(diff < 1000) {
        return "прямо сейчас";
    } else if(diff < 1000 * 60) {
        return `${diff / 1000} сек. назад`;
    } else if(diff < 1000 * 3600) {
        return `${diff / 1000 / 60} мин. назад`;
    } else {
       let year = date.getFullYear().toString().slice(2);
       let month = (date.getMonth() + 1) < 10 ? '0' + (date.getMonth() + 1) : (date.getMonth() + 1);
       let day = date.getDate() < 10 ? '0' + date.getDate() : date.getDate();
       let hours = date.getHours() < 10 ? '0' + date.getHours() : date.getHours();
       let minutes = date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();

       let result = `${day}.${month}.${year} ${hours}:${minutes}`;
       return result;
    }
}

console.log( formatDate(new Date(new Date - 86400 * 1000)) );