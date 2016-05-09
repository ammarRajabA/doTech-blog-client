angular.module('ui.navbar')
.directive('navbar', [function () {
	return {
		restrict: 'E',
		templateUrl:"/app/shared/ui/navbar/ui.navbar.view.html",
		scope:{
			navTitle:'@title',
			navLinks:'=links'
		}
	};
}])