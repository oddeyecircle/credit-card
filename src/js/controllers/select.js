import {
    handleOnInputValidation,
    handleClassListInputValidation,
} from "./credit_card_input";
import { elements } from "../views/base";
import { handleClassListOnCard } from "./credit_card";

export const handleZoomOnExpiry = select => {
    const events = ["mousedown", "mouseenter", "touchstart"];
    for (let event of events) {
        select.addEventListener(event, function (e) {
            handleClassListOnCard(
                elements.creditCardContainer,
                "zoom-on-expiry",
                "add"
            );
        });
    }
};

export const handleZoomOnExpiryOut = select => {
    const events = ["mouseleave", "touchend"];
    for (let event of events) {
        select.addEventListener(event, function (e) {
            handleClassListOnCard(
                elements.creditCardContainer,
                "zoom-on-expiry",
                "remove"
            );
        });
    }
};

export const getSelectValue = (select, cb) => {
    select.addEventListener("click", function (e) {
        if (elements.creditCardContainer.classList.contains("zoom-on-expiry")) {
            handleClassListOnCard(
                elements.creditCardContainer,
                "zoom-on-expiry",
                "remove"
            );
        }
        const childSelect = this.querySelector("select");
        const value = childSelect.value;
        if (this.classList.contains("input-is-valid")) {
            setTimeout(() => {
                this.classList.remove("input-is-valid");
            }, 500);
        }
        cb(select, value);
    });
};

export const handleSelectValidity = (select, value) => {
    const valid = handleOnInputValidation(value);
    handleClassListInputValidation(
        select.querySelector(".select-selected"),
        valid
    );
    return valid;
};

export const writeOnExpiryPrint = (el, value) => {
    el.classList.remove('animate')
    if (!elements.expiryContainer.classList.contains("has-numbers")) {
        elements.expiryContainer.classList.add("has-numbers");
    }
    el.textContent = value;
    if (!el.classList.contains('animate')) {
        el.classList.add('animate')
    }
};
