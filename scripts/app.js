angular.module("serviceApp",[])
.controller('mainCtrl', function($scope, dataService){

	$scope.helloConsole = dataService.helloConsole;

	$scope.learningNgChange = function(){
		console.log("An input is changed");
	};
	
	$scope.customers = [
		{
			"name":"Isaac Alejandro Rodriguez Morales",
			"email": "zack_cpp@hotmail.com",
			"type": "Afinacion",
			"status": "Pendiente"
		},
		{
			"name":"Isaac Alejandro Rodriguez Morales",
			"email": "zack_cpp@hotmail.com",
			"type": "Afinacion",
			"status": "Pendiente"
		},
		{
			"name":"Isaac Alejandro Rodriguez Morales",
			"email": "zack_cpp@hotmail.com",
			"type": "Afinacion",
			"status": "Pendiente"
		},
		{
			"name":"Isaac Alejandro Rodriguez Morales",
			"email": "zack_cpp@hotmail.com",
			"type": "Afinacion",
			"status": "Pendiente"
		},
		{
			"name":"Isaac Alejandro Rodriguez Morales",
			"email": "zack_cpp@hotmail.com",
			"type": "Afinacion",
			"status": "Pendiente"
		}
	]
})
.service('dataService', function(){
	this.helloConsole = function(){
		console.log('This is the hello console service');
	}
});