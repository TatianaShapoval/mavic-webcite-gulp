$(function(){
    $('.products__slider').slick({
        
    });

    $('.questions__item-title').on('click', function(){

        $('.questions__item').removeClass('questions__item--active');
        $(this).parent().addClass('questions__item--active');
        
    })
});