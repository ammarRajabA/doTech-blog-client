angular.module('blog',[
	'ngRoute',
	'ngResource',
	'ui',
	'home',
	'categories',
	'article',
	'about',
	'contact',
	'terms',
	'toaster',
	'ngAnimate'
])

///used to upgrade DOM when elements change to achieve ripple-effect of mdl

angular.module('blog')
.run([function () {
	var mdlUpgradeDom=false
	setInterval(function () {
		if(mdlUpgradeDom){
			componentHandler.upgradeDom()
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
