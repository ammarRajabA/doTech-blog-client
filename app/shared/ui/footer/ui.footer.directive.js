angular.module('ui.footer')
.directive('footer', [function () {
	return {
		restrict: 'E',
		templateUrl:'/app/shared/ui/footer/ui.footer.view.html',
		scope:{
			footerTitle:'@title',
			footerLinks:'=links'
		}
	};
}])