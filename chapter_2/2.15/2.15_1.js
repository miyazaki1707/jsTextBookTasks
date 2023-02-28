'use strict';

function checkAge(age) { // 1 вариант 
    return (age > 18) ? true : confirm("Родители разрешили?");
}

function checkAge1(age) { // 2 вариант
    return (age > 18) || confirm("Родители разрешили?");
}
