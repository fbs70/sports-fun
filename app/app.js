'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('sportsApp', ['ui.router', 'ngAnimate' ,'ngTouch']);

app.controller('MainCtrl', ['$scope', function($scope){
}]);

app.controller('NbaCtrl', ['$scope', '$http', function($scope, $http){
  //$scope.isNavCollapsed = true;
  $scope.nbaTeam = [ ];

  $http.get('data/nba-team-info.json')
    .success(function(response){
      $scope.nbaTeam = response.nba;
    });

}]);

app.controller('NflCtrl', ['$scope', '$http', function($scope, $http){
  //$scope.isNavCollapsed = true;
  $scope.nflTeam = [ ];

  $http.get('data/nfl-team-info.json').success(function(data){
      $scope.nflTeam = data.nfl;
    });
}]);
