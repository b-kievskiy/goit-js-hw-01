'use strict';

let input;
const total = 0;
const plus = true;

while(plus) {
    input = prompt('Введите значение');
    if (input){
        total += Number(input);
    } else {
        alert(`Общая сумма = ${total}`);
        total = 0;
    }
}
// ========task 6===========