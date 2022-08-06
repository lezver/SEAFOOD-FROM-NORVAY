$(document).ready(function(){
	$('.header__slider').slick({
		dots:true,
		prevArrow:'<button type="button" class="header-prev"><img src="images/header-prev.svg" alt="svg"></button>',
		nextArrow:'<button type="button" class="header-next"><img src="images/header-next.svg" alt="svg"></button>',
		vertical:true
	});
	$('.product__slider').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		// arrows: false,
		asNavFor: '.product__slider-name',
		vertical:true,
		prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt="svg"></button>',
		nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt="svg"></button>'
	});
	$('.product__slider-name').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		asNavFor: '.product__slider',
		dots: false,
		focusOnSelect: true,
		vertical:true,
		// autoplay:true,
		prevArrow: '<button type="button" class="product-prev"><img src="images/product-prev.svg" alt="svg"></button>',
		nextArrow: '<button type="button" class="product-next"><img src="images/product-next.svg" alt="svg"></button>'
	});
	$('.header__burger').click(function(event){
		$('.header__burger,.header__manu').toggleClass('active');
	});
});