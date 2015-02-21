app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/partials/home',
      controller: 'HomeController'
    }).
    when('/game-list', {
      templateUrl: '/partials/game-list',
      controller: 'GameListController'
    }).
    when('/skill-list', {
      templateUrl: '/partials/skill-list',
      controller: 'SkillListController'
    }).
    otherwise({
      redirectTo: '/'
    });
}]);