window.setTimeout(function(){
   $(".preloader").addClass('loaded');
    $(".wrapper").addClass('animated');
 }, 3000);

// Fixed Toolbar Shadow
$(window).scroll(function() {
    if ($(window).scrollTop() > 0) {
        $('.navbar').addClass('navbar-shadow');
    } 
	else {
        $('.navbar').removeClass('navbar-shadow');
    }
});



$(document).ready(function(){
		
	 $(".aclick").click(function()
		{
		  $("#navbarSupportedContent").removeClass("navbar-collapse collapse show");
					   
		  $("#navbarSupportedContent").addClass("navbar-collapse collapse");
		});
	 
		$('.navbar-nav .nav-link').click(function(){
			$('.navbar-nav .nav-link').removeClass('active');
			$(this).addClass('active');
		})
		
		/*$(".nav li").click(function()
		{
		  $("li a").removeClass("active");
					   
		  $(this).addClass("active");
		});*/
	});

// wrapper-content Height
function wrapperContentResize(){
    //var divHeight = $(window).height();
    var divHeight1=$('.layout-item-right').outerHeight();
    var scrHeight = parseFloat(divHeight1);

    if (window.matchMedia('(min-width: 1200px)').matches)
    {
         $('.slider-text').css('min-height',scrHeight);
    }
    else {
      $('.slider-text').css('min-height','auto');
    }
}

$(window).resize(function() { 
	wrapperContentResize();
	})	
wrapperContentResize();




$(document).ready(function () {
	
	
	
// Footer Year
var date = new Date();
var year = date.getFullYear();
document.getElementById("printYear").innerHTML = year;
	
// wrapper-content Height
function wrapperContentResize(){
    var divHeight = $(window).height();
    var divHeight1=$('.nav-container').outerHeight();
    var divHeight2=$('.footer-container').outerHeight();

    var scrHeight = parseFloat(divHeight - (divHeight1 + divHeight2) -40);
        $('.main-body').css('min-height',scrHeight);
    }

wrapperContentResize();
		
	$(window).resize(function() { 
		wrapperContentResize();
	})
	
});

/*Page Scroll On mouse Scroll*/	
	$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1,
      isTouch           = Modernizr.touch;

  if (isTouch) { $('.revealOnScroll').addClass('animated'); }

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated fadeInUp flipInX lightSpeedIn')
      }
    });
  }

  revealOnScroll();
});




