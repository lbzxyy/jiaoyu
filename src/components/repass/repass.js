/**
 * Created by 94712 on 2017/8/31.
 */
angular.module('repass', [])
    .directive('nglRepass', [function () {
        return {
            scope: {},
            restrict: 'E',
            templateUrl: '/src/components/repass/repass.html',
            replace: true,
            controller: 'nglRepassCtrl'
        }
    }])
    .controller('nglRepassCtrl', ['$rootScope','$scope','api', function ($rootScope,$scope,api) {
        $scope.user={
            tc_pass:'',
            tc_new_pass:'',
            tc_new_pass_repeat:''
        };
        $scope.repass=function(){
            if( $scope.user.tc_new_pass!=$scope.user.tc_new_pass_repeat){
                alert('两次密码不一样');
                return;
            }
            api.repass(function(){
            $rootScope.$broadcast('logout')
            },$scope.user)
        }

    }])