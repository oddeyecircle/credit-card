export const handleSubmit = (el, button) => {
    button.textContent = ' ';
    button.innerHTML = `<div class="loader"></div>`;
    button.classList.add('disabled')
}