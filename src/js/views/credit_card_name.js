import { elements } from './base'
import * as creditCardInput from '../controllers/credit_card_input'

elements.creditCardNameInput.addEventListener('input', function(e) {
    creditCardInput.handleInputLength(this, 50)
    creditCardInput.writeCreditCardNumbers(this.value, elements.printName);
});