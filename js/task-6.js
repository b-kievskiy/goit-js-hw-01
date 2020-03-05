'use strict';

let input;
let total = 0;
let plus = true;

while(plus) {
    input = prompt('Введите значение');
    if (input){
        total += Number(input);
    } else {
        alert(`Общая сумма = ${total}`);
        total = 0;
    }
}
