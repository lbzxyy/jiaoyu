angular.module('teacher')
  .directive('nglTcAdd', [function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/teacher/add/add.html',
        replace: true,
        controller: ['$scope', function() {
          console.log('讲师添加');
        }]
      };
  }]);
