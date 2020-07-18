angular.module("devfvApp" , [ 'devfvApp.controllers' ,'devfvApp.services', 'devfvApp.Directive' ,'ui.router','oc.lazyLoad'])  // add ng-app Name

    .run(function ($rootScope, $state, globalVar) {
        // Toolbar Name
        $rootScope.$on('$stateChangeStart', function(event, toState) {
            globalVar.setPageTitle(toState.title);
			globalVar.setModuleTitle(toState.moduleTitle);
			globalVar.setSubModuleTitle(toState.subModuleTitle);
			globalVar.setVersionTitle(toState.version);
        });
		//Scroll To Top
		$rootScope.$on('$stateChangeSuccess', function() {
			document.body.scrollTop = 0;
			document.documentElement.scrollTop = 0;
		});

    })


//Route
    .config(function ($stateProvider, $urlRouterProvider) {
        $urlRouterProvider.otherwise("/index");
        $stateProvider
		
            //Home
            .state('app',{
                title:'Welcome To ZORYA',
                url: "/index",
                templateUrl:"module/home/views/home.html",
                controller:"homeCtrl",
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name:'home',
                            files:[
                                'module/home/js/home.ctrl.js'
                            ]
                        });
                    }]
                }
            })

            // About US
            .state('aboutus',{
                title:'About Us',
                url: "/aboutus",
                templateUrl:"module/aboutUs/views/aboutus.html",
                controller:"aboutusCtrl",
                resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name:'aboutus',
                            files:[
                                'module/aboutUs/js/aboutus.ctrl.js'
                            ]
                        });
                    }]
                }
            })
			
			// Contact US
			.state('contactus', {
				title: 'Contact Us',
				url: '/contactus',
                templateUrl: 'module/contactUs/views/contactus.html',
                controller: 'contactusCtrl',
				resolve: { // Any property in resolve should return a promise and is executed before the view is loaded
                    loadCtrl: ['$ocLazyLoad', function($ocLazyLoad) {
                        // you can lazy load files for an existing module
                        return $ocLazyLoad.load({
                            name:'contactus',
                            files:[
                                'module/contactUs/js/contactus.ctrl.js'
                            ]
                        });
                    }]
                }
			})
			
			
			
			
			
    });


angular.element(document).ready(function () {
    console.log('Welcome To Zorya');

});

