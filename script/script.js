

$(document).ready(function () {
    new Swiper('.tech-container', {
        slidesPerView: 5,
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

    $('#exp').bind('DOMMouseScroll mousewheel',function(e, delta) {
        this.scrollLeft -= (delta*30);
        e.preventDefault();
    });
})