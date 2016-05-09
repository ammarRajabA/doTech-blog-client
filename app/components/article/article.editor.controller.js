angular.module('article')
.controller('editorController',['$routeParams','toaster','$scope','REST2',function ($routeParams,toaster,$scope,REST2){
	$scope.tinymceOptions={
		plugins:[
			'advlist autolink lists link image charmap print preview anchor',
    		'searchreplace visualblocks code fullscreen',
    		'insertdatetime media table contextmenu paste code codesample'
		],
		toolbar:'insertfile undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image | codesample'
	}
	REST2.forceSSL();
	$scope.login=false;
	$scope.details=false;
	$scope.nextButton="Next";
	edit=false;
	id=undefined;
	if (angular.isUndefined($routeParams.id)){
		$scope.newArticle={}
	}
	else{
		id=$routeParams.id
		edit=true;
		REST2.article($routeParams.id,function (article) {
			$scope.newArticle={content:article.content,
							title:article.title,
							cover:article.cover,
							category:article.category};
		})
	}
	toaster.pop('info','New user ?','Please send your full name to doTechContact@gmail.com with subject: doTech to get login info.',20000)
	$scope.nextStep=function () {
		if ($scope.login && $scope.details && (angular.isUndefined($scope.newArticle.title) || angular.isUndefined($scope.newArticle.content) || angular.isUndefined($scope.newArticle.category) || angular.isUndefined($scope.newArticle.cover))){
			toaster.pop('warning',"Article info","You have to fill the article info fields")
		}
		else if ($scope.login && $scope.details && (!angular.isUndefined($scope.newArticle.title) && !angular.isUndefined($scope.newArticle.content) && !angular.isUndefined($scope.newArticle.category) && !angular.isUndefined($scope.newArticle.cover))){
			REST2.publish($scope.newArticle,{userName:$scope.userName,password:$scope.password},edit,id,function (result) {
				toaster.pop({
					type:(result.success)?'success':'error',
					title:(result.success)?'Great..':'Something error',
					body:(result.success)?"Article is on the server now":"Because of "+result.state
				})
			})
		}
		if ($scope.login==true && (angular.isUndefined($scope.userName) || angular.isUndefined($scope.password))){
			toaster.pop('warning',"Login info","You have to fill your name and password")
		}
		else if ($scope.login==true && !angular.isUndefined($scope.userName) && !angular.isUndefined($scope.password)){
			$scope.details=true;
			$scope.nextButton="Publish"
		}
		$scope.login=true;
	}
}])
