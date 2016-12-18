app.factory('auth', ['$http', '$q', function($http, $q){
  var auth = {};

  auth.register = function(user){
    return $http.post('/register', user);
  };

  auth.logIn = function(user){
    return $http.post('/login', user).then(function (response) {
      auth.setCurrentUser(response.data.username);
    }, function (error) {
      return $q.reject(error)
    });
  };

  auth.logout = function(){
    return $http.get('/logout')
  }

  auth.getCurrentUser = function(){
    auth.currentUser = null;
    return $http.get('/currentUser').then(function(response){
    auth.setCurrentUser(response.data.username);
    });
  };

  auth.setCurrentUser = function (user) {
    auth.currentUser = user;
    $rootScope.$broadcast("currentUserChange", user);
  };


  return auth;
}]);
