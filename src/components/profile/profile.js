/**
 * Created by 94712 on 2017/8/31.
 */
angular.module('profile',[])
.directive('nglProfile',[function(){
    return{
        scope:{},
        restrict:'E',
        templateUrl:'/src/components/profile/profile.html',
        replace:true,
        controller:['$scope',function($scope){
            console.log('个人中心');
        }]
    }
    }])