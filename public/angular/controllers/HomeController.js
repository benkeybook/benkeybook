app.controller('HomeController', ['$scope', function ($scope) {
  var global = $scope.global;

  init();

  //=============================================== functions
  function init() {

    // 初始化 title 和 麵包屑 導覽
    angular.extend(global,  {
      title: "Ben's World Map",
      currentPage: 'home',
      breadcrumbs: [
        {
          href: '/',
          text: 'Home',
          value: 'home'
        }
      ]
    });
  }
}]);