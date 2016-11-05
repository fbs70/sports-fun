app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: 'partials/home.html',
      controller: 'MainCtrl',
      title: 'Home'
    })
    .state('nba', {
      url: '/nba',
      templateUrl: 'partials/nba.html',
      controller: 'NbaCtrl',
      title: 'NBA'
    })
    .state('nfl', {
      url: '/nfl',
      templateUrl: 'partials/nfl.html',
      controller: 'NflCtrl',
      title: 'NFL'
    })

  $urlRouterProvider.otherwise('home');
}]);
