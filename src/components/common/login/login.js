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
            controller:'nglLoginCtrl'
        }
    }])
    .controller('nglLoginCtrl',['$scope','$location','http','api',function($scope,$location,http,api){
            $scope.user={
                tc_name:'',
                tc_pass:''
            };
        $scope.login=function(){
            api.login(function(data){
                localStorage.setItem('userInfo',JSON.stringify(data.result));
                $location.path('/');
            },$scope.user)
        }
        //登录回显用户头像
       var userInfo=JSON.parse(localStorage.getItem('userInfo'));
        //console.log(userInfo);
        $scope.userInfo=userInfo||{tc_avatar:'/public/img/default.png'}

    }])