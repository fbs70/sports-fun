angular.module('sportsApp')

.controller('NbaIndexController', ['$scope','Nba', function($scope, Nba){
  //$scope.isNavCollapsed = true;
  //$scope.nbaTeam = [ ];

  //$http.get('data/nba-team-info.json')
  Nba.all()
    .success(function(response){
      $scope.nbaTeam = response.nba;
    });

}]);
