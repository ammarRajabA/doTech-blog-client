angular.module('categories')
.controller('categoriesController',['$scope','REST1', function ($scope,REST1) {
    $scope.categories=REST1.categories()
}])

