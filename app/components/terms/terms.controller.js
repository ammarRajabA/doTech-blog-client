angular.module('terms')
.controller('termsController',['$scope',function ($scope) {
	$scope.title="Terms"
	$scope.content=["<pre>-Every article has an author and his name is displayed at the end of the article ,",
					"and the author is the only responsible of the content of the article.<br><br>",
					"-The article contents <b>must</b> be written in English or Arabic only , must include figures and images and must be <b>original</b>.</pre>"].join('')
}])