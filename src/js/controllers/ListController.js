(function(module){
    module.controller('ListController',['$scope','Items',function($scope,Items){
        $scope.$emit('title','一覧');

        $scope.items = Items.list();
        $scope.testitems = Items.getTestItem("testItem");
        $scope.testitems2 = Items.getTestItem("testItem2");
        $scope.testitems3 = Items.getTestItem("testItem3");
    }]);
}(app.module));