angular.module('course')
  .directive('nglCsEdit2', [function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/course/edit2/edit2.html',
        replace: true,
        controller: ['$scope', function() {
          console.log('课程编辑2');
        }]
      };
  }]);
