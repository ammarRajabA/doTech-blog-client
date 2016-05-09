angular.module('ui.drawer')
.directive('drawer', [function () {
	return {
		restrict: 'E',
		templateUrl:"/app/shared/ui/drawer/ui.drawer.view.html",
		scope:{drawerTitle:'@title',drawerLinks:'=links'}
	}
}])