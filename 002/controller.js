
//Creamos el modulo
//Agregamos el modulo ngResource para consumir REST
var app = angular.module("MyFirstApp", []);
app.controller("FirstController", function($scope){
	$scope.nombre = "juan";
});