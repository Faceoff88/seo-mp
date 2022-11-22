function onEntry(entry) {
    entry.forEach(change => {
        if (change.isIntersecting) {
        change.target.classList.add('element-show');
        }
    });
    }

    let options = {
    threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.element-animation');

    for (let elm of elements) {
    observer.observe(elm);
    }

var menuItem = document.querySelectorAll('.menu__item');
var menuLinkArr = document.querySelectorAll('.menu__link');
var menuBurger = document.querySelector('.menu-button-container');
var navy = document.querySelector('.nav');
menuBurger.addEventListener('click', function(evt) {
    navy.classList.toggle('menu-active');
});

for (let i = 0; i < menuItem.length; i++) {
    const element = menuItem[i];
    element.onmouseover = function(evt) {
        for (let y = 0; y < menuLinkArr.length; y++) {
            const elementTwo = menuLinkArr[y];
            elementTwo.classList.remove('menu-hover');
        }
        var menuLink = menuItem[i].querySelector('.menu__link');
        menuLink.classList.add('menu-hover');
    }

    element.onmouseout = function (evt) {
        for (let y = 0; y < menuLinkArr.length; y++) {
            const elementTwo = menuLinkArr[y];
            elementTwo.classList.remove('menu-hover');
        }
    }
};

var header = document.querySelector('.page-header');

window.addEventListener('scroll', function(evt) {

    if (window.scrollY >= 50) {
        header.classList.add('fix');
    } else {
        header.classList.remove('fix');
    }
});

for (let y = 0; y < menuItem.length; y++) {
    const elem = menuItem[y];
    elem.addEventListener('click', function(e) {
        
        let subMenu = elem.querySelector('.submenu');
        subMenu.classList.toggle('submenu-open');
    })
    
}

