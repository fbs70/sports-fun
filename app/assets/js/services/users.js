angular.module('sportsApp')

.factory("User", function UserFactory($http){
  //var apiUrl = "data/user.json";
  return {
    all: function(){
      return $http({method: "GET", url: "data/user.json"});
    }
  }
});
