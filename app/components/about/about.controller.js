angular.module('about')
.controller('aboutController',['$scope', function ($scope) {
	$scope.title="About"
	$scope.content=["<pre><b>doTech</b> is a blog made to publish new technology news including ",
					"mobiles hardware/software news , programming languages snippests,tutorials and ",
					"tricks , web development new techniques both server and client sides.<br><br>",
					"Users can participate with writing and even get paid.<br><br>",
					"New features on the blog will be displayed on the main page , but now we're still in <b>beta version</b>.</pre>"].join('')
}])