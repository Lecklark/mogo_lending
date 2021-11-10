
//СЛИК_СЛАЙДЕР
$(document).ready(function () {
    $('.slider').slick({

        slidesToShow: 1,
        speed: 800,
        responsive: [

        ]
    });

});


//Меню-бургер
/*const iconHeader = document.querySelector(".header__icon");
const headerNav = document.querySelector(".header__nav");
if (iconHeader) {
    iconHeader.addEventListener("click", () => {
        document.body.classList.toggle('lock');
        iconHeader.classList.toggle('header__icon_active');
        headerNav.classList.toggle('header__nav_active');
    });
}*/


//Скролл к цели
const menuLinks = document.querySelector('.header-up');
menuLinks.addEventListener("click", onMenuLinkClick);

function onMenuLinkClick(e) {
    const menuLink = e.target;
    console.log(menuLink);
    if (menuLink.dataset.goto && document.querySelector(menuLink.dataset.goto)) {
        const gotoBlock = document.querySelector(menuLink.dataset.goto);
        const gotoBlockValue = gotoBlock.getBoundingClientRect().top + pageYOffset;

        /*if (iconHeader.classList.contains("header__icon_active")) {
            document.body.classList.remove('lock');
            iconHeader.classList.remove('header__icon_active');
            headerNav.classList.remove('header__nav_active');
        }*/

        window.scrollTo({
            top: gotoBlockValue,
            behavior: "smooth"
        });
        e.preventDefault();
    }
}




//функция, заменяющая img на backrgound
function ibg() {
    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}
ibg()

const ServiceHeader = document.querySelectorAll('.service-opener__header');
ServiceHeader.forEach(header => {
    header.addEventListener('click', () => {

        if (header.nextElementSibling.classList.contains("service-opener__inform-active")) {
            header.nextElementSibling.classList.remove("service-opener__inform-active")
        } else {
            const Forms = document.querySelectorAll('.service-opener__inform');
            Forms.forEach(item => {
                item.classList.remove('service-opener__inform-active')
            })
            header.nextElementSibling.classList.toggle('service-opener__inform-active')
        }

    })
})