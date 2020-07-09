import { elements } from './base';
import * as creditCardInput from '../controllers/credit_card_input';
import * as creditCard from '../controllers/credit_card'
let value;

elements.creditCardNumberInput.addEventListener('input', function(e) {
    if (this.value.length > 16) {
        this.value = this.value.slice(0, 16)
        return;
    }
    value = creditCardInput.checkCreditCardNumber(elements.creditCardNumberInput.value);
    const valid = creditCardInput.handleOnInputValidation(value);
    this.classList.add(valid);
    creditCardInput.writeCreditCardNumbers(this.value, elements.creditCardNumbersPrint);
});

elements.creditCardNumberInput.addEventListener('focus', function(e) {
    creditCardInput.removeClassOnFocusBlur(this);
    creditCard.handleClassListOnCard(elements.creditCardContainer, 'zoom-on-numbers', 'add')
})

elements.creditCardNumberInput.addEventListener('blur', function(e) {
    creditCardInput.removeClassOnFocusBlur(this)
    const creditCardClass = creditCardInput.getCorrectClass(value);
    creditCard.handleClassListOnCard(elements.creditCardContainer, 'zoom-on-numbers', 'remove');
    const val = value === 'VISA' || value ===  'MASTERCARD' ? true : false;
    if (val) {
        creditCard.handleClassListOnCard(elements.creditCardContainer, creditCardClass, 'add')
    }
})
