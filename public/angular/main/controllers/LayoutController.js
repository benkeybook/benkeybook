app.controller('LayoutController', ['$scope', function ($scope) {
  $scope.global = {
    title: 'Home',
    currentPage: '',
    breadcrumbs: [
      {
      	href: '/',
        text: 'Home',
        value: 'home'
      }
    ]
  };
}]);