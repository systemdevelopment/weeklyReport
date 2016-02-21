(function(module){
    module.controller('ReportController',['$scope','$routeParams','$location','Items','defaults',
        function($scope,$routeParams,$location,Items,defaults){
            $scope.item = angular.merge(defaults,{});

            $scope.$emit('title','追加');

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
            	$scope.$emit('title','編集');
			}
			

    }]);
}(app.module));