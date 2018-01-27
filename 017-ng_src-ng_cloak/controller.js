
//Creamos el modulo
//Agregamos el modulo ngResource para consumir REST
var app = angular.module("CustomDirective", []);

app.controller("AppCtrl", ["$scope", "$http", function(scope, http){

	http.get("https://api.github.com/users/jcperezz/repos")
	.success(function(data){
		scope.repos = data;
	})
	.error(function(err){
		console.log(err);
	});

}]);
