angular.module('article')
.controller('articleController',['$sce','$timeout','$compile','$scope','$window','toaster','$routeParams','REST2', function ($sce,$timeout,$compile,$scope,$window,toaster,$routeParams,REST2) {
	$scope.article=REST2.article($routeParams.article,function(res){
		res.content=$sce.trustAsHtml(res.content);
	})
	$scope.deletePrompt={}
	var editArticle=function () {$window.location.href = '/#/editor/'+$routeParams.article}
	var deleteArticle=function () {
		$scope.deletePrompt.title="Are you sure you want to delete this article ?"
		$scope.deletePrompt.body='This action can not be undone and you must authenticate first :<br>'
		$scope.deletePrompt.fields=['Username','Password']
		$scope.deletePrompt.okFunction=function (){
			authLogin={userName:document.getElementById('Username').value,password:document.getElementById('Password').value}
			REST2.delete(authLogin,$routeParams.article,function (result) {
				toaster.pop({
					type:(result.success)?'success':'error',
					title:(result.success)?'Well..congrats..!!':'Something error',
					body:(result.success)?"Article is deleted now":"Because of "+result.state
				})})
		}
		$scope.deletePrompt.okText="Delete"
		$scope.deletePrompt.showPrompt=true;
	}
	$scope.options={Edit:editArticle,Delete:deleteArticle}
}])
angular.module('article')
.run([function () {
	var mdlUpgradeDom=false
	setInterval(function () {
		if(mdlUpgradeDom){
			componentHandler.upgradeDom()
			Prism.highlightAll();
			mdlUpgradeDom=false
		}
	},200)
	var observer=new MutationObserver(function () {
		mdlUpgradeDom=true
	})
	observer.observe(document.body,{childList:true,subtree:true})
	angular.element(document).bind('DOMNodeInserted',function (e) {
		mdlUpgradeDom=true
	})
}])