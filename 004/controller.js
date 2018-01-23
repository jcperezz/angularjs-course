
//Creamos el modulo
//Agregamos el modulo ngResource para consumir REST
var app = angular.module("MyFirstApp", []);

app.controller("FirstController", ["$scope", function(m){
	m.nombre = "juan";
	m.nuevoComentario = {};
	m.comentarios = [
		{
			comentario:"Buen tutorial",
			username: "codigofacilito"
		},
		{
			comentario: "Malisimo",
			username : "tales"
		}
	];

	m.agregarComentario = function() {
		m.comentarios.push(m.nuevoComentario);
		m.nuevoComentario = {};
	};
}]);