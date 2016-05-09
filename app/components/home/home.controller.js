angular.module('home')
.controller('homeController',['$scope',function ($scope) {
	$scope.brand="doTech"
	$scope.title="welcome to doTech"
	$scope.intro=["This is a blog that cares about technology and gives you the chance to be updated.<br>",
					"doTech publish original articles about web development , web design , game development , game design , desktop programs , smartphones apps and a lot more.<br>",
					"With doTech you can stay up-to-date on all programming techs."].join('')
	$scope.img={"src":"/assets/img/cover.jpg","alt":"blog cover","style":"width:100%"}
	$scope.nav={url:"#categories",link:"Categories"}
}])