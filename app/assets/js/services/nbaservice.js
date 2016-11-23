angular.module('sportsApp')

.factory("Nba", function NbaFactory($http){
  return {
    all: function(){
      return $http({method: "GET", url: "data/nba-team-info.json"});
    }
  }
});
//
