$(function(){
	const burgerBtn = document.querySelector('.nav__burger-btn')
	const nav = document.querySelector('.nav')
	
	nav.classList.remove('nav--nojs')
	
	burgerBtn.addEventListener('click', function(){
		if(nav.classList.contains('nav--closed')) {
			nav.classList.remove('nav--closed')
			nav.classList.add('nav--opened')
		}
		else {
			nav.classList.remove('nav--opened')
			nav.classList.add('nav--closed')
		}
	})


	// slider
	$('.advantages__list').slick({
		arrows: false,
		dots: true,
		mobileFirst: true,
		responsive: [
			{
			  breakpoint: 768,
			  settings: 'unslick'
			}
		]
	});

	$('.reviews__list').slick({
		arrows: false,
		dots: true,
		mobileFirst: true,
		responsive: [
			{
			  breakpoint: 768,
			  settings: {
				  arrows: true,
				  prevArrow: '<button type="button" class="slick-prev"><span class="visually-hidden">предыдущий отзыв</span></button>',
				  nextArrow: '<button type="button" class="slick-next"><span class="visually-hidden">следующий отзыв</span></button>',
			  }
			}
		]
	})
});