angular.module("devfvApp.controllers" , [])//ng-app Name + add .controller so you can not confused

    //Left Menu

    /*.controller("navCtrl" , function ($scope) {
									  
		$scope.select= function(item) {
			 $scope.selected = item; 
		};
		 
		 $scope.isActive = function(item) {
				return $scope.selected === item;
		 };	 
		 
		 $scope.click= function(item) {
			 if(item.subOne==null)
			 {
			 if( $('.navbar-collapse').hasClass('in'))
				   {
				   $('.navbar-collapse').removeClass('in');
				   }
				else {
					$('.navbar-collapse').addClass('in');
				};
			 }
		 };
		
        $scope.links =[
			{"name" : "Home", "url" : "#home"},
			{"name" : "About", "url" : "#aboutus"},
			{"name" : "Sales Force Automation", "url" : "", "issubTwo":true, "subOne" :
                [
                    {"name" : "Transaction", "url" : "#" , "subTwo" :
                        [
                            {"name" : "About Us", "url" : "#aboutus"},
							{"name" : "Documents", "url" : "#"},
							{"name" : "Photo Gallery", "url" : "#"}
                        ]
                    },
					{"name" : "Transaction1", "url" : "#" , "subTwo" :
                        [
                            {"name" : "Noticeboard and NewsLetter", "url" : "#"},
							{"name" : "Documents", "url" : "#"},
							{"name" : "Photo Gallery", "url" : "#"}
                        ]
                    },
					{"name" : "Transaction", "url" : "#" , "subTwo" :
                        [
                            {"name" : "Noticeboard and NewsLetter", "url" : "#"},
							{"name" : "Documents", "url" : "#"},
							{"name" : "Photo Gallery", "url" : "#"}
                        ]
                    }
                ]
            },
			{"name" : "Lead", "url" : "#", "issubTwo":true, "subOne" :
                [
                    {"name" : "Transaction", "url" : "#" , "subTwo" :
                        [
                            {"name" : "Noticeboard and NewsLetter", "url" : "#"},
							{"name" : "Documents", "url" : "#"},
							{"name" : "Photo Gallery", "url" : "#"}
                        ]
                    },
					{"name" : "Transaction1", "url" : "#" , "subTwo" :
                        [
                            {"name" : "Noticeboard and NewsLetter", "url" : "#"},
							{"name" : "Documents", "url" : "#"},
							{"name" : "Photo Gallery", "url" : "#"}
                        ]
                    }
                ]
            },
			{"name" : "Price", "url" : "#", "issubTwo":false, "subOne" :
                [
                    {"name" : "Noticeboard and NewsLetter", "url" : "#"},
					{"name" : "Documents", "url" : "#"},
					{"name" : "Photo Gallery", "url" : "#"}
                ]
            },
			{"name" : "Contact Us", "url" : "#contactus"}
        ];

        $scope.selected = 0;
        $scope.select= function(index) {
            $scope.selected = index;
        };
    })*/


