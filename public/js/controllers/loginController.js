app.controller('LoginCtrl', ['$scope','auth','$state', function($scope, auth, $state){
  $scope.logIn = function(){
    auth.logIn($scope.user).then(function (){
      $state.go('home');
    },
    function(error){
      $scope.error = error.data;
    });
  };
}]);
