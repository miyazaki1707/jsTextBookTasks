'use strict';

function Calculator() {
    this.read = function() {
        this.num1 = +prompt("Введите первое число");
        this.num2 = +prompt("Введите второе число");
    };
    this.sum = function() {
        return this.num1 + this.num2;
    };
    this.mul = function() {
        return this.num1 * this.num2;
    };
};

let calculator = new Calculator();

calculator.read();
console.log(calculator.sum());
console.log(calculator.mul());
