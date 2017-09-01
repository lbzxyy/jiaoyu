angular.module('course')
  .directive('nglCsEdit1', [function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/course/edit1/edit1.html',
        replace: true,
        controller: ['$scope', function() {
          console.log('课程编辑1');
        }]
      };
  }]);
