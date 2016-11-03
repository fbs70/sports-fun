'use strict';

// Declare app level module which depends on views, and components
var app = angular.module('sportsApp', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html',
      controller: 'MainCtrl'
    })
    .state('nba', {
      url: '/nba',
      templateUrl: 'partials/nba.html',
      controller: 'NbaCtrl'
    })
    .state('nfl', {
      url: '/nfl',
      templateUrl: 'partials/nfl.html',
      controller: 'NflCtrl'
    })

  $urlRouterProvider.otherwise('home');
}]);

app.controller('MainCtrl', ['$scope', function($scope){
  $scope.isNavCollapsed = true;
}]);

app.controller('NbaCtrl', ['$scope', '$http', function($scope, $http){
  //$scope.isNavCollapsed = true;

  $http.get('data/nba-team-info.json')
    .success(function(response){
      $scope.nbaTeam = response.nba;
    });

}]);

app.controller('NflCtrl', ['$scope', '$http', function($scope, $http){
  //$scope.isNavCollapsed = true;

  $http.get('data/nfl-team-info.json')
    .success(function(response){
      $scope.nflTeam = response.nfl;
    });
}]);
