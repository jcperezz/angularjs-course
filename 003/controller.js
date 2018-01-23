
//Creamos el modulo
//Agregamos el modulo ngResource para consumir REST
var app = angular.module("MyFirstApp", []);

app.controller("FirstController", function($scope){
	$scope.nombre = "juan";
	$scope.nuevoComentario = {};
	$scope.comentarios = [
		{
			comentario:"Buen tutorial",
			username: "codigofacilito"
		},
		{
			comentario: "Malisimo",
			username : "tales"
		}
	];

	$scope.agregarComentario = function() {
		$scope.comentarios.push($scope.nuevoComentario);
		$scope.nuevoComentario = {};
	};
});