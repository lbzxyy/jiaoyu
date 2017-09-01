angular.module('category')
  .directive('nglCgAdd', [function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/category/add/add.html',
        replace: true,
        controller: ['$scope', function() {
          console.log('添加分类');
        }]
      };
  }]);
