/**
 * Created by 94712 on 2017/8/30.
 */
angular.module('aside',[])
.directive('nglAside',[function(){
        return{
            scope:{},
            restrict:'E',
            templateUrl:'/src/components/common/aside/aside.html',
            replace:true,
            controller:'nglAsideCtrl'
        }
    }])
    .controller('nglAsideCtrl',['$scope','$location','default_avatar',function($scope,$location,default_avatar){
        //用户信息回显
        var userInfo=JSON.parse(localStorage.getItem('userInfo'));
        $scope.userInfo=userInfo||{tc_avatar:default_avatar};
        //根据path定位导航的焦点
        $scope.path=$location.$$path;
        //导航点击收起与隐藏
    //    提取url的第一层路径，用来控制nav的显示与隐藏
        var pathRoot=$scope.path.split('/')[1];
        $scope.navIsShow={
            category:pathRoot=='category',
            teacher:pathRoot=='teacher',
            course:pathRoot=='course'
        };
        //传入对应的key自动取反，显示隐藏互换
        $scope.changeNav=function(navName){
            $scope.navIsShow[navName]=!$scope.navIsShow[navName];
        }
    }])