import JC from '../utils/get_elements';
const jc = new JC();
export const elements = {
    creditCardNumberInput: jc.find('#credit_card_number'),
    creditCardNumbersPrint: jc.find('.credit-card__container-numbers'),
    creditCardContainer: jc.find('.credit-card__container'),
    selectMonth: jc.find('#selectMonth'),
    selectYear: jc.find('#selectYear')
}