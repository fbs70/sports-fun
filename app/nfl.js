'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('nfl-teams', []);

app.controller('NflCtrl', ['$scope', '$http', '$log', function($scope, $http, $log){
  //$scope.isNavCollapsed = true;
  var nflTeam = this;
  nflTeam.teams = [ ];

  $http.get('data/nfl-team-info.json').success(function(data){
      nflTeam.teams = data.nfl;
    });

    $log.log(nflTeam.teams)
}]);
