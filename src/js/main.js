$(document).ready(function(){
    $('#header .dropdown-item').click(function () {
        $('#header .dropdown-item').removeClass('text-bold');
        $(this).addClass('text-bold');
    });

    // ===== Scroll to Top ====
    $(window).scroll(function() {
        if ($(this).scrollTop() >= 50) {        // If page is scrolled more than 50px
            $('#return-to-top').show();    // Fade in the arrow
        } else {
            $('#return-to-top').hide();   // Else fade out the arrow
        }
    });
    $('#return-to-top').click(function() {      // When arrow is clicked
        $('body,html').animate({
            scrollTop : 0                       // Scroll to top of body
        }, 100);
    });

    // Select all links with hashes
    $('a[href*="#"]').not('[href="#"]').not('[href="#0"]').click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                $('html,body').animate({scrollTop: (target.offset().top-10)}, 100);
            }
        }
    });

    $('#filters a,#menu-urunleri a').on('click',function () {
        var href_attr=$(this).attr('data-filter');
        $('#filters a').removeClass('aktif');
        $('#filters a[data-filter="'+href_attr+'"]').addClass('aktif');

        $('.firma-item').addClass('kapat');

        $('.banners-wrap .firma-item.'+href_attr).removeClass('kapat').addClass('animated fadeInDown faster');
        $('.sliders-wrap .firma-item.'+href_attr).removeClass('kapat').addClass('animated fadeInUp faster');
        $('.olcu-wrap .firma-item.'+href_attr).removeClass('kapat').addClass('animated fadeInUp faster');

        //$('#firmalar .firma-item').addClass('kapat');
        //$('#firmalar .firma-item.'+href_attr).removeClass('kapat');
        //$('#firmalar .firma-item.'+href_attr).addClass('ac animated fadeIn_es');
    });

    $(".mainHakkimizda .owl-carousel").owlCarousel({
        items:4,
        lazyLoad:true,
        margin:15,
        loop:true,
        dots:false,
        nav:false,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true,
        navText:['<span class="nav-ikon ikon-left"></span>','<span class="nav-ikon ikon-right"></span>'],
        responsive:{
            0:{
                items:2,
            },
            1000:{
                items:4,
            }
        }

    });
    $(".mainSlider .owl-carousel").owlCarousel({
        items:1,
        lazyLoad:true,
        loop:true,
        dots:false,
        nav:true,
        autoplay:true,
        autoplayTimeout:4000,
        navText:['<span class="nav-ikon ikon-left"></span>','<span class="nav-ikon ikon-right"></span>']

    });
    $(".df_biancoIbiza .owl-carousel").owlCarousel({
        items:5,
        margin:15,
        nav:true,
        loop:false,
        navText:['<span class="nav-ikon ikon-left"></span>','<span class="nav-ikon ikon-right"></span>'],
        responsive:{
            0:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });
    $(".df_nordicBlu .owl-carousel").owlCarousel({
        items:5,
        margin:15,
        nav:true,
        loop:false,
        navText:['<span class="nav-ikon ikon-left"></span>','<span class="nav-ikon ikon-right"></span>'],
        responsive:{
            0:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });
    $(".df_cohimWhite .owl-carousel").owlCarousel({
        items:5,
        margin:15,
        nav:true,
        loop:false,
        navText:['<span class="nav-ikon ikon-left"></span>','<span class="nav-ikon ikon-right"></span>'],
        responsive:{
            0:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });
    $(".df_blueNight .owl-carousel").owlCarousel({
        items:5,
        margin:15,
        nav:true,
        loop:false,
        navText:['<span class="nav-ikon ikon-left"></span>','<span class="nav-ikon ikon-right"></span>'],
        responsive:{
            0:{
                items:3,
            },
            1000:{
                items:4,
            }
        }
    });
    $('.zoom-gallery').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true,
            preload: [0,2], // read about this option in next Lazy-loading section
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% - %total%</span>' // markup of counter
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }

    });
    $('.df_blueNight .zoom-gallery3').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true,
            preload: [0,2], // read about this option in next Lazy-loading section
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% - %total%</span>' // markup of counter
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $('.df_nordicBlu .zoom-gallery3').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true,
            preload: [0,2], // read about this option in next Lazy-loading section
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% - %total%</span>' // markup of counter
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $('.df_biancoIbiza .zoom-gallery3').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true,
            preload: [0,2], // read about this option in next Lazy-loading section
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% - %total%</span>' // markup of counter
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
    $('.df_cohimWhite .zoom-gallery3').magnificPopup({
        delegate: 'a',
        type: 'image',
        closeOnContentClick: false,
        closeBtnInside: false,
        mainClass: 'mfp-with-zoom mfp-img-mobile',
        image: {
            verticalFit: true,
        },
        gallery: {
            enabled: true,
            preload: [0,2], // read about this option in next Lazy-loading section
            navigateByImgClick: true,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>', // markup of an arrow button
            tPrev: 'Previous (Left arrow key)', // title for left button
            tNext: 'Next (Right arrow key)', // title for right button
            tCounter: '<span class="mfp-counter">%curr% - %total%</span>' // markup of counter
        },
        zoom: {
            enabled: true,
            duration: 300, // don't foget to change the duration also in CSS
            opener: function(element) {
                return element.find('img');
            }
        }
    });
});