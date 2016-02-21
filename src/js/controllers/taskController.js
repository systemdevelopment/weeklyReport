(function(module){
    module.controller('TaskController',['$scope','$routeParams','$location','Items','defaults',
        function($scope,$routeParams,$location,Items,defaults){
            $scope.item = angular.merge(defaults,{});

            $scope.$emit('title','問題点・課題');

            $scope.addItem = function(){
            	/*if (uid) {
            		Items.overwrite(uid,$scope.item);
                    $location.path("/list");
            	} else*/
            	if($scope.addItemForm.$valid) {
                    Items.addItem("testItem",$scope.item);
                    $location.path("/list");
                }
            };
            
            var edit = $routeParams['edit'];
            if (edit) {
            	$scope.item = Items.getTestItem("testItem");
			}
			

    }]);
}(app.module));