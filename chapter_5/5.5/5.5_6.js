'use strict';

function Calculator() {
    this.operators = {
        "+" : (a, b) => a + b,
        "-" : (a, b) => a - b
    };
    this.calculate = function(str) {
        let arr = str.split(" ");
        
        for(let prop in this.operators) {
            if (arr[1] == prop) return this.operators[prop](+arr[0], +arr[2]);
        }
        return "Такой операции нет!";
        
    }
    this.addMethod = function(name, func) {
        this.operators[name] = func;
    }
}

let calc = new Calculator();

calc.addMethod("*", (a, b) => a * b);
calc.addMethod("/", (a, b) => a / b);
calc.addMethod("**", (a, b) => a ** b);

let result = calc.calculate("12 / 4");

console.log(calc.calculate("10 + 3"));
console.log(result);