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
    when('/skill/:id', {
      templateUrl: '/partials/skill-Detail',
      controller: 'SkillDetailController'
    }).
    when('/about', {
      templateUrl: '/partials/about',
      controller: 'AboutController'
    }).
    otherwise({
      templateUrl: '/partials/not-found',
      controller: 'NotFoundController'
    });
}]);