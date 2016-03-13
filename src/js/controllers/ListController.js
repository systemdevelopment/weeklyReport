(function(module){
    module.controller('ListController',['$scope','Items',function($scope,Items){

        $scope.items = Items.list();
        $scope.overView = Items.getItemName("overView");
        $scope.items2 = Items.list2();
        $scope.task = Items.getItemName("task");
    }]);
}(app.module));

