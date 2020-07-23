$('.navbar-nav li a').on('click', function(){
    if(!$( this ).hasClass('dropdown-toggle')){
        $('.navbar-collapse').collapse('hide');
    }
});

/*圖片輪播*/

$("#myCarousel").carousel({
			interval :3000,
		});
/*
$('.navbar a').on('click', function()
{
//點擊時，如果已經沒有下一層選單的話，則再關閉navbar
if($(this).attr("data-toggle") == undefined)
{
$('.navbar-toggle').click();
}
});    */