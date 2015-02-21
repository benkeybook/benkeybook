app.controller('SkillListController', ['$scope', 'Skill', function ($scope, Skill) {
  var global = $scope.global;

  $scope.searchObj = {
    label: ''
  };

  $scope.currentLabel = '';

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

    var skills = Skill.list(function () {
      $scope.skills = skills;
    });

    $scope.skillLabels = getLabels();
  }

  function getLabels() {
    return [
      {
        text: 'All',
        value: ''
      }, {
        text: 'HTML',
        value: 'html'
      }, {
        text: 'CSS',
        value: 'css'
      }, {
        text: 'JS',
        value: 'js'
      }, {
        text: 'DB',
        value: 'db'
      }
    ];
  }

  //=============================================== angular function
  $scope.filterClick = function (label) {
    $scope.searchObj.label = label.value;
    $scope.currentLabel = label.value;
  };
}]);