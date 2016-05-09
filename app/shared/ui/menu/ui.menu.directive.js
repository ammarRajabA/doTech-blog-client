angular.module('ui.menu')
.directive('menu', [function () {
	return {
		restrict: 'E',
		templateUrl: "/app/shared/ui/menu/ui.menu.view.html",
		scope:{menuItems:"=items"}
	};
}])