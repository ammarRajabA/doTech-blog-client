angular.module('article')
.service('REST2',['$window','$location','$http','$resource','$base64','toaster', function ($window,$location,$http,$resource,$base64,toaster) {
	var blog={
		read:$resource('/api/articles/id/:id', {}, {
			article:{method:'GET',isArray:false}
		}),
		write:$resource('api/publish',{},{
			article:{method:'POST'}
		}),
		edit:$resource('api/edit/:id',{},{
			article:{method:'POST'}
		}),
		delete:$resource('api/articles/:id',{},{
			article:{method:'DELETE'}
		})
	}
	this.forceSSL = function () {
    	if ($location.protocol() !== 'https') {
        	$window.location.href = $location.absUrl().replace('http', 'https');
    	}
	};
	this.article=function (articleId,callback) {
		article=blog.read.article({id:articleId},function (result) {if (angular.isFunction(callback)) callback(result)})
		return article
	}
	this.publish=function (newArticle,userLogin,edit,articleId,callback) {
		$http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode(userLogin.userName + ':' + userLogin.password);
		if (edit){
			blog.edit.article({id:articleId},newArticle,function (result) {callback(result)})
		}
		else{
			blog.write.article({},newArticle,function (result) {callback(result)})
		}
	}
	this.delete=function (userLogin,articleId,callback){
		this.forceSSL();
		$http.defaults.headers.common.Authorization = 'Basic ' + $base64.encode(userLogin.userName + ':' + userLogin.password);
		blog.delete.article({id:articleId},{},function (result) {callback(result)})
	}
}])