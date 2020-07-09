import { elements } from "./base";
import * as selectController from "../controllers/select";
import * as creditCard from "../controllers/credit_card";

const dateValue = [
    new Date().getMonth() < 10
        ? "0" + (new Date().getMonth() + 1)
        : (new Date().getMonth() + 1).toString(),
    new Date().getFullYear().toString().slice(2),
];
let selectedDate = [];

selectController.getSelectValue(elements.selectMonth, (el, val) => {
    const valid = selectController.handleSelectValidity(el, val);
    selectedDate[0] = val;
    selectController.writeOnExpiryPrint(elements.expiryMonthPrint, val)
});


selectController.getSelectValue(elements.selectYear, (el, val) => {
    const valid = selectController.handleSelectValidity(el, val);
    selectedDate[1] = val;
    selectController.writeOnExpiryPrint(elements.expiryYearPrint, val)

});

selectController.handleZoomOnExpiry(elements.selectMonth)
selectController.handleZoomOnExpiryOut(elements.selectMonth)
selectController.handleZoomOnExpiry(elements.selectYear)
selectController.handleZoomOnExpiryOut(elements.selectYear)

setInterval(() => {
    if (selectedDate.length === 2) {
        doCheck(dateValue, selectedDate);
    }
}, 100);

const doCheck = (a, b) => {
    const currentMonth = parseInt(a[0]);
    const selectedMonth = parseInt(b[0]);
    const currentYear = parseInt(a[1]);
    const selectedYear = parseInt(b[1]);
    if (selectedYear > currentYear) {
        return;
    } else if (selectedYear == currentYear && selectedMonth >= currentMonth) {
        document.querySelectorAll(".select-selected").forEach(s => {
            if (s.classList.contains("input-is-invalid")) {
                s.classList.remove("input-is-invalid");
            }
        });
        return;
    } else if (selectedMonth < currentMonth) {
        document.querySelectorAll(".select-selected").forEach(s => {
            if (!s.classList.contains("input-is-invalid")) {
                s.classList.add("input-is-invalid");
            }
        });
    }
};
