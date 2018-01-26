//Ejercicio con rootScope y child nodes
var app = angular.module("MyFirstApp", []);

// #run Se ejecuta al instanciar por primera vez el modulo
app.run(["$rootScope", function(scope) {
	scope.nombre = "Prueba";
}]);

app.controller("FirstController", ["$scope", "$rootScope", function(scope, rootScope){
	scope.nombre = "Otro nombre";

}]);

app.controller("ChildController", ["$scope", "$rootScope", function(scope){

}]);
