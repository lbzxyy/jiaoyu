angular.module('course')
  .directive('nglCsList', [function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/course/list/list.html',
        replace: true,
        controller: ['$scope', function() {
          console.log('课程列表');
        }]
      };
  }]);
