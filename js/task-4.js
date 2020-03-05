'use strict';

const credits = 23580;;
const pricePerDroid = 3000;
let totalPrice;

// let credits;
// let pricePerDroid;
// credits = 23580;
// pricePerDroid = 3000;

let isInput = prompt('Введите желаемое количество товара: ');

totalPrice = pricePerDroid * isInput;

if (isInput == null || isInput == 0) {
    alert ('Отменено пользователем');
} else if (isInput * pricePerDroid <= credits){
    alert(`Вы купили ${isInput} дроидов, на счету осталось ${credits - totalPrice}.`);
} else {
    alert('Недостаточно средств на счету!');
}

console.log(isInput);