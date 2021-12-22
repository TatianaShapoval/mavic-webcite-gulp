$(function(){
    $('.products__slider').slick({
        prevArrow: '<button class="slider-btn slider-btn__left"><img src="../app/images/icons/arroe-left.svg" alt=""></button>',
        nextArrow: '<button class="slider-btn slider-btn__right"><img src="../app/images/icons/arrow-right.svg" alt=""></button>'
    });

    $('.questions__item-title').on('click', function(){

        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
        
    })
});