(function(module){
    module.controller('ListController',['$scope','Items',function($scope,Items){
        $scope.$emit('title','一覧');

        $scope.items = Items.list();
        $scope.testitems2 = Items.getTestItem("testItem2");
        $scope.items2 = Items.list2();
        $scope.testitems = Items.getTestItem("testItem");
    }]);
}(app.module));

