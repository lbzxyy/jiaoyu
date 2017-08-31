/**
 * Created by 94712 on 2017/8/30.
 */
angular.module('app', ['ngRoute', 'aside', 'header', 'index', 'login','http','web_api','api'])
    .config(['$routeProvider', function ($routeProvider) {
        $routeProvider
            .when('/', {
                template:'<ngl-aside></ngl-aside><ngl-index></ngl-index>'
            })
            .when('/index',{
                redirectTo:'/'
            })
            .when('/login',{
                template:'<ngl-login></ngl-login>'


























            })
            .otherwise({
                templateUrl:'/src/html/404.html'
            })
    }])