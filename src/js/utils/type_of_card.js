
export const getCardType = (cardNum) => {
    if (!luhnCheck(cardNum)) {
        return '';
    }
    let payCardType;
    const regexMap = [
        {regEx: /^4[0-9]{12}(?:[0-9]{3})?$/ig, cardType: 'VISA'},
        {regEx: /^(?:5[1-5][0-9]{2}|222[1-9]|22[3-9][0-9]|2[3-6][0-9]{2}|27[01][0-9]|2729)[0-9]{12}$/ig, cardType: 'MASTERCARD'},
        // {regEx: /^3[47][0-9]{13}/ig, cardType: 'AMEX'},
        // {regEx: /^3(?:0[0-5]|[68][0-9])[0-9]{11}$/, cardType: 'Diners Club'},
        // {regEx: /^(5[06-8]\d{4}|6\d{5})/ig, cardType: 'MAESTRO'}
    ];

    for (const regEx of regexMap) {
        if (cardNum.match(regEx.regEx)) {
            payCardType = regEx.cardType;
            break;
        }
    }

    if (cardNum.indexOf('50') === 0 || cardNum.indexOf('60') === 0 || cardNum.indexOf('65') === 0) {
        const g = '508500-508999|606985-607984|608001-608500|652150-653149';
        const i = g.split('|');
        for (const d of i) {
            const c = parseInt(i[d].split('-')[0], 10);
            const f = parseInt(i[d].split('-')[1], 10);
            if ((cardNum.substr(0, 6) >= c && cardNum.substr(0, 6) <= f) && cardNum.length >= 6) {
                payCardType = 'RUPAY';
                break;
            }
        }
    }
    return payCardType;
}

const luhnCheck = (cardNum) => {
    const numericDashRegex = /^[\d\-\s]+$/;
    if (!numericDashRegex.test(cardNum)) return false;
    let nCheck = 0;
    let nDigit = 0;
    let bEven = false;
    const strippedField = cardNum.replace(/\/D/g, '');
    for (let n = strippedField.length - 1; n >= 0; n--) {
        const cDigit = strippedField.charAt(n);
        nDigit = parseInt(cDigit, 10);
        if (bEven) {
            if ((nDigit *= 2) > 9) nDigit -= 9
        }
        nCheck += nDigit;
        bEven = !bEven;
    }
    return (nCheck % 10) === 0;
}