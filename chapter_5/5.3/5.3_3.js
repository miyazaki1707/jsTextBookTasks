'use strict';

function truncate(str, maxlength) {
    if(str.length > maxlength) {
        let result = str.slice(0, maxlength-1) + "…";
        return result;
    }
    return str;
}

let str = "Вот, что мне хотелось бы сказать на эту тему:";

console.log(truncate(str, 20));
console.log(truncate("Всем привет!", 20));