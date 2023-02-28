'use strict';

let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
};

function topSalary(salaries) {
    let max = 0;
    let personNameWithHighestSalary = null;
    for(let item of Object.entries(salaries)) {
        let[name, salary] = item;
        if(salary > max) {
            max = Math.max(max, salary);
            personNameWithHighestSalary = name;
        }
    }
    return personNameWithHighestSalary;
}

console.log(topSalary(salaries));