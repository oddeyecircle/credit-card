export default class Jc {
    find(el) {
        return document.querySelector(el);
    }
    findAll(el) {
        return document.querySelectorAll(el);
    }

    addClass(el, className) {
        if (typeof className === 'object') {
            return className.forEach(classN => {
                if (!el.classList.contains(classN)) {
                    el.classList.add(classN);
                }
            });
        }
        if (!el.classList.contains(className)) {
            el.classList.add(className);
        }
    }

    removeClass(el, className) {
        if (typeof className === 'object') {
            return className.forEach(classN => {
                if (el.classList.contains(classN)) {
                    el.classList.remove(classN);
                }
            });
        }
        if (el.classList.contains(className)) {
            el.classList.remove(className);
        }
    }
}
