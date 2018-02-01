angular.module("FinalApp",["lumx","ngRoute", "ngResource"])
.config(["$routeProvider", function(routeProvider){
  routeProvider
    .when("/", {
      controller : "MainController",
      templateUrl : "templates/home.html"
    });
}]);
