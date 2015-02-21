app.controller('LayoutController', ['$scope', function ($scope) {
  $scope.global = {
    title: 'Home',
    currentPage: 'home',
    breadcrumbs: [
      {
      	href: '/',
        text: 'Home',
        value: 'home'
      }
    ]
  };
}]);