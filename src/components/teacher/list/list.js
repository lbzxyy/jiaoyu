angular.module('teacher')
  .directive('nglTcList', [
    function() {
        return {
          scope: {},
          restrict: 'E',
          templateUrl: '/src/components/teacher/list/list.html',
          replace: true,
          controller: 'nglTcListCtrl'
        };
    }
  ])
  .controller('nglTcListCtrl', [
    '$scope',
    'api',
    function($scope, api) {
      // 讲师列表功能：1、列表渲染 2、搜索 3、修改讲师注销启用状态 4、查看讲师

      // 1、列表渲染，页面一进来就请求接口
      api.teacherList(function(data) {
        $scope.list = data.result;
      });

      // 2、搜索
      $scope.searchKey = '';

      // 3、讲师注销启用状态修改，从模版中传入要修改的讲师对象
      $scope.changeStatus = function(teacher) {

        // 发送请求，成功后，修改讲师对象的tc_status状态
        api.teacherHandle(function(data) {
          teacher.tc_status = data.result.tc_status;
        }, { tc_id:teacher.tc_id, tc_status: teacher.tc_status });

      }
    }
  ]);
