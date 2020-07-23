$('body').scrollspy({ target: '#myNavbar'})
$("#gotop").click(function(){
    jQuery("html,body").animate({
        scrollTop:0
    },1000);
});
$(window).scroll(function() {
    if ( $(this).scrollTop() > 300){
        $('#gotop').fadeIn("fast");
    } else {
        $('#gotop').stop().fadeOut("fast");
    }
});

$('.navbar-nav li a').on('click', function(){
    if(!$( this ).hasClass('dropdown-toggle')){
        $('.navbar-collapse').collapse('hide');
    }
});

$("#myCarousel").carousel({
			interval :3000,
		});
