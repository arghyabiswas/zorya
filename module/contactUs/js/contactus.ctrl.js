/*Park Area Controller*/
angular.module('contactus.ctrl', [])

    .controller("contactusCtrl", function ($scope) {

//Page Height	
        /*var fnHeight = function () {
            var heightWithoutNavbar = $("body > #wrapper").height() - 61;
            $(".sidebard-panel").css("min-height", heightWithoutNavbar + "px");

            var navbarHeigh = $('nav.navbar-default').height();
            var wrapperHeigh = $('#page-wrapper').height();

            if (navbarHeigh > wrapperHeigh) {
                $('#page-wrapper').css("min-height", navbarHeigh + "px");
            }

            if (navbarHeigh < wrapperHeigh) {
                $('#page-wrapper').css("min-height", $(window).height() + "px");
            }

            if ($('body').hasClass('fixed-nav')) {
                $('#page-wrapper').css("min-height", $(window).height() - 60 + "px");
            }
        }
*/
//Page Resize	
        var fnResize = function () {
            var divHeight = $(window).height();
            var divHeight1 = $('#header').outerHeight();
			var divHeight2= $('#footer').outerHeight();
            /*var divHeight3 = 0;
            if ($('.footer').is(':visible'))
                divHeight3 = $('.footer').outerHeight();
            else
                $('.wrapper-content').css('margin-bottom', '0px');*/

            var scrHeight = parseFloat (divHeight - (divHeight1 + divHeight2) -30);
            $('.mainBody').css('min-height', scrHeight);
        }
        
        $(window).resize(function () {
            fnResize();
           // fnHeight();
        })
      
        var init = function () {
            fnResize();
           // fnHeight();
        }();
		
//Caption							  
    $scope.initializeToolBar = {showOnlyCaption: false};
	
	 /*$scope.owlOptionsTestimonials = {
            autoPlay: 4000,
            stopOnHover: true,
            slideSpeed: 300,
            paginationSpeed: 600,
            items: 1,
			navigation : true,
			navigationText: [
			"<i class='fa fa-angle-left'></i>",
			"<i class='fa fa-angle-right'></i>"
			],
			transitionStyle : "fade"
        }*/
	
    })

