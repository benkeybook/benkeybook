app.controller('SkillListController', ['$scope', function ($scope) {
  var global = $scope.global;

  init();

  //=============================================== functions
  function init() {

    // 初始化 title 和 麵包屑 導覽
    angular.extend(global,  {
      title: "Skills",
      currentPage: 'skill-list',
      breadcrumbs: [
        {
          href: '/',
          text: 'Home',
          value: 'home'
        }, {
          href: '/skill-list',
          text: 'Skills',
          value: 'skill-list'
        }
      ]
    });
  }
}]);