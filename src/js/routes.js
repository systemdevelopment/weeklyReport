(function(){
    var routes = angular.module("main.routes",["ngRoute"])
        .config(function($routeProvider, $locationProvider){

            $routeProvider.when('/login',{
                templateUrl : 'views/login.html',
                controller  : 'LoginController',
                resolve : {
                    defaults : function(){
                        return {
                            date : new Date()
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/test',{
                templateUrl : 'views/test.html',
                controller  : 'testController',
                resolve : {
                    defaults : function(){
                        return {
                            date : new Date()
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/test2',{
                templateUrl : 'views/test2.html',
                controller  : 'testController2',
                resolve : {
                    defaults : function(){
                        return {
                            date : new Date()
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/test3',{
                templateUrl : 'views/test3.html',
                controller  : 'testController3',
                resolve : {
                    defaults : function(){
                        return {
                            date : new Date()
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/list',{
                templateUrl : 'views/list.html',
                controller  : 'ListController'
            }).when('/add',{
                templateUrl : 'views/add.html',
                controller  : 'AddController',
                resolve : {
                    defaults : function(){
                        return {
                            date : new Date()
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/add/:uid',{
                templateUrl : 'views/add.html',
                controller  : 'AddController',
                resolve : {
                    defaults : function(){
                        return {
                            date : new Date()
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/item/:uid',{
                templateUrl : 'views/item.html',
                controller  : 'ItemController'
            }).otherwise({
                redirectTo: '/list'
            });
        });

    routes.directive('routeHref',['$location',function($location){
        return {
            restrict : 'A',
            scope : {
                'routeHref' : '@'
            },
            link : function($scope,$element,$attrs){
                $element.on('click',function(){
                    $scope.$apply(function(){
                        $location.path($scope.routeHref);
                    });
                });
            }
        }
    }]);

    routes.run(['$rootScope','$location',function($rootScope,$location){

        $rootScope.$on('$routeChangeStart',function(event,next,cur){
            if(!cur && $location.path().indexOf('/item') == 0){
                event.preventDefault();
                $location.path('/list');
            }
        });
    }]);
}());
