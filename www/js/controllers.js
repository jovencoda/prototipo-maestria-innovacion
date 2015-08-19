myApp.controller('AppCtrl', function($scope) {
	
})


.controller('loginCtrl', function($scope, $stateParams) {
	$scope.verificarUsuario = function(){
		location.href="#/app/inicio"
	}
});
