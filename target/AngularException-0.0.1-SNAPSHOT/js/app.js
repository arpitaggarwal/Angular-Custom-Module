var myApp = angular.module('enterprise', [ 'exceptionModule' ]);

myApp.directive('hello', function() {
	return {
		template : '<div>Hello!</div>',
		restrict : 'AEC',
		transclude : true,
		controller : function($scope, $element) {
		},
		compile : function() {
			console.log('Compile()');
			return {
				pre : function(scope, element, attrs) {
					console.log('PreLink() // Precompile');
				},
				post : function() {
					console.log('PostLink() // Postcompile');
				}
			};
		},
		link : function(scope, element, attrs) {
			console.log('Link()');
		}
	};
});

myApp.controller('ErrorController', [ '$scope', function($scope) {
//	$scope.names = [ "Test", "Test1" ];

	$scope.add = function() {
		$scope.names.push($scope.newName);
		$scope.newName = "";
	};
} ]);