// $(document).ready(function () {
//     $('.header__burger').click(function (event) {
//         $('.header__burger,.header__menu').toggleClass('active');
//         $('body').toggleClass('lock');
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
    let burger = document.querySelector(".header__burger");
    let menu = document.querySelector(".header__menu");
    let menuLink = document.querySelectorAll(".header__link");


    burger.addEventListener("click", function () {
        burger.classList.toggle("active");
        menu.classList.toggle("active");
        document.body.classList.toggle("lock");
    });

    menuLink.forEach(function (item) {
        item.addEventListener("click", function () {
            burger.classList.remove("active");
            menu.classList.remove("active");
            document.body.classList.remove("lock");
        })
    })

});