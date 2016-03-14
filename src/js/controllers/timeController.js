(function(module){
    module.controller('TimeController',['$scope','$routeParams','$location','Items','defaults',
        function($scope,$routeParams,$location,Items,defaults){
           $scope.item = angular.merge(defaults,{});

           $scope.addItem = function(){
            	if (uid) {
            		Items.overwrite(uid,$scope.item);
                    $location.path("/list");
            	} else if($scope.addItemForm.$valid) {
                    Items.add($scope.item);
                    $location.path("/list");
                }
            };
            
            var uid = $routeParams['uid'];
            if (uid) {
            	$scope.item = Items.get(uid);
			}
    }]);
    
    module.directive("timeModel", function(dateFilter){
	    return {
	        require: 'ngModel',
	        link: function(scope, element, attrs, ngModel){
	            ngModel.$parsers.push(function(value){
	                return dateFilter(value, 'HH:mm');
	            })
	        }
	    }
	})
}(app.module));
