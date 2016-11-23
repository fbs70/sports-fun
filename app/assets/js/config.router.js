angular.module('sportsApp')

.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html',
      controller: 'MainIndexController',
      //controllerAs: 'indexController'
      title: 'Home'
    })
    .state('nba', {
      url: '/nba',
      templateUrl: 'partials/nba/nba.html',
      controller: 'NbaIndexController',
      controllerAs: 'indexController',
      //title: 'NBA'
    })
    .state('nfl', {
      url: '/nfl',
      templateUrl: 'partials/nfl/nfl.html',
      //controller: 'NflCtrl',
      controller: 'NflIndexController',
      controllerAs: 'indexController',
      title: 'NFL'
    })
    .state('users', {
      url: '/users',
      templateUrl: 'partials/users/index.html',
      controller: 'UsersIndexController',
      //controllerAs: 'indexController'
    })
    .state('userdetail', {
      url: '/users/:id',
      templateUrl: 'partials/users/detail.html',

    })

  $urlRouterProvider.otherwise('home');
}]);
