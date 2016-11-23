angular.module("sportsApp")

.directive("nwCard", function() {
  var num =1;
  return {
    restrict: "E",
    templateUrl: "partials/directives/nw-card.html",
    scope: {
      header: "=",
      image: "=",
      body: "="
    },
    /*controller: function($scope){
      $scope.header = "Note Title" + num++;
    },
    controllerAs: "card"*/
  };
});
