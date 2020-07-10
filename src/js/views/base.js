import JC from '../utils/get_elements';
const jc = new JC();
export const elements = {
    creditCard: jc.find('.credit-card'),
    creditCardNumberInput: jc.find('#credit_card_number'),
    creditCardNumbersPrint: jc.find('.credit-card__container-numbers'),
    creditCardContainer: jc.find('.credit-card__container'),
    creditCardContainerBack: jc.find('#creditCardBack'),
    selectMonth: jc.find('#selectMonth'),
    selectYear: jc.find('#selectYear'),
    expiryMonthPrint: jc.find('.credit-card_container-expiry__month-animate'),
    expiryYearPrint: jc.find('.credit-card_container-expiry__year-animate'),
    expiryContainer: jc.find('.credit-card__container-expiry'),
    ccvInput: jc.find('#ccv_input'),
    ccvPrint: jc.find('.ccv'),
    form: jc.find('.form'),
    buttonSubmit: jc.find('.button'),
    printName: jc.find('#printName'),
    creditCardNameInput: jc.find('#credit_card_name')
}