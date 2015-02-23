app.controller('SkillListController', ['$scope', 'Skill', function ($scope, Skill) {
  var global = $scope.global;

  $scope.searchObj = {
    label: ''
  };

  $scope.currentLabelText = 'ALL';

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
      var data = jQuery.map( skills, function( item, index ) {
        return {
          id: item['_id'],
          label: item.label,
          name: item.name,
          info: item.info,
          content: item.content
        };
      });

      $scope.skills = data;
    });

    $scope.skillLabels = getLabels();
  }

  function getLabels() {
    return [
      {
        text: 'ALL',
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

    $scope.currentLabelText = label.text;
  };
}]);