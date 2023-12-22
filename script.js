let inputs = document.querySelectorAll('input')
let requirs = document.querySelectorAll('.required')
let form = document.forms.login

let submitBtn = document.querySelector('.submit')

let error = document.querySelector('.error');
let errorJs = 0
let success = document.querySelector('.success');
let successJs = 12


let labels = document.querySelectorAll('.required-label')
let pAll = document.querySelectorAll('.input-p')
let erroricons = document.querySelectorAll('.error-icon')

let loading = document.querySelector('.box')
let spin = document.querySelector('.circle')


form.onsubmit = (event) => {
    event.preventDefault();
    requirs.forEach((inp, idx) => {
        if (inp.value.length === 0) {
            errorJs++
            inp.classList.add('required-error')
            labels[idx].classList.add('required-label-error')
            pAll[idx].classList.add('p-error')
            pAll[idx].innerHTML = 'Please enter your email adress'
            erroricons[idx].classList.remove('error-icon')

            error.innerHTML = errorJs
            success.innerHTML = successJs - errorJs
        } else {
            inp.classList.remove('required-error')
            labels[idx].classList.remove('required-label-error')
            pAll[idx].classList.remove('p-error')
            pAll[idx].innerHTML = 'Need to fill'
            erroricons[idx].classList.add('error-icon')
        }
    })

    if (errorJs === 0) {
        error.innerHTML = 0
        success.innerHTML = 12
    }


    if (!errorJs > 0) {
        loading.style.animation = 'boxTrans .8s forwards, opacitybox 3s forwards'
        spin.style.animation = 'spin-circle 3s linear'

        setTimeout(() => {
            submit()
            loading.style.animation = 'none'
            spin.style.animation = 'none'

        }, 3000)

    } else {
        alert('form incorrect!')
    }

    errorJs = 0
}

function submit() {
    let user = {}

    let fm = new FormData(form)

    fm.forEach((value, key) => {
        user[key] = value
    })

    console.log(user);
}

