
//Creamos el modulo
//Agregamos el modulo ngResource para consumir REST
var app = angular.module("MyFirstApp", []);

app.controller("FirstController", ["$scope", "$http", function(m, h){

	m.posts = [];

	h.get("https://jsonplaceholder.typicode.com/posts")
		.success(function(data){
			console.log(data);
			m.posts = data;

		}).error(function(err){

		});
}]);