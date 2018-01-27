
//Creamos el modulo
//Agregamos el modulo ngResource para consumir REST
var app = angular.module("CustomDirective", []);

app.directive("myAutocomplete", function(){



	function link(scope, element, attrs){

console.log(scope);

		$(element).autocomplete({
			source: scope["repos"],
			select: function(ev, ui){
				ev.preventDefault();
				scope.optionSelected(ui.item.value);
			},
			focus: function(ev, ui){
				ev.preventDefault();
				$(this).val(ui.item.label);
			}
		});
	};

	return {
		link : link
	};
});

app.directive("backImg", function(){
	return function(scope, element, attrs){

		attrs.$observe("backImg", function(value){
			element.css({
				"background": "url("+value+")",
				"background-size":"cover",
				"background-position":"center"
			});
		});

	}
});

app.controller("AppCtrl", ["$scope", "$http", function(scope, http){

	http.get("https://api.github.com/users/jcperezz/repos")
	.success(function(data){
    scope.repos = [];
		scope.posts = data;
		for(var i = data.length - 1; i >= 0; i--) {
			var repo = data[i];
			scope.repos.push(repo.name);
		};

	})
	.error(function(err){
		console.log(err);
	});

	scope.optionSelected = function(dat){
		scope.$apply(function(){
			scope.main_repo = data;
		});
	};

}]);
