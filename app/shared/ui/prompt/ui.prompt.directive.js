angular.module('ui.prompt')
.directive('prompt', function(){
    function link(scope){
        scope.cancel = function cancelFunc(){
            scope.showPrompt = false;
            scope.cancelFunction();
        };
        
        scope.ok = function okFunc(){
            scope.showPrompt = false;
            scope.okFunction();
        };
    }
    return {
        templateUrl: '/app/shared/ui/prompt/ui.prompt.view.html',
        link:link,
        scope:{
            promptTitle: '=title',
            promptBody: '=body',
            cancelText: '=cancel',
            okText: '=ok',
            okFunction: '&',
            cancelFunction: '&',
            showPrompt: '=show',
            promptFields: '=fields',
            nextButton: '=',
            nextStep: '&'
        },
        restrict : "E"
    };
});