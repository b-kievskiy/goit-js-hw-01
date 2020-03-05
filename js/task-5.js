'use strict';

let isInput = prompt('Выберите вашу страну для доставки: ')
 
if (isInput !== null) {
    isInput = isInput.toLowerCase();
}

switch (isInput) {
    case 'китай':
        alert('Доставка в Китай будет стоить 100 кредитов');
        break;
    case 'чили':
        alert('Доставка в Чили будет стоить 250 кредитов');
        break;
    case 'австралия':
        alert('Доставка в Австралия будет стоить 170 кредитов');
        break;
    case 'индия':
        alert('Доставка в Индия будет стоить 80 кредитов');
        break;
    case 'ямайка':
        alert('Доставка в Ямайка будет стоить 120 кредитов');
        break;
    default:
        alert("В вашей стране доставка не доступна");
}