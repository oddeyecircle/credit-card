import jc from './get_elements';
const JC = new jc()
let x, i, j, selEl, a, b, c;
x = JC.findAll('.select');

const create = (el) => document.createElement(el);

for (i of x) {
    selEl = i.querySelector('select')
    a = create('div');
    a.classList.add('select-selected');
    a.innerHTML = selEl.options[selEl.selectedIndex].innerHTML;
    i.appendChild(a);
    b = create('div');
    b.classList.add('select-items', 'select-hide');
    for(j of selEl) {
        c = create('div')
        c.innerHTML = j.innerHTML;
        c.addEventListener('click', function(e) {
            let y, i, k, s, h;
            s = this.parentNode.parentNode.querySelector('select');
            h = this.parentNode.previousSibling;
            for (const [i, v] of Array.from(s).entries()) {
                if (v.innerHTML == this.innerHTML) {
                    s.selectedIndex = i;
                    h.innerHTML = this.innerHTML;
                    h.dataset.value = s.value;
                    y = this.parentNode.querySelectorAll('.same-as-selected');
                    for (k of y) {
                        k.removeAttribute('class')
                    }
                    this.classList.add('same-as-selected')
                }
            }

            h.click();

        })
        b.appendChild(c)
    }
    i.appendChild(b)
    a.addEventListener('click', function(e) {
        e.stopPropagation();
        closeAllSelect(this);
        this.nextSibling.classList.toggle('select-hide')
        this.classList.toggle('select-arrow-active')
    })
}


function closeAllSelect(el) {
    let x, y, arrNo = [];
    x = document.querySelectorAll('.select-items')
    y = document.querySelectorAll('.select-selected')
    for (let i of y) {
        if (el == i) {
            arrNo.push(i)
        } else {
            i.classList.remove('select-arrow-active')
        }
    }
    for (let i of x) {
        if (arrNo.indexOf(i)) {
            i.classList.add('select-hide')
        }
    }
}

document.addEventListener("click", closeAllSelect);