angular.module('categories')
.service('REST1', ['$resource',function ($resource) {
	var blog=$resource('/api/categories/:category', {}, {
		categories:{method:'GET',isArray:true},
		titles:{method:'GET',isArray:true}
	})
	this.categories=function () {
		var result={}
		var obj=blog.categories({},function () {
			angular.forEach(obj, function (category,index) {
				result[category.category]={src:category.cover,width:'100%',height:'250px'}
			})
		})
		return result
	}
	this.titles=function (category) {
		var result={}
		var obj=blog.titles({category:category},function () {
			angular.forEach(obj, function (title,index) {
				result[title.title]={src:title.cover,width:'100%',height:'250px',id:title._id}
			})
		})
		return result
	}

}])