angular.module("FinalApp",["lumx","ngRoute"])
.config(["$routeProvider", function(routeProvider){
  routeProvider
    .when("/", {
      controller : "MainController",
      templateUrl : "templates/home.html"
    });
}]);
