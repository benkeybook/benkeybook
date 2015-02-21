app.controller('GameListController', ['$scope', function ($scope) {
  var global = $scope.global;

  init();

  //=============================================== functions
  function init() {

    // 初始化 title 和 麵包屑 導覽
    angular.extend(global,  {
      title: "Games",
      currentPage: 'game-list',
      breadcrumbs: [
        {
          href: '/',
          text: 'Home',
          value: 'home'
        }, {
          href: '/game-list',
          text: 'Games',
          value: 'game-list'
        }
      ]
    });
  }
}]);