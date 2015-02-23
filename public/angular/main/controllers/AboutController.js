app.controller('AboutController', ['$scope', function ($scope) {
  var global = $scope.global;

  init();

  //=============================================== functions
  function init() {

    // 初始化 title 和 麵包屑 導覽
    angular.extend(global,  {
      title: "About",
      currentPage: 'about',
      breadcrumbs: [
        {
          href: '/',
          text: 'Home',
          value: 'home'
        }, {
          href: '/about',
          text: 'About',
          value: 'about'
        }
      ]
    });
  }
}]);