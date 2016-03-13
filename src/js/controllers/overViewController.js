(function(module){
    module.controller('overViewController',['$scope','$routeParams','$location','Items','defaults',
        function($scope,$routeParams,$location,Items,defaults){
            $scope.overView = angular.merge(defaults,{});

            $scope.addItem = function(){

                if($scope.addItemForm.$valid) {
                    Items.addItem("overView",$scope.overView);
                    $location.path("/list");
                }
            };
            var Item = Items.getItemName("overView");
            if (Item) {
            	$scope.overView = Item;
			}

    }]);
}(app.module));