(function(){
	// Create the module and name it app
		// include ngRoute for page routing
	var app = angular.module('merrick', ['ngRoute', 'ngAnimate']);

	//Configure routes
    app.config(function($routeProvider) {
        $routeProvider
            // route for the home page
            .when('/', {
                templateUrl : 'templates/about.html',
                controller  : 'aboutController',
                controllerAs: 'aCtrl'
            })

            // route for the front-end page
            .when('/front-end', {
                templateUrl : 'templates/front-end.html',
                controller  : 'frontController',
                controllerAs: 'fCtrl'
            })

            // route for the design page
            .when('/design', {
                templateUrl : 'templates/design.html',
                controller  : 'designController',
                controllerAs: 'dCtrl'
            })

            // route for the projects page
            .when('/projects', {
                templateUrl : 'templates/projects.html',
                controller  : 'projectsController',
                controllerAs: 'pCtrl'
            })

            .otherwise({ redirectTo: '/' });
    });

	app.controller('navController', function($scope){
		$scope.isActive = function (path) {
			var urlPath = window.location.href;
			var urlPage = urlPath.substr(urlPath.indexOf("#/")+1);
		 	return path === urlPage;
		}
	});

    app.controller('aboutController', function($scope){
    	$scope.message = 'About page!';
    });

    app.controller('frontController', function($scope){
    	$scope.message = 'Front-end page!';
    });

    app.controller('designController', function($scope){
    	$scope.message = 'Design page!';    	
    });

    app.controller('projectsController', function($scope){
    	$scope.message = 'Projects page!';
    	this.design = designItems;
    });

	app.directive('navigation', function(){
		return{
			restrict: 'E',
			templateUrl: 'templates/navigation.html'
		}
	});

	var designItems = [
		{
			id:'1',
			name: 'StripedMedia.com',
			description: 'Digital marketing agency.',
			image: 'images/striped.png',
            url: 'http://stripedmedia.com'
		},
		{
			id:'2',
			name: 'Plicpad.com',
			description: 'Public notepad.',
			image: 'images/plicpad.png',
            url: 'http://plicpad.com'
		},
		{
			id:'2',
			name: 'MaxBounty.com',
			description: 'Performance Marketing Network.',
			image: 'images/maxbounty.png',
            url: 'https://maxbounty.com'
		}
	];

})();