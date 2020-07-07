

$(document).ready(function () {

    //menu click
    $('.mobile-menu').click( function() {
        if ($(this).hasClass('active')) {
            $(this).find('ul').css('animation-name','slide-out');
            setTimeout( function() { $(this).removeClass('active'); }, 300)
        } else {
            $(this).addClass('active');
            $(this).find('ul').css('animation-name','slide-in');
        }

    });

    //contact form submission
    $('#contactForm').submit( function(e) {
        e.preventDefault();

        var form = $(this);
        $.post(form.attr("action"), form.serialize()).then(function() {
            alert("Thank you!");
          });
    });



    new Swiper('.tech-container', {
        slidesPerView: 5,
        spaceBetween: 30,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        breakpoints: {
            1024: {slidesPerView: 4},
            480: { slidesPerView: 3},
            320: { slidesPerView: 3}
        }
    });

    new Swiper('.project-container', {
        slidesPerView: 3,
        spaceBetween: 10,
        navigation: {
          nextEl: '.swiper-next',
          prevEl: '.swiper-prev',
        },
        breakpoints: {
            768: { slidesPerView: 3},
            480: { slidesPerView: 2},
            320: { slidesPerView: 1.5}
        }
        
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



    //responsive triggers
    if ($(window).width() < 1025) {
        $('.experience .section').addClass('responsive');
    } else {
        $('.experience .section').removeClass('responsive');
    }
});

$(window).resize( function() {
    if ($(window).width() < 1025) {
        $('.experience .section').addClass('responsive');
    } else {
        $('.experience .section').removeClass('responsive');
    }
});
