app.controller('SkillDetailController', ['$scope' ,'$routeParams', 'Skill', function ($scope, $routeParams, Skill) {
  var global = $scope.global;
  var id = $routeParams.id;

  init();

  //=============================================== functions
  function init() {

    // 初始化 title 和 麵包屑 導覽
    angular.extend(global,  {
      title: "Skill Detail",
      currentPage: 'skill-detail',
      breadcrumbs: [
        {
          href: '/',
          text: 'Home',
          value: 'home'
        }, {
          href: '/skill-list',
          text: 'Skills',
          value: 'skill-list'
        }, {
          href: '/skill/' + id,
          text: null,
          value: 'skill-detail'
        }
      ]
    });

    var skill = Skill.get({ id: id },function () {
      global.breadcrumbs[2].text = skill.name;

      $scope.skill = skill;
    });
  }
}]);