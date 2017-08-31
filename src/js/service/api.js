
//这个服务结合了wab_api和service为一体
angular.module('api',[])
.factory('api',['WEB_API','http',function(WEB_API,http){
        var api={};
        angular.forEach(WEB_API,function(config,key){
            api[key]=function(fn,data){
                http[config.method](config.url,fn,data)
            }

        })
        return api;
    }])