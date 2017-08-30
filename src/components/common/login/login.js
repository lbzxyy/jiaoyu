/**
 * Created by 94712 on 2017/8/30.
 */
angular.module('login',[])
.directive('nglLogin',[function(){
        return{
            scope:{},
            restrict:'E',
            templateUrl:'/src/components/common/login/login.html',
            replace:true,
            controller:['$scope',function($scope){
                console.log('登录');
            }]
        }
    }])