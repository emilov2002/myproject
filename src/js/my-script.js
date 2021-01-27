$(document).ready(function(){
//home
    var owl = $('#slider');
    owl.owlCarousel({
        items:1,
        loop:true,
        dots:false

    });
    $('.customNextBtn').click(function() {
        owl.trigger('next.owl.carousel');
    })
// Go to the previous item
    $('.customPrevBtn').click(function() {
        // With optional speed parameter
        // Parameters has to be in square bracket '[]'
        owl.trigger('prev.owl.carousel', [300]);
    })


    var owl3 = $('#partners');
    owl3.owlCarousel({
        items:1,
        loop:true,
        dots:false,
        autoplay:true,
        autoplayTimeout:1500,
        autoplayHoverPause:true

    });

    var owl2 = $('#staging-block');
    owl2.owlCarousel({

        items:4,
        loop:true,
        nav : true,
        dots:false,
        responsive:{
            0:{
                items:1,
                nav: false
            },
            550: {
                items: 1,
                nav: false
            },
            736:{
                items:2,
                nav:false
            },
            766:{
                items:2,
                nav:false
            },
            992:{
                items:3,
                nav:true,

            },
            1200: {
                items: 4,
                nav: false
            }
        }

        });



    $(window).scroll(function () {
        if($(this).scrollTop() > 300){
            $(".upBtn").fadeIn()
        } else{
            $(".upBtn").fadeOut()
        }
    })


});
$(document).ready(function () {
    $(".burger-menu").on("click", function () {
        $(".burger-menu").toggleClass("active")
        $(".header .nav").toggleClass("active")
    })
});
//partners



