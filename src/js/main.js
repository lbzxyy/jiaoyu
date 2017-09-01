/**
 * Created by 94712 on 2017/8/30.
 */
angular.module('app', ['ngRoute', 'aside', 'header', 'index', 'login','http','web_api','api','profile','repass'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                template:'<ngl-aside></ngl-aside><ngl-index></ngl-index>'
            })
            .when('/index',{
                redirectTo:'/'
            })
            .when('/profile',{
                template:'<ngl-aside></ngl-aside><ngl-profile></ngl-profile>'
            })
            .when('/repass',{
                template:'<ngl-aside></ngl-aside><ngl-repass></ngl-repass>'
            })
            .when('/login',{
                template:'<ngl-login></ngl-login>'
            })
            .otherwise({
                templateUrl:'/src/html/404.html'
            })
    }])