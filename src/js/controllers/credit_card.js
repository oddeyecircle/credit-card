import JC from "../utils/get_elements";
const jc = new JC();

export const handleClassListOnCard = (el, classList, type) => {
    if (type === "remove") {
        jc.removeClass(el, classList);
    } else if (type === "add") {
        jc.addClass(el, classList);
    }
};
