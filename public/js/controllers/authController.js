app.controller('AuthCtrl', ['$scope','auth','$state', function($scope, auth, $state){
  $scope.register = function (){
    auth.register($scope.user).then(function(){
      $state.go('home');
    });
  };
}]);
