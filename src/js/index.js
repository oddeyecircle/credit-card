import '../fonts/stylesheet.css'
import '../styles/style.sass'
// import DebitOrCredit from './utils/type_of_card'
// import jc from './controllers/get_elements.controller';
import './utils/select'

import './views/credit_card_input'

// // new selectController();


// const checkCard = new DebitOrCredit();
// const JC = new jc();
// const creditCardInnerContainer = JC.find('.credit-card__container');
// const creditCardNumberInput = JC.find('#credit_card_number');
// const creditCardNumberPrint = JC.find('#credit_card_number_print');
// const selectMonth = JC.find('#selectMonth');
// const creditCardExpiryPrint = JC.find('#credit_card_expiry_print');
// let creditCardType;
// let value;
// const getCardType = (value) => {
//     return checkCard.getCardType(value);
// }

// const addClass = (el, className) => JC.addClass(el, className)

// const removeClass = (el, className) => JC.removeClass(el, className)


// creditCardNumberInput.addEventListener('input', (e) => {
//     const val = e.target.value;
//     value = e.target.value;
//     if (value.length > 16) {
//         e.target.value = val.slice(0, 16)
//         return;
//     }
//     creditCardType = getCardType(value);
//     if (creditCardType) {
//         removeClass(creditCardNumberInput, 'input-is-invalid')
//         addClass(creditCardNumberInput, 'input-is-valid');
//     }
//     creditCardNumberPrint.textContent = value.length < 1 ? '' : val.match(/.{1,4}/g).join(' ');
// })

// creditCardNumberInput.addEventListener('focus', (e) => {
//     addClass(creditCardInnerContainer, 'zoom-on-numbers');
//     creditCardType = getCardType(value);
//     if (!creditCardType) {
//         removeClass(creditCardInnerContainer, 'credit-card-is-mastercard')
//     } else {
//         addClass(creditCardNumberInput, 'input-is-valid');
//     }
// })

// creditCardNumberInput.addEventListener('blur', (e) => {
//     removeClass(creditCardInnerContainer, 'zoom-on-numbers');
//     creditCardType = getCardType(value);
//     if (creditCardType) {
//         addClass(creditCardInnerContainer, 'credit-card-is-mastercard')
//         if (value.length > 1) {
//             removeClass(creditCardNumberInput, 'input-is-valid')
//         }
//     } else {
//         removeClass(creditCardInnerContainer, 'credit-card-is-mastercard')
//         if (value.length > 1) {
//             addClass(creditCardNumberInput, 'input-is-invalid')
//         } else {
//             removeClass(creditCardNumberInput, 'input-is-invalid')
//         }
//     }
// });

// selectMonth.addEventListener('click', function(e) {
//     const value = this.querySelector('select').value;
//     creditCardExpiryPrint.textContent = value;
// })