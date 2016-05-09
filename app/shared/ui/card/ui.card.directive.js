angular.module('ui.card')
.directive('card', [function () {
	return {
		restrict: 'E',
		templateUrl:'/app/shared/ui/card/ui.card.view.html',
		scope:{
			cardTitle:'@title',
			cardText:'@text',
			cardImage:'=img',
			cardUrl:'@url',
			cardLink:'@link',
			shadow:'@',
			cardFunc:'&func'
		},
		link:function (scope,element,attrs) {
			if(attrs.hasOwnProperty('wide')){
				scope.wide=true
			}
			else{
				scope.wide=false
			}
		}
	};
}])