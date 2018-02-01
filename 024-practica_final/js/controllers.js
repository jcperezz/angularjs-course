angular.module("FinalApp")
.controller("MainController", ["$scope", "$resource", "PostResource", function(scope, resource, postResource){
  User = resource("https://jsonplaceholder.typicode.com/users/:id", {id: "@id"});

  scope.posts = postResource.query();
  scope.users = User.query();

  scope.removePost = function(post){
    postResource.delete({id: post.id}, function(data){
      console.log(data);
    });

    scope.posts = scope.posts.filter(function(element){
      return element.id !== post.id;
    });
  };
}])
.controller("PostController", ["$scope", "$resource", "$routeParams", "PostResource", "$location", function (scope, resource, routeParams, postResource, location) {
  scope.title = "Editar posts";
  scope.post = postResource.get({id: routeParams.id});

  scope.savePost = function(){
    postResource.update({
      id: scope.post.id
    }, function(data){
      console.log(data);
      location.path("/post/"+scope.post.id);
    });
  };

}])
.controller("NewPostController", ["$scope", "$resource", "PostResource", "$location", function(scope, resource, postResource, location) {
  scope.post = {};
  scope.title = "Crear Post";
  scope.savePost = function(){
    postResource.save({
      data: scope.post
    }, function(data){
      console.log(data);
      location.path("/");
    });
  };
}]);
