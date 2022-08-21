$(document).ready(function(){
    // === Slider One config
    $('.slider-1').slick({
        dots:true
    });
    
    // === Slider Two config
    $('.slider-2').slick({
        infinite: false,
        dots:true,
        fade:true,
        speed:1000,
        cssEase:'ease-out'
    });
    
    // === Slider Three config
    $('.slider-3').slick({
        dots:true,
        slidesToShow: 2,
        slidesToScroll: 2,
        speed:2000
    });
    
    // === Slider Four config
    $('.slider-4').slick({
        centerMode: true,
        centerPadding: '100px',
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2,
                centerMode: false
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                centerMode: false
              }
            }
          ]
    });
    
    // === Slider Five config
    $('.slider-5').slick({
        dots:true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1500,
        pauseOnHover:false,
        pauseOnFocus:false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            },
            {
              breakpoint: 375,
              settings: {
                slidesToShow: 1,
                dots:false
              }
            }
        ]
    });
    // === Slider Five -> Pause/Play button
    $('#pause-btn').click(function(){
        $('.slider-5').slick('slickPause')
        $(this).addClass('btn-active')
        $('#play-btn').removeClass('btn-active')
    });
    $('#play-btn').click(function(){
        $('.slider-5').slick('slickPlay')
        $(this).addClass('btn-active')
        $('#pause-btn').removeClass('btn-active')
    });

    // === Slider Six config
    $('.slider-6').slick({
        dots:true,
        slidesToShow: 3,
        infinite: false,
        speed:400,
        appendArrows:$('#navigation__arrows'),
        appendDots:$('#navigation__dots'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
               breakpoint: 768,
               settings: {
                slidesToShow: 1
              }
            }
          ]
    });

    // === Slider Seven config
    $('.slider-7').slick({
        infinite:false,
        slidesToShow: 4,
        speed:800,
        prevArrow:$('#custom_arrows_btn_prev'),
        nextArrow:$('#custom_arrows_btn_next'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 2
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });

    // === Slider Eight  config
    $('.slider-8').slick({
        infinite:false,
        dots:true,
        slidesToShow: 2,
        vertical:true,
        verticalSwiping:true,
        speed:500,
        appendArrows:$('#navigation__arrows-vertical'),
        appendDots:$('#navigation__dots-vertical'),
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 1
              }
            }
          ]
    });
});
