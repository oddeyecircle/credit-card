export const getSelectValue = (select, cb) => {
    select.addEventListener('click', function(e) {
        const value = this.querySelector('select').value;
        cb(value);
    })
}