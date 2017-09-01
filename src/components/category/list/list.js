angular.module('category')
  .directive('nglCgList', [function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/category/list/list.html',
        replace: true,
        controller: ['$scope', function() {
          console.log('分类列表');
        }]
      };
  }]);
