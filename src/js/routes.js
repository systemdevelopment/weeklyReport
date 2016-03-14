(function(){
    var routes = angular.module("main.routes",["ngRoute"])
        .config(function($routeProvider, $locationProvider){

            $routeProvider.when('/task',{
                templateUrl : 'views/task.html',
                controller  : 'TaskController',
                resolve : {
                    defaults : function(){
                        return {
                            //date : new Date()
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/task/edit',{
                templateUrl : 'views/task.html',
                controller  : 'TaskController',
                resolve : {
                    defaults : function(){
                        return {
                            //date : new Date()
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/overView',{
                templateUrl : 'views/overView.html',
                controller  : 'overViewController',
                resolve : {
                    defaults : function(){
                        return {
                            
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/overView/edit',{
                templateUrl : 'views/overView.html',
                controller  : 'overViewController',
                resolve : {
                    defaults : function(){
                        return {
                            
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/time',{
                templateUrl : 'views/time.html',
                controller  : 'TimeController',
                resolve : {
                    defaults : function(){
                        return {
                           
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/time/:uid',{
                templateUrl : 'views/time.html',
                controller  : 'TimeController',
                resolve : {
                    defaults : function(){
                        return {
                           
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/list',{
                templateUrl : 'views/list.html',
                controller  : 'ListController'
            }).when('/report',{
                templateUrl : 'views/report.html',
                controller  : 'ReportController',
                resolve : {
                    defaults : function(){
                        return {
                           
                        }
                    }
                },
                reloadOnSearch: false
            }).when('/report/:uid',{
                templateUrl : 'views/report.html',
                controller  : 'ReportController',
                resolve : {
                    defaults : function(){
                        return {
                            
                        }
                    }
                },
                reloadOnSearch: false
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
