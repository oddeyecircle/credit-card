import { elements } from './base';
import * as creditCardInput from '../controllers/credit_card_input';
import * as creditCard from '../controllers/credit_card';

let value;

elements.creditCardNumberInput.addEventListener('input', function(e) {
    creditCardInput.handleInputLength(this, 16)
    value = creditCardInput.checkCreditCardNumber(elements.creditCardNumberInput.value);
    const valid = creditCardInput.handleOnInputValidation(value);
    creditCardInput.handleClassListInputValidation(this, valid)
    creditCardInput.writeCreditCardNumbers(this.value, elements.creditCardNumbersPrint);
});

elements.creditCardNumberInput.addEventListener('focus', function(e) {
    // creditCardInput.removeClassOnFocusBlur(this);
    creditCard.handleClassListOnCard(elements.creditCardContainer, 'zoom-on-numbers', 'add')
})

elements.creditCardNumberInput.addEventListener('blur', function(e) {
    const creditCardClass = creditCardInput.getCorrectClass(value);
    creditCard.handleClassListOnCard(elements.creditCardContainer, 'zoom-on-numbers', 'remove');
    const val = value === 'VISA' || value ===  'MASTERCARD' ? true : false;
    if (val) {
        creditCard.handleClassListOnCard(elements.creditCardContainer, creditCardClass, 'add')
    } else {
        creditCard.handleClassListOnCard(elements.creditCardContainer, ['credit-card-is-mastercard', 'credit-card-is-visa'], 'remove')

    }
})
