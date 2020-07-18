angular.module('devfvApp.Directive' , [])
   

// Tool Bar

    .directive ('devfvToolbar' , function () {
        return {
            restrict: 'E',
            scope: {},
            bindToController: {
                param: '='
            },
            template:
                /*'<a class="dropdown-toggle" data-toggle="dropdown">'+
                    '<h2 class="pull-left">{{pageTitle}}</h2>' +
                '</a>'*/
                /*'<ol class="breadcrumb">' +
                 ' <li id="moduleTitle" class="breadcrumbTxt">{{moduleTitle}} </li>' +
				 ' <li id="subModuleTitle" class="breadcrumbTxt">{{subModuleTitle}} </li>' +
                 ' <li id="pageTitle" class="breadcrumbTxt">{{pageTitle}}</li>' +
				 ' <li id="versionTitle"  class="breadcrumbTxt">{{versionTitle}}</li>' +
                '</ol>'*/
				'{{pageTitle}}',
				
            controller: function ($rootScope, $scope, globalVar) {
				
			   $scope.$watch(function ()
                { return globalVar.getPageTitle(); },
                    function (newValue) {
                        $scope.pageTitle = globalVar.getPageTitle();
						if ($scope.pageTitle == undefined || $scope.pageTitle == null || $scope.pageTitle == ''){
							var elem = document.getElementById('pageTitle');
								elem.remove();
							}
                    }, true);
				
            },
            controllerAs: 'model'
        }
    })
	

	
	////////////////// owlCarousel
	
	.directive('owlCarousel', function() {
		return {  
        restrict: 'E',  
        link: function (scope, element, attrs) {  
            var options = scope.$eval($(element).attr('data-options'));  
            $(element).owlCarousel(options);  
        	}  
    	};  
	})
	
//// Map	
	
	.directive('myMap', function() {
    // directive link function
		var link = function(scope, element, attrs) {
			var map, infoWindow;
			var markers = [];
			
			// map config
			var mapOptions = {
				center: new google.maps.LatLng(22.842477, 74.2143771),
				zoom: 5,
				mapTypeId: google.maps.MapTypeId.ROADMAP,
				scrollwheel: false
			};
			
			// init the map
			function initMap() {
				if (map === void 0) {
					map = new google.maps.Map(element[0], mapOptions);
				}
			}    
			
			// place a marker
			function setMarker(map, position, title, content) {
				var marker;
				var markerOptions = {
					position: position,
					map: map,
					title: title
				};
	
				marker = new google.maps.Marker(markerOptions);
				markers.push(marker); // add marker to array
				
				google.maps.event.addListener(marker, 'click', function () {
					// close window if not undefined
					if (infoWindow !== void 0) {
						infoWindow.close();
					}
					// create new window
					var infoWindowOptions = {
						content: content
					};
					infoWindow = new google.maps.InfoWindow(infoWindowOptions);
					infoWindow.open(map, marker);
				});
			}
			
			// show the map and place some markers
			initMap();
			
			setMarker(map, new google.maps.LatLng(22.550971, 88.354152), 'Anuj Chambers, 6th Floor, 24 Park Street, Kolkata, West Bengal 700016, India');
			setMarker(map, new google.maps.LatLng(28.53952, 77.289257), 'Tower B, DLF Building, 4th Floor, 423 Jasola, New Delhi-110044');
			setMarker(map, new google.maps.LatLng(23.07468, 72.525609), 'Near Sola Bridge, SG Highway, Janta Nagar Kakoldiya Rd, Sola, Ahmedabad, Gujarat 380060, India');
			setMarker(map, new google.maps.LatLng(19.10788, 72.866905), '105, Meadows,Sahar Plaza Complex,1st Floor, J.B., Andheri - Kurla Road, J B Nagar, Andheri East, Mumbai, Maharashtra 400059, India');
			setMarker(map, new google.maps.LatLng(12.982775, 77.613052), 'Manipal Centre, South Block, S-215, 2nd Floor, #47, Dickenson Road Bengaluru - 560 042');
			setMarker(map, new google.maps.LatLng(13.0826802, 80.2707184), 'Chennai Sales Office');
			setMarker(map, new google.maps.LatLng(25.2048493, 55.2707828), 'System Middle East (SME), P.O. Box 96184, Dubai, UAE');
		};
		
		return {
			restrict: 'A',
			template: '<div id="map"  style="width: 100%; height: 650px;"></div>',
			replace: true,
			link: link
		};
	})
