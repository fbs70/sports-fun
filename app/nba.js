'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('nba-teams');

app.controller('NbaCtrl', ['$scope', '$http', function($scope, $http){
  //$scope.isNavCollapsed = true;

  $http.get('data/nba-team-info.json')
    .success(function(response){
      $scope.nbaTeam = response.nba;
    });

}]);
