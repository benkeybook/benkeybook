app.controller('NotFoundController', ['$scope', function ($scope) {
  var global = $scope.global;

  init();

  //=============================================== functions
  function init() {

    // 初始化 title 和 麵包屑 導覽
    angular.extend(global,  {
      title: "Not Found",
      currentPage: 'not-found',
      breadcrumbs: [
        {
          href: '/',
          text: 'Home',
          value: 'home'
        }, {
          href: '/not-found',
          text: 'Not Found',
          value: 'not-found'
        }
      ]
    });
  }
}]);