angular.module('contact')
.controller('contactController',['$scope',function ($scope) {
	$scope.title="Contact us"
	$scope.content=["<pre>This blog ( doTech ) is designed and programmed by<b> \" Ammar Rajab \" </b>both server and client side.<br>",
					"Designed with the help of material-design-lite css framework.",
					"To <b>advertise</b> in this blog please contact us.<br>",
					"Contact details:<br>",
					"	<b>mobile</b>: +963945278829<br>",
					"	<b>email</b>: doTechContact@gmail.com</pre>"].join('')
}])