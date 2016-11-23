angular.module('sportsApp')

.factory("Nfl", function NflFactory($http){
  return {
    all: function(){
      return $http({method: "GET", url: "data/nfl-team-info.json"});
    }
  }
});
//
