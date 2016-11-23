'use strict';

// Declare app level module which depends on views, and components
angular.module('sportsApp', ['ui.router', 'ngAnimate' ,'ngTouch'])



.config(function (GravatarProvider) {
  GravatarProvider.setSize(100);
});

/*.controller('NflCtrl', ['$scope', '$http', function($scope, $http){
  $scope.nflTeam = [ ];

  $http.get('data/nfl-team-info.json').success(function(data){
      $scope.nflTeam = data.nfl;
    });
}]);*/
