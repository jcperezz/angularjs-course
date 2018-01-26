
//Creamos el modulo
//Agregamos el modulo ngResource para consumir REST
var app = angular.module("ToDoList", ["LocalStorageModule"]);

app.service("ToDoService", ["localStorageService", function(localStorageService){


	this.key = "angular-todolist";

	if(localStorageService.get(this.key)){
		this.activities = localStorageService.get(this.key);
	} else {
		this.activities = [];
	}

	this.add = function(newActv){
		this.activities.push(newActv);
		this.updateLocalStorage();
	};

	this.updateLocalStorage = function(){
		localStorageService.set(this.key, this.activities);
	};

	this.clean = function(){
		this.activities = [];
		this.updateLocalStorage();
		return this.getAll();
	};

	this.getAll = function(){
		return this.activities;
	};

	this.removeItem = function(item){
		this.activities = this.activities.filter(function(activity){
			return activity !== item;
		});
		this.updateLocalStorage();
		return this.getAll();
	}

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
