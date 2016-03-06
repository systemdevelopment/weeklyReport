(function(module){
    module.controller('ListController',['$scope','Items',function($scope,Items){
        $scope.$emit('title','一覧');

        $scope.items = Items.list();
        $scope.testitems = Items.getTestItem("testItem");
        $scope.items2 = Items.list2();
        $scope.testitems3 = Items.getTestItem("testItem3");
    }]);
}(app.module));

