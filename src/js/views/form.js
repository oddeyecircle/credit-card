import { elements } from './base'
import * as Form from '../controllers/form'

let interval = setInterval(() => {
    checkValid();
}, 100)

const checkValid = () => {
    const valid = document.querySelector('form').querySelectorAll('.input-is-valid');
    const invalid = document.querySelector('form').querySelectorAll('.input-is-invalid')
    if (invalid.length === 0 && valid.length >= 4) {
        handleButton(elements.buttonSubmit, true);
        return;
    } else {
        handleButton(elements.buttonSubmit, false)
    }
}

const handleButton = (el, bool) => {
    if (el.attributes.disabled) {
        el.removeAttribute('disabled')
    }
    if (!bool) {
        el.setAttribute('disabled', true)
    }
}

elements.form.addEventListener('submit', function(e) {
    e.preventDefault();
    clearInterval(interval)
    Form.handleSubmit(this, elements.buttonSubmit);
    this.classList.add('disabled')
})