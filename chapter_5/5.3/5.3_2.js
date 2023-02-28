'use strict';

function checkSpam(str) {
    if(str.toUpperCase().includes('XXX') || str.toUpperCase().includes('VIAGRA')) {
        return true;
    }
    return false;
}

console.log(checkSpam('innocent rabbit'));