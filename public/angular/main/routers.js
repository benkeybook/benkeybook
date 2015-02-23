app.config(['$routeProvider', function ($routeProvider) {
  $routeProvider.
    when('/', {
      templateUrl: '/partials/main/home',
      controller: 'HomeController'
    }).
    when('/game-list', {
      templateUrl: '/partials/main/game-list',
      controller: 'GameListController'
    }).
    when('/skill-list', {
      templateUrl: '/partials/main/skill-list',
      controller: 'SkillListController'
    }).
    when('/skill/:id', {
      templateUrl: '/partials/main/skill-Detail',
      controller: 'SkillDetailController'
    }).
    when('/about', {
      templateUrl: '/partials/main/about',
      controller: 'AboutController'
    }).
    otherwise({
      templateUrl: '/partials/main/not-found',
      controller: 'NotFoundController'
    });
}]);