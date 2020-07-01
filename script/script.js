

$(document).ready(function () {
    new Swiper('.tech-container', {
        slidesPerView: 6,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
    });

    new Swiper('.project-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
        
    });


    $('.company').mouseenter(function(){
        $(this).addClass('shadow');
    })
    .mouseleave(function(){
        $(this).removeClass('shadow');
    })

})