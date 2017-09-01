/**
 * Created by 94712 on 2017/8/30.
 */
angular.module('header',[])
.directive('nglHeader',[function(){
        return{
            scope:{},
            restrict:'E',
            templateUrl:'/src/components/common/header/header.html',
            replace:true,
            controller:'nglHeaderCtrl'
        }
    }])
    .controller('nglHeaderCtrl',['$scope','$location','api',function($scope,$location,api){
        $scope.logout=function(){
            api.logout(function(){
                $location.path('/login')
            })
        };
        $scope.$on('logout',function(){
            $scope.logout()
        });
    }])