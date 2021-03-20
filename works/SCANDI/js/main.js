$(document).ready(function () {
    $('.feedback__items').slick({

    });
});

$('.menu__btn').click(function () {
    $(this).toggleClass('open');
    $('.menu__list').toggleClass('open');
})

if ($(window).width() < 992) {
    $('.wow').removeClass('animate__animated');
}
