angular.module('course')
  .directive('nglCsEdit3', [function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/course/edit3/edit3.html',
        replace: true,
        controller: ['$scope', function() {
          console.log('课程编辑3');
        }]
      };
  }]);
