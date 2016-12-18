app.controller('BeersCtrl', ['$scope', 'beers', '$stateParams', function($scope, beers, $stateParams) {
  $scope.beer = beers.findById($stateParams.id);

  $scope.addReview = function(){
    if($scope.body === '') { return; }

    beers.addReview($scope.beer._id, {
      text: $scope.body,
      name: 'user',
    }).then(function(review) {
      $scope.beer.reviews.push(review);
    });

    $scope.body = '';
  };

  $scope.removeReview = function (review) {
    beers.deleteReview(review._id, $scope.beer._id);
  };
}]);
