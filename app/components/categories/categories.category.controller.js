angular.module('categories')
.controller('categoryController',['$scope','$routeParams','REST1',function ($scope,$routeParams,REST1) {
	$scope.currentCategory=$routeParams.category
    $scope.titles=REST1.titles($scope.currentCategory)
}])