angular.module('sportsApp')
.controller("UsersIndexController", ['$scope', 'Gravatar', 'User', function($scope, Gravatar, User){
  var myEmail = 'blair.shotlow@gmail.com';
  var user;

  User.all()
    .success(function(data){
      $scope.users = data;
    });

  //user =

  //$scope.users = user;

  $scope.gravatarUrl = function(email){
    return Gravatar(email);
  }

  //$scope.myEmail=gravatarUrl(myEmail);
}]);
