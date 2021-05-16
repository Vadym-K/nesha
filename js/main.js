$(function(){
	$(".owl-carousel").owlCarousel({
		loop: true,
		margin: 10,
		navText: ['<i class="icon-chevron-thin-left"></i>', '<i class="icon-chevron-thin-right"></i>'],
		responsive: {
		 	0: {
		 		items: 2
		 	},
			 480: {
			 	items: 4
			 }
		}
	});
	$(".icon-menu").on('click', function(){
		var $this = $(this).parents(".container_nav");

		if($this.hasClass("open_icon-menu")){
			$this.removeClass("open_icon-menu");
		} else {
			$this.addClass('open_icon-menu');
		}
	});

	$(".close_menu").on('click', function(){
		var $this = $(this).parents(".container_nav");

		$this.removeClass('open_icon-menu');
	});

 	$(".wrapper").click(function(event) {
 		if(!$(event.target).closest('.mob_menu, .icon-menu').length) {
 			if($(".container_nav").hasClass('open_icon-menu')) {
 				$(".container_nav").removeClass('open_icon-menu');
 			}
 		}
 	});
 	$(".catalog").on('click', function(){
		var $this = $(this).parents(".shop_container");

		if($this.hasClass("open_catalog")){
			$this.removeClass("open_catalog");
		} else {
			$this.addClass('open_catalog');
		}
	});

	$(".close_menu").on('click', function(){
		var $this = $(this).parents(".shop_container");

		$this.removeClass('open_catalog');
	});

 	$(".wrapper").click(function(event) {
 		if(!$(event.target).closest('.shop_container .left_col, .catalog').length) {
 			if($(".shop_container").hasClass('open_catalog')) {
 				$(".shop_container").removeClass('open_catalog');
 			}
 		}
 	});

 	$(".png_nav").on('click', function(){
		var $this = $(this).parents(".wrapper");

		if($this.hasClass("overlay")){
			$this.removeClass("overlay");
		} else {
			$this.addClass('overlay');
		}
	});

	$(".close_menu").on('click', function(){
		var $this = $(this).parents(".wrapper");

		$this.removeClass('overlay');
	});

 	$(".wrapper").click(function(event) {
 		if(!$(event.target).closest('.basket_holder, .png_nav').length) {
 			if($(".wrapper").hasClass('overlay')) {
 				$(".wrapper").removeClass('overlay');
 			}
 		}
 	});
 	$(".commission").click(function (){
 		$(".skip_container").toggleClass('skip');
 	})
 	$(".holder_crooss").click(function (){
 		$(".bury").toggleClass('elope');
 	})
 	$(".select").select2({
		placeholder: "Страна"
	});
	$(".city").select2({
		placeholder: "Город"
	});
	$(".render").select2({
 		minimumResultsForSearch: Infinity,
		placeholder: "Способ оплаты"
	});
	$(".carousel_slick").slick({
		  draggable: false,
    	vertical: true,
    	speed: 1200
  });
});
$(window).on('resize', function(){
  if(  $(window).width() <= 480  ){
  if(!$('.carousel_slick').hasClass('slick-initialized')){
    $('.carousel_slick').slick({
        draggable: false,
        vertical: true,
        speed: 1200
   });
  }
 }else{
  if($('.carousel_slick').hasClass('slick-initialized')){
   $('.carousel_slick').slick('unslick');
  }
 }
})
$(window).trigger('resize'); 
(function() {
 
  window.inputNumber = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-number'));
(function() {
 
  window.inputNumb = function(el) {

    var min = el.attr('min') || false;
    var max = el.attr('max') || false;

    var els = {};

    els.dec = el.prev();
    els.inc = el.next();

    el.each(function() {
      init($(this));
    });

    function init(el) {

      els.dec.on('click', decrement);
      els.inc.on('click', increment);

      function decrement() {
        var value = el[0].value;
        value--;
        if(!min || value >= min) {
          el[0].value = value;
        }
      }

      function increment() {
        var value = el[0].value;
        value++;
        if(!max || value <= max) {
          el[0].value = value++;
        }
      }
    }
  }
})();

inputNumber($('.input-numb'));

$(function() {
 
$(window).scroll(function() {
 
if($(this).scrollTop() != 0) {
 
$('#toTop').fadeIn();
 
} else {
 
$('#toTop').fadeOut();
 
}
 
});
 
$('#toTop').click(function() {
 
$('body,html').animate({scrollTop:0},800);
 
});
 
});