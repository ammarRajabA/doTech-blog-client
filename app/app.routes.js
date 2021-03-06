angular.module('blog')
.config(['$routeProvider', function ($routeProvider) {
	$routeProvider.when('/home', {
		templateUrl: '/app/components/home/home.view.html',
		controller: 'homeController'
	})
	.when('/categories', {
		templateUrl: '/app/components/categories/categories.view.html',
		controller: 'categoriesController'
	})
	.when('/categories/:category', {
		templateUrl: '/app/components/categories/categories.category.view.html',
		controller: 'categoryController'
	})
	.when('/categories/:category/:article', {
		templateUrl: '/app/components/article/article.view.html',
		controller: 'articleController'
	})
	.when('/about', {
		templateUrl: '/app/components/about/about.view.html',
		controller: 'aboutController'
	})
	.when('/contact', {
		templateUrl: '/app/components/contact/contact.view.html',
		controller: 'contactController'
	})
	.when('/terms', {
		templateUrl: '/app/components/terms/terms.view.html',
		controller: 'termsController'
	})
	.when('/editor', {
		templateUrl: '/app/components/article/article.editor.view.html',
		controller: 'editorController'
	})
	.when('/editor/:id', {
		templateUrl: '/app/components/article/article.editor.view.html',
		controller: 'editorController'
	})
	.otherwise({ redirectTo: '/home' })
}])
