'use strict';

let num = 10;

for(let i = 2; i <= num; i++) {
    let counter = 0;
    for(let j = 1; j <= i; j++) {
        if(i % j == 0) {
            counter++;
        }
    }
    if(counter == 2) {
        console.log(i);
    }
}

