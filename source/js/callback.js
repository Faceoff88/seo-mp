var callbackBtn = document.querySelectorAll('.callback-btn');
var formCallback = document.querySelector('.callback-form');
var closeFormBtn = document.querySelector('.callback-form__close');

var openForm = function(e) {
    e.preventDefault();
    formCallback.classList.add('callback-form-open');
    closeFormBtn.addEventListener('click', closedForm);
}

var closedForm = function(e) {
    e.preventDefault();
    formCallback.classList.remove('callback-form-open');
    closeFormBtn.removeEventListener('click', closedForm);
}

for (let i = 0; i < callbackBtn.length; i++) {
    const element = callbackBtn[i];
    element.addEventListener('click', openForm);
}



