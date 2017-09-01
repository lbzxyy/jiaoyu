angular.module('teacher')
  .directive('nglTcEdit', [function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/teacher/edit/edit.html',
        replace: true,
        controller: ['$scope', function() {
          console.log('讲师编辑');
        }]
      };
  }]);
