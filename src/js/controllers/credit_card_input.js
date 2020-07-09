import { getCardType } from "../utils/type_of_card";

let numbersArray = [];

export const checkCreditCardNumber = value => {
    return getCardType(value);
};

export const getCorrectClass = value => {
    if (value === "MASTERCARD") {
        return "credit-card-is-mastercard";
    } else if (value === "VISA") {
        return "credit-card-is-visa";
    } else {
        return "";
    }
};

export const handleOnInputValidation = value => {
    if (value !== undefined && value !== "") {
        return true;
    } else {
        return false;
    }
};

export const removeClassOnFocusBlur = el => {
    if (el.value === "" || el.value === undefined || checkCreditCardNumber(el.value)) {
        el.removeAttribute("class");
    }
};

export const getInputValue = el => {
    return el.value;
};

export const writeCreditCardNumbers = (value, el) => {
    const lastNumber = value.split("")[value.length - 1];
    numbersArray = [...value];
    const template = `<div class="credit-card__number"><div class="credit-card__number-animate">${lastNumber}</div></div>`;
    if (el.children.length < value.length) {
        el.insertAdjacentHTML("beforeend", template);
    } else {
        el.removeChild(el.lastChild);
    }
    const children = [...el.children];
    const childInnerText = [];
    children.forEach(child => childInnerText.push(child.innerText));
    if (childInnerText.toString().replace(/[,]/g, '') != value) {
        el.innerHTML = '';
        numbersArray.forEach(number => {
            el.insertAdjacentHTML('beforeend', `<div class="credit-card__number"><div>${number}</div></div>`)
        })
    }
};

export const handleClassListInputValidation = (el,valid) => {
    if (valid) {
        el.classList.add('input-is-valid')
        el.classList.remove('input-is-invalid')
    } else {
        el.classList.remove('input-is-valid')
        el.classList.add('input-is-invalid')
    }
}