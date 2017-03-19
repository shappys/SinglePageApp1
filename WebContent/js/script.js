var app = angular.module('myapp',['ngRoute']);		 
	app.config(function($routeProvider) {
		$routeProvider.when('/', {
			templateUrl: 'home.html',
			controller: 'TemplateCtrl'
		  })
		  .when('/about', {
			templateUrl: 'about.html',
			controller: 'AboutCtrl'
		  })
		  .when('/contact', {
			templateUrl: 'contact.html',
			controller: 'ContCtrl'
		  })
		  .otherwise({
			redirectTo: '/home'
      	 });
	 });
	app.controller('TemplateCtrl',function($scope){
		 $scope.message="From Home!";
	});
	app.controller('AboutCtrl',function($scope){
		 $scope.message="From AboutUs!";
	});
	app.controller('ContCtrl',function($scope){
		 $scope.message="From ContactUs!";
	});