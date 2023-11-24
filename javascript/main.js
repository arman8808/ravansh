/**
* inViewport
* flatCounter
* flatOwl
* flatIsotope
* themesflatSearch(); 
* tabs();
* woocommerceTabs();
* flatCounter();
* flatOwl();
* testimonialSlider();
* flatIsotope();
* detectViewport();
* goTop();
* googleMap();
* responsiveMenu();
* headerFixed();
*
*/

;(function($) {
    "use strict";
    
    var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
     

    var inViewport =  function() {
        $('[data-inviewport="yes"]').waypoint(function() {
            $(this).trigger('on-appear');
        }, { offset: '90%', triggerOnce: true });

        $(window).on('load', function() {
            setTimeout(function() {
                $.waypoints('refresh');
            }, 100);
        });
    };
    
    var flatCounter = function() {
        if ( $().countTo ) {
            $('.counter').on('on-appear', function() {
                $(this).find('.numb-count').each(function() {
                    var to = $(this).data('to'),
                        speed = $(this).data('speed');
                        
                    $(this).countTo({
                        to: to,
                        speed: speed
                    });
                });
            });
        }
    };

    var flatOwl = function() {

        if ( $().owlCarousel ) {
            $('.flat-carousel-box').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap")),
                dots = $this.data("dots"),
                nav = $this.data("nav");
                

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    loop:true,
                    dots:dots,
                    nav: true,
                    navigation : true,
                    pagination: true,
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    responsive: {
                        0:{
                            items:item3
                        },
                        765:{
                            items:item2
                        },
                        1000:{
                            items:item
                        }
                    }
                });
            });
        }
    };

    var flatIsotope = function() {
        if($().isotope) {
            var $container = $('.isotope-product');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.product-item',
                    transitionDuration: '1s',
                    layoutMode: 'fitRows'
                });
            });

            $('.flat-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.flat-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };
    }; 

    var flatIsotope2 = function() {
        if($().isotope) {
            var $container = $('.isotope-post');
            $container.imagesLoaded(function(){
                $container.isotope({
                    itemSelector: '.post-wrap',
                    transitionDuration: '1s',
                    layoutMode: 'fitRows'
                });
            });

            $('.flat-filter li').on('click',function() {                           
                var selector = $(this).find("a").attr('data-filter');
                $('.flat-filter li').removeClass('active');
                $(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
        };
    }; 
       
    var googleMap = function () {
        // gmap default
        if ($().gmap3) {
            var data = JSON.parse('[{"address":"Westwell Leacon, Ashford, Vương Quốc Anh","content":""}]');
            $(".flat-map")
            .gmap3({
                map: {
                    options: {
                        zoom: 10,
                        center: [51.1946026,0.8140602,14.5],
                        mapTypeId: 'Wizym',
                        mapTypeControlOptions: {
                            mapTypeIds: ['Wizym', google.maps.MapTypeId.SATELLITE, google.maps.MapTypeId.HYBRID]
                        },
                        scrollwheel: true
                    },
                },
            });

        }
        // json loop
        $.each(data, function (key, val) {
            $('.flat-map').gmap3({
                marker: {
                    values: [{
                        address: val.address,
                        options: {
                            icon: "./image/icon-map.png"
                        }
                        
                    }]
                },
                styledmaptype: {
                    id: "Wizym",
                    options: {
                        name: "Wizym"
                    },
                    styles: [
                    {
                        "featureType": "administrative",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": "-100"
                        }
                        ]
                    },
                    {
                        "featureType": "administrative.province",
                        "elementType": "all",
                        "stylers": [
                        {
                            "visibility": "off"
                        }
                        ]
                    },
                    {
                        "featureType": "landscape",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": 65
                        },
                        {
                            "visibility": "on"
                        }
                        ]
                    },
                    {
                        "featureType": "poi",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "lightness": "50"
                        },
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "road",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": "-100"
                        }
                        ]
                    },
                    {
                        "featureType": "road.highway",
                        "elementType": "all",
                        "stylers": [
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "road.arterial",
                        "elementType": "all",
                        "stylers": [
                        {
                            "lightness": "30"
                        }
                        ]
                    },
                    {
                        "featureType": "road.local",
                        "elementType": "all",
                        "stylers": [
                        {
                            "lightness": "40"
                        }
                        ]
                    },
                    {
                        "featureType": "transit",
                        "elementType": "all",
                        "stylers": [
                        {
                            "saturation": -100
                        },
                        {
                            "visibility": "simplified"
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "geometry",
                        "stylers": [
                        {
                            "hue": "#ffff00"
                        },
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -97
                        }
                        ]
                    },
                    {
                        "featureType": "water",
                        "elementType": "labels",
                        "stylers": [
                        {
                            "lightness": -25
                        },
                        {
                            "saturation": -100
                        }
                        ]
                    }
                    ]
                }
            });
        });
    };    
    
    var searchIcon = function () {  // Click-search
        $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 'input-search' ) ) {
                $('.header-search-form').removeClass('show');                
            } 
        });

        $('.header-search-icon').on('click', function(event){
            event.stopPropagation();
        });

        $('.header-search-form').on('click', function(event){
            event.stopPropagation();
        });        

        $('.header-search-icon').on('click', function (event) {
            if(!$('.header-search-form').hasClass( "show" )) {
                $('.header-search-form').addClass('show');  
                event.preventDefault();                
            }
                
            else
                $('.header-search-form').removeClass('show');
                event.preventDefault();

        });        
  
    };

    var tabs = function() {

        $('.flat-tabs').each(function() {

            $(this).children('.content-tab').children().hide();

            $(this).children('.content-tab').children().first().show();

            $(this).find('.menu-tab').children('li').on('click', function(e) {  

                var liActive = $(this).index(),

                    contentActive = $(this).siblings().removeClass('active').parents('.flat-tabs').children('.content-tab').children().eq(liActive);



                contentActive.addClass('active').fadeIn('slow');

                contentActive.siblings().removeClass('active');

                $(this).addClass('active').parents('.flat-tabs').children('.content-tab').children().eq(liActive).siblings().hide();

                e.preventDefault();

            });

        });

    };

    var flatPrice = function() {
        if( $().slider ) {
            $( function() {
                $( "#slide-range" ).slider({
                  range: true,
                  min: 0,
                  max: 120,
                  values: [ 30, 120 ],
                  slide: function( event, ui ) {
                    $( "#amount" ).html( "$" + ui.values[ 0 ]  + " - " + "$" + ui.values[ 1 ] );
                  }
                });
                $( "#amount" ).html( $( "#slide-range" ).slider( "values", 0 ) + "$" + " - " + $( "#slide-range" ).slider( "values", 1 ) + "$" );
            });
        }
    };

    var flatFilterBox = function(){
        $('.box-filter').hide();
        $('.show-filter').on('click',function(){
            $('.box-filter').slideToggle(1000);
            $('.filter-shop li.filter-list').toggleClass('active');
            $(this).toggleClass('active');
        });
        $('.box-filter .btn-close').on('click',function(){
            $('.box-filter').slideToggle(1000);
            $('.show-filter').removeClass('active');
            $('.filter-shop li.filter-list').removeClass('active');
        });
    }; 

    var headerFixed = function() {
        $('#header').each(function() {
        var nav = $('#header');
        $(window).on('load', function(){
            var header = $('#header');           
            var offsetTop = $('#header').offset().top;
            var headerHeight = $('#header').height();             
            var buffer  = $('<div>', { height: headerHeight }).insertAfter(header);   
                buffer.hide();                 

            $(window).on('load scroll', function(){
                if ( $(window).scrollTop() > offsetTop  ) {
                    $('#header').addClass('fixed-header');
                    buffer.show();
                } else {
                    $('#header').removeClass('fixed-header');
                    buffer.hide();
                }
            });
        });});
    };

     var responsiveMenu = function() {
        var menuType = 'desktop';

        $(window).on('load resize', function() {
            var currMenuType = 'desktop';

            if ( matchMedia( 'only screen and (max-width: 991px)' ).matches ) {
                currMenuType = 'mobile';
            }

            if ( currMenuType !== menuType ) {
                menuType = currMenuType;

                if ( currMenuType === 'mobile' ) {
                    var $mobileMenu = $('#mainnav').attr('id', 'mainnav-mobi').hide();
                    var hasChildMenu = $('#mainnav-mobi').find('li:has(ul)');

                    $('#header .container-header ').after($mobileMenu);
                    hasChildMenu.children('ul').hide();
                    hasChildMenu.children('a').after('<span class="btn-submenu"></span>');
                    $('.btn-menu').removeClass('active');

                    var logo_mobi = $('.top-bar .logo');
                    $('#header.style2 .header-wrap, #header.style3 .header-wrap').find('.mobile-button').before(logo_mobi);
                } else {
                    var $desktopMenu = $('#mainnav-mobi').attr('id', 'mainnav').removeAttr('style');
                    $desktopMenu.find('.sub-menu').removeAttr('style');
                    $('#header .container-header ').find('.nav-wrap').append($desktopMenu);
                    $('.btn-submenu').remove();

                    var logo_desktop = $('#header.style2 .header-wrap .logo, #header.style3 .header-wrap .logo');
                    $('.top-bar.style2, .top-bar.style3').find('.top-bar-info').before(logo_desktop);
                }
            }
        });

        $('.mobile-button').on('click', function() {         
            $('#mainnav-mobi').slideToggle(300);
            $(this).toggleClass('active');
        });

        $(document).on('click', '#mainnav-mobi li .btn-submenu', function(e) {
            $(this).toggleClass('active').next('ul').slideToggle(300);
            e.stopImmediatePropagation()
        });
    };

    var countDownTime =function () {
        $(".count-time").each(function() {
            var day = $(".count-time").data("day"),
                month = $(".count-time").data("month")-1,
                year = $(".count-time").data("year"),
                hour = $(".count-time").data("hour"),
                minute = $(".count-time").data("minute"),
                second = $(".count-time").data("second");
 
            var countDownDate = new Date(year,month,day,hour,minute,second).getTime();

            // Update the count down every 1 second
            var x = setInterval(function() {

                // Get todays date and time
                var now = new Date().getTime();

                // Find the distance between now and the count down date
                  var distance = countDownDate - now;

                // Time calculations for days, hours, minutes and seconds
                var days = Math.floor(distance / (1000 * 60 * 60 * 24));
                var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                var seconds = Math.floor((distance % (1000 * 60)) / 1000);

                // Display the result in the element with id="demo"
                $(".days .numb").html(days);
                $(".hours .numb").html(hours);
                $(".minutes .numb").html(minutes);
                $(".seconds .numb").html(seconds);

                // If the count down is finished, write some text 
                if (distance < 0) {
                    clearInterval(x);
                    $(".days .numb").html("0");
                    $(".hours .numb").html("0");
                    $(".minutes .numb").html("0");
                    $(".seconds .numb").html("0");
                }
            }, 1000);
        });
    };

    var goTop =  function() {
        $(window).scroll(function() {
            if ( $(this).scrollTop() > 800 ) {
                $('#scroll-top').addClass('show');
            } else {
                $('#scroll-top').removeClass('show');
            }
        });

        $('#scroll-top').on('click', function() {
            $('html, body').animate({ scrollTop: 0 }, 1000 , 'easeInOutExpo');
            return false;
        });
    };

    var flatImagePopup = function(){
        if($().magnificPopup) {
            $('.flat-icon').each(function(){
                $(this).find('.zoom-popup').magnificPopup({
                    disableOn: 700,
                    type: 'image',
                    gallery:{
                        enabled: true
                    },
                    mainClass: 'mfp-fade',
                    removalDelay: 160,
                    preloader: false,
                    fixedContentPos: true
                });
            });
        };
    };

    var zoomPic  = function(){
        $('.zoom-pic').each(function(){
                $('.zoom-pic').fancybox();
        });
    };

    var VideoPopup =  function() {

        $(".fancybox").on("click", function(){

            $.fancybox({

              href: this.href,

              type: $(this).data("type")

                    }); // fancybox

            return false   

                }); // on

    };

    var listandgrid = function(){
        $('.filter-shop').each(function(){
            $(this).closest('body').find('.flat-products').addClass('grid');
            $(this).find('.grid ').addClass('active');
            $(this).find('.grid').on('click', function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                $(this).closest('body').find('.flat-products').removeClass('list');
                $(this).closest('body').find('.flat-products').addClass('grid');                
            });
            $(this).find('.list').on('click', function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                $(this).closest('body').find('.flat-products').removeClass('grid');
                $(this).closest('body').find('.flat-products').addClass('list');
            })
        });
    };

    var gridandlist = function(){
        $('.filter-shop').each(function(){
            $(this).closest('body').find('.main-shop-fullwidth').addClass('grid');
            $(this).find('.grid ').addClass('active');
            $(this).find('.grid').on('click', function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                $(this).closest('body').find('.main-shop-fullwidth').removeClass('list');
                $(this).closest('body').find('.main-shop-fullwidth').addClass('grid');                
            });
            $(this).find('.list').on('click', function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                $(this).closest('body').find('.main-shop-fullwidth').removeClass('grid');
                $(this).closest('body').find('.main-shop-fullwidth').addClass('list');
            })
        });
    };


    var gridandlistsidebar = function(){
        $('.filter-shop').each(function(){
            $(this).closest('body').find('.main-shop-right').addClass('grid');
            $(this).find('.grid ').addClass('active');
            $(this).find('.grid').on('click', function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                $(this).closest('body').find('.main-shop-right').removeClass('list');
                $(this).closest('body').find('.main-shop-right').addClass('grid');                
            });
            $(this).find('.list').on('click', function() {
                $(this).siblings().removeClass('active');
                $(this).addClass('active');
                $(this).closest('body').find('.main-shop-right').removeClass('grid');
                $(this).closest('body').find('.main-shop-right').addClass('list');
            })
        });
    };

    var flatRetinaLogo = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;
        var $logo = $('.logo img');
        var $logo_retina = $logo.data('retina');

        var $logo_ft = $('.logo-ft img');
        var $logo_retina_ft = $logo_ft.data('retina');

        if ( retina && $logo_retina ) {
            $logo.attr({
                src: $logo.data('retina'),
                width: $logo.data('width'),
                height: $logo.data('height')
            });
        } 

        if ( retina && $logo_retina_ft ) {
            $logo_ft.attr({
                src: $logo_ft.data('retina'),
                width: $logo_ft.data('width'),
                height: $logo_ft.data('height')
            });
        }
    };

    var ajaxContactForm = function() {  
        $('#contactform').each(function() {
            $(this).validate({
                submitHandler: function( form ) {
                    var $form = $(form),
                        str = $form.serialize(),
                        loading = $('<div />', { 'class': 'loading' });

                    $.ajax({
                        type: "POST",
                        url:  $form.attr('action'),
                        data: str,
                        beforeSend: function () {
                            $form.find('.form-submit').append(loading);
                        },
                        success: function( msg ) {
                            var result, cls;                            
                            if ( msg === 'Success' ) {                                
                                result = 'Message Sent Successfully To Email Administrator. ( You can change the email management a very easy way to get the message of customers in the user manual )';
                                cls = 'msg-success';
                            } else {
                                result = 'Error sending email.';
                                cls = 'msg-error';
                            }

                            $form.prepend(
                                $('<div />', {
                                    'class': 'flat-alert ' + cls,
                                    'text' : result
                                }).append(
                                    $('<a class="close" href="#"><i class="fa fa-close"></i></a>')
                                )
                            );

                            $form.find(':input').not('.submit').val('');
                        },
                        complete: function (xhr, status, error_thrown) {
                            $form.find('.loading').remove();
                        }
                    });
                }
            });
        }); // each contactform
    };

    var flatCarousel = function() {
        if ( $().owlCarousel ) {
            $('.flat-carousel').each(function(){
                var
                $this = $(this),
                auto = $this.data("auto"),
                item = $this.data("column"),
                item2 = $this.data("column2"),
                item3 = $this.data("column3"),
                gap = Number($this.data("gap"));

                $this.find('.owl-carousel').owlCarousel({
                    margin: gap,
                    thumb: true,
                    dots:false,
                    nav:true, 
                    navigation : true, 
                    autoplay: auto,
                    autoplayTimeout: 5000,
                    navText: ['<i class="fas fa-arrow-left"></i>','<i class="fas fa-arrow-right"></i>'],
                    responsive: {
                        0:{
                            items:item3
                        },
                        600:{
                            items:item2
                        },
                        991:{
                            items:item2
                        },
                        1085:{
                            items:item
                        }
                    }
                });
            });
        }
    };  

    var flatProgressBar = function() {
        if ( $().waypoint ) {
            $('.progress-bg').on('on-appear', function() {
                $(this).each(function() {
                    var percent = parseInt($(this).data('percent'));

                    $(this).find('.progress-animate').animate({
                        "width": percent + '%'
                    },1000, "easeInCirc");

                    $(this).parent('.themesflat-progress').find('.perc').addClass('show').animate({
                        "width": percent + '%'
                    },1000, "easeInCirc");
                });
            });
        }
    };

     var accordionToggle = function() {

        $('.flat-question').each(function () {

            var speed = {duration: 400};

            $('.flat-question .toggle-content').hide();

            $('.flat-question .accordion-toggle .toggle-title.active').siblings('.toggle-content').show();

            $('.flat-question .accordion').find('.toggle-title').on('click', function() {

                $(this).toggleClass('active');

                $(this).closest('.accordion').find('.accordion-toggle').removeClass('active');

                $(this).closest('.accordion-toggle').toggleClass('active');

                $(this).next().slideToggle(speed);

                $(".flat-question .toggle-content").not($(this).next()).slideUp(speed);

                if ($(this).is('.active')) {

                    $(this).closest('.accordion').find('.toggle-title.active').toggleClass('active')

                    $(this).toggleClass('active');



                };

            });

        });

    };

    var flatadd = function (){
        $('.flat-slider').find('.tp-rightarrow').addClass('foreground');
    };

    
    var char = function(){
        if($('.chart').length>0){var $pieChart=$('.chart');
        $pieChart.each(function(){var $elem=$(this),pieChartSize=$elem.attr('data-size')||"120",pieChartAnimate=$elem.attr('data-animate')||"2100",pieChartWidth=$elem.attr('data-width')||"6",pieChartColor=$elem.attr('data-color')||"#2e52c2",pieChartTrackColor=$elem.attr('data-trackcolor')||"rgba(0,0,0,0.1)";$elem.find('span, i').css({'width':pieChartSize+'px','height':pieChartSize+'px','line-height':pieChartSize+'px'});$elem.appear(function(){$elem.easyPieChart({size:Number(pieChartSize),animate:Number(pieChartAnimate),trackColor:pieChartTrackColor,lineWidth:Number(pieChartWidth),barColor:pieChartColor,scaleColor:!1,lineCap:'round',onStep:function(from,to,percent){$elem.find('span.percent').text(Math.round(percent))}})})})};
    };

    var changeLanguage = function () {
        $('.language-name').on('click', function(event){
            event.stopPropagation();
        });

        $(".language-name").on("click",function(){
            if ($(".list-language").hasClass('active')) {
                $(".list-language").removeClass("active"); 
            } else {
                $(".list-language").addClass("active");

            }
        });

        $(document).on('click', function(e) {   
            var clickID = e.target.id;   
            if ( ( clickID !== 'list-language' ) ) {
                $(".list-language").removeClass("active");                
            } 
        });

    }

    var flatRetinaLogo = function() {
        var retina = window.devicePixelRatio > 1 ? true : false;
        var $logo = $('#logo img');
        var $logo_retina = $logo.data('retina');

        if ( retina && $logo_retina ) {
            $logo.attr({
                src: $logo.data('retina'),
                width: $logo.data('width'),
                height: $logo.data('height')
            });
        } 
    };

    var removePreloader = function() {        
        $(window).on("load", function () {
            $("#loading-overlay").delay(500).fadeOut('slow',function(){
                $(this).remove();
            }); 
        });
    };


    $(function() {
        flatPrice();
        flatRetinaLogo(); 
        flatadd();
        flatOwl();
        flatFilterBox();
        flatIsotope();
        flatIsotope2();
        searchIcon();
        goTop();
        VideoPopup(); 
        googleMap();
        responsiveMenu();
        headerFixed();
        flatImagePopup(); 
        listandgrid();
        gridandlist();
        gridandlistsidebar();
        zoomPic();
        flatCarousel();
        flatRetinaLogo();
        ajaxContactForm();
        flatProgressBar();
        accordionToggle();
        char();
        tabs();
        changeLanguage();
        $( window ).load(function() {
            inViewport();
        });
        
        removePreloader();
        
    });
})(jQuery);