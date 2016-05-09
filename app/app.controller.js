angular.module('blog')
.controller('appController', function ($scope) {
	$scope.navLinks={'Home':'#home','Categories':'#categories','New article':'#editor','About':'#about','Contact us':'#contact'}
	$scope.title="doTech"
	$scope.footerLinks={'Privacy&Terms':'#terms','About':'#about'}
})