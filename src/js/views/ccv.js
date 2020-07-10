import { elements } from './base';
import * as ccvController from '../controllers/ccv';
import { handleClassListOnCard } from '../controllers/credit_card';
import * as creditCardInput from '../controllers/credit_card_input'

elements.ccvInput.addEventListener('focus', function(e) {
    handleClassListOnCard(elements.creditCard, 'card-is-flipped', 'add');
})

elements.ccvInput.addEventListener('blur', function(e) {
    handleClassListOnCard(elements.creditCard, 'card-is-flipped', 'remove');
    handleClassListOnCard(elements.creditCardContainerBack, 'zoom-on-ccv', 'remove')
})

elements.ccvInput.addEventListener('input', function(e) {
    creditCardInput.handleInputLength(this, 3)
    handleClassListOnCard(elements.creditCardContainerBack, 'zoom-on-ccv', 'add')
    creditCardInput.writeCreditCardNumbers(this.value, elements.ccvPrint)
    const valid = creditCardInput.handleOnInputValidation(this.value);
    creditCardInput.handleClassListInputValidation(this, valid)

})