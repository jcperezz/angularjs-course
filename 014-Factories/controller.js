
//Creamos el modulo
//Agregamos el modulo ngResource para consumir REST
var app = angular.module("ToDoList", ["LocalStorageModule"]);

app.factory("ToDoService", ["localStorageService", function(localStorageService){

	var toDoService = {};

	toDoService.key = "angular-todolist";

	if(localStorageService.get(toDoService.key)){
		toDoService.activities = localStorageService.get(toDoService.key);
	} else {
		toDoService.activities = [];
	}

	toDoService.add = function(newActv){
		toDoService.activities.push(newActv);
		toDoService.updateLocalStorage();
	};

	toDoService.updateLocalStorage = function(){
		localStorageService.set(toDoService.key, toDoService.activities);
	};

	toDoService.clean = function(){
		toDoService.activities = [];
		toDoService.updateLocalStorage();
		return toDoService.getAll();
	};

	toDoService.getAll = function(){
		return toDoService.activities;
	};

	toDoService.removeItem = function(item){
		toDoService.activities = toDoService.activities.filter(function(activity){
			return activity !== item;
		});
		toDoService.updateLocalStorage();
		return toDoService.getAll();
	}


		return toDoService;
}]);

app.controller("ToDoController", ["$scope", "ToDoService", function(scope, toDoService){


	scope.todo = toDoService.getAll();

	scope.addAct = function(){
		toDoService.add(scope.newActv);
		scope.newActv = {};
	};

	scope.removeActv = function(item){
		scope.todo = toDoService.removeItem(item);
	};

	scope.clean = function(){
		scope.todo = toDoService.clean();
	};

}]);
