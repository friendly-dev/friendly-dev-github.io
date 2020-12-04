var hiddenElement = document.getElementById("promo");
var btn = document.querySelector('.btns-rules');

function handleButtonClick() {
    hiddenElement.scrollIntoView({ block: "center", behavior: "smooth" });
}

btn.addEventListener('click', handleButtonClick);

$(document).ready(function() {
    $("#menu").on("click", "a", function(event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});

window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.menu__responsive'),
        menuItem = document.querySelectorAll('.menu__link'),
        hamburger = document.querySelector('.hamburger__icon');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('-active');
        menu.classList.toggle('menu__responsive-active');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('-active');
            menu.classList.toggle('menu__responsive-active');
        });
    });
});