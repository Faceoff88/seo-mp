var casesMini = document.querySelectorAll('.cases__item');
var modalCase = document.querySelector('.modal-case');
var closeModal = modalCase.querySelector('.cross-modal');
var modalCaseWrapper = document.querySelector('.modal-case__wrapper');


for (let i = 0; i < casesMini.length; i++) {
    const element = casesMini[i];
    element.addEventListener('click', function(e) {
        modalCase.classList.add('modal-case__active');
        let celem = element.cloneNode(true);
        var count = element.childNodes.length;

        setTimeout(() => {
            for(var j = 0; j < count; j++) {
                modalCaseWrapper.appendChild(celem.childNodes[0]);
            }
        }, 320);
        
        closeModal.addEventListener('click', function(e){
            modalCase.classList.remove('modal-case__active');
                modalCaseWrapper.textContent = '';
        })
    })
}