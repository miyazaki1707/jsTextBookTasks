'use strict';

let login  = prompt("Введите логин", '');

let message = (login == "Сотрудник") ? "Привет": 
(login == "Директор") ? "Здраствуйте":
 (login == "") ? "Нет логина": "";

console.log(message);