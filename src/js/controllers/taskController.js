(function(module){
    module.controller('TaskController',['$scope','$routeParams','$location','Items','defaults',
        function($scope,$routeParams,$location,Items,defaults){
            $scope.task = angular.merge(defaults,{});

            $scope.addItem = function(){
            	if($scope.addItemForm.$valid) {
                    Items.addItem("task",$scope.task);
                    $location.path("/list");
                }
            };
            
            var Item = Items.getItemName("task");
            if (Item) {
            	$scope.task = Item;
			}

    }]);
}(app.module));