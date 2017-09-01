/**
 * Created by 94712 on 2017/8/30.
 */
angular.module('app', ['ngRoute','course','teacher','category','aside', 'header', 'index', 'login','http','web_api','api','profile','repass','avatar'])
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
            .when('/teacher/add', {
                template: '<ngl-aside/><ngl-tc-add/>'
            })
            .when('/teacher/edit', {
                template: '<ngl-aside/><ngl-tc-edit/>'
            })
            .when('/teacher/list', {
                template: '<ngl-aside/><ngl-tc-list/>'
            })
            .when('/category/add', {
                template: '<ngl-aside/><ngl-cg-add/>'
            })
            .when('/category/edit', {
                template: '<ngl-aside/><ngl-cg-edit/>'
            })
            .when('/category/list', {
                template: '<ngl-aside/><ngl-cg-list/>'
            })
            .when('/course/add', {
                template: '<ngl-aside/><ngl-cs-add/>'
            })
            .when('/course/edit1', {
                template: '<ngl-aside/><ngl-cs-edit1/>'
            })
            .when('/course/edit2', {
                template: '<ngl-aside/><ngl-cs-edit2/>'
            })
            .when('/course/edit3', {
                template: '<ngl-aside/><ngl-cs-edit3/>'
            })
            .when('/course/list', {
                template: '<ngl-aside/><ngl-cs-list/>'
            })
            .otherwise({
                templateUrl:'/src/html/404.html'
            })
    }])