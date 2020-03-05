'use strict';

const ADMIN_PASSWORD = 'jqueryismyjam';
let message;

const isInput = prompt ('Введите пароль');

if (isInput == null) {
    message= 'Отменено пользователем!';
} else if (isInput == ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
} else {
    message = 'Доступ запрещен, неверный пароль!';
}
alert(message);
