angular.module("serviceApp",[])
.controller('mainCtrl', function($scope, dataService){


	$scope.learningNgChange = function(){
		console.log("An input is changed");
	};
	
	$scope.helloConsole = dataService.helloConsole;

	dataService.getCustomers(function(response){
			console.log(response.data);
			$scope.customers = response.data;
		});
	
})
.service('dataService', function($http){
	this.helloConsole = function(){
		console.log('This is the hello console service');
	};

	this.getCustomers = function(callback) {
		$http.get('mock/customers.json')
		.then(callback)
	} 
});