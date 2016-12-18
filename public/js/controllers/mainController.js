app.controller('MainCtrl', ['$scope','beers', 'auth', function($scope, beers, auth){


  $scope.$on('currentUserChange', function() {
  $scope.currentUser = auth.currentUser;
  });

  //finds the status of the user: logged, registering, log out
    auth.getCurrentUser().then(function (data) {
    $scope.currentUser = data.user
  });

  beers.getAll().then(function () {
    $scope.beers = beers.beers;
  });

  $scope.addBeer = function() {
    if ($scope.name === '') { return; }

    beers.create({
      name: $scope.name,
      style: $scope.style,
      image_url: $scope.image_url,
      abv: $scope.abv
    });

    $scope.name = '';
    $scope.style = '';
    $scope.abv = '';
    $scope.image_url = '';
  };

  $scope.removeBeer = function (beer) {
    beers.delete(beer);
  };



}]);
