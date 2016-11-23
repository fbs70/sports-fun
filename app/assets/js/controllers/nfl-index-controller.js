angular.module('sportsApp')

.controller('NflIndexController', ['$scope','Nfl', function($scope, Nfl){
  Nfl.all()
    .success(function(response){
      $scope.nflTeam = response.nfl;
    });

}]);
