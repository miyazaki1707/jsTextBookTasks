'use strict';

let login = prompt("Введите свой логин!");

if(login == null || login == "") {
    alert("Отменено");
} else if(login == "Админ") {
    let password = prompt("Введите пароль");

    if(password == null || password == "") {
        alert("Отменено");
    } else if(password == "Я главный") {
        alert("Здраствуйте!");
    } else {
        alert("Неверный пароль");
    }
} else {
    alert("Я вас не знаю");
}