$(document).ready(function () {
    $('.promo-slider-slick').slick({
        slidesToShow: 1,
        dots: true,
        infinite: false,
        arrows: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 2000,
    })

    $('.combo-slider-slick').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: false
    })

    $('.combo-slider-slick').on('afterChange', function(event, slick, currentSlide, nextSlide){
        $('.combos-tabs li').removeClass('active');
        if(currentSlide < 3){
            $('.combos-tabs .duo').addClass('active');
        }else{
            $('.combos-tabs .triple').addClass('active');
        }
    });

    $('.combos-tabs .triple').on('click', function(){
        $('.combo-slider-slick').slick('slickNext');
    })

    $('.combos-tabs .duo').on('click', function(){
        $('.combo-slider-slick').slick('slickPrev');
    })

    $('.suggestions-slider-slick').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
    })

    $('.programSlider').slick({
        infinite: true,
        slidesToShow: 1,
        dots: true,
        infinite: false,
    })
});
// $(document).ready(function(){
//     $('.banner-slider-slick').slick({
//         infinite: true,
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2000,
//     })
// });

