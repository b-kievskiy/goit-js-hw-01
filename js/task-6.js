'use strict';

let input;
let total = 0;

while() {
    input = prompt('Введите значение');
    if (input){
        total += Number(input);
    } else {
        alert(`Общая сумма = ${total}`);
        total = 0;
    }
}
