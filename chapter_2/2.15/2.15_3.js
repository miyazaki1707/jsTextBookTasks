'use strict';

function pow(x, n) {
    let num = 1;

    while(n > 0) {
        num *= x;
        n--;
    }

    return num;
}

console.log(pow(1, 100));