angular.module('category')
  .directive('nglCgEdit', [function() {
      return {
        scope: {},
        restrict: 'E',
        templateUrl: '/src/components/category/edit/edit.html',
        replace: true,
        controller: ['$scope', function() {
          console.log('编辑分类');
        }]
      };
  }]);
