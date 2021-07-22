$(function(){

    $(".menu a, .footer__go-top").on("click", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: top}, 2000);
	});


    $('.slider-blog__inner').slick({
        dots: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="images/arrow-left.svg" alt="ico: arrow-left"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="images/arrow-right.svg" alt="ico: arrow-right"></button>',
    
    responsive:[
        {
            breakpoint: 769,
            settings:{
                arrows: false
            }
        },
    ]
});


    $('.menu__btn, .menu a').on('click', function(){
        $('.header__top-inner').toggleClass('header__top-inner--active');
    });


    var mixer = mixitup('.portfolio__content');
})