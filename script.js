setTimeout(function() {
  $('body')
    .removeClass('loading')
    .addClass('loaded');
}, 5000);


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

$(function(){
  var hash = window.location.hash;
  hash && $('ul.nav a[href="' + hash + '"]').tab('show');

  $('.nav-tabs a').click(function (e) {
    $(this).tab('show');
    var scrollmem = $('body').scrollTop() || $('html').scrollTop();
    window.location.hash = this.hash;
    $('html,body').scrollTop(scrollmem);
  });
});

/*$(function(){
var device = $(window).width() >640 ? "desktop" : "mobile";
$("img").each(function() {
$(this).attr("src", $(this).data(device));
});
//改變尺寸
$(window).resize(function()
{
var device = $(window).width() > 640 ? "desktop" : "mobile";
$("img").each(function() {
$(this).attr("src", $(this).data(device));
});
});
}); */
