angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {})

.controller('ChatsCtrl', function($scope, Chats) {
  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  $scope.chats = Chats.all();
  $scope.remove = function(chat) {
    Chats.remove(chat);
  };
})

.controller('TasksCtrl', function($scope, Tasks) {
  
  $scope.tasks = Tasks.all();
  
  $scope.startTask = function(id) {
    Tasks.startTask(id);
  }
  // $scope.remove = function(chat) {
  //   Chats.remove(chat);
  // };
})

.controller('ChatDetailCtrl', function($scope, $stateParams, Chats) {
  $scope.chat = Chats.get($stateParams.chatId);
})

.controller('AccountCtrl', function($scope) {
  $scope.settings = {
    enableFriends: true
  };
})

.controller('LoginCtrl', function($scope, $state, AuthService) {
 
  $scope.data = {};
 
  $scope.login = function() {
    if(AuthService.isAuthenticated() === false){
      console.log("User is not logged in");
    }
   console.log("User = " + $scope.data.username + "- password = " + $scope.data.password);
    //we'll call a service here to validate the user, but for now just redirect
    AuthService.authenticateUser($scope.data.username, $scope.data.password);
    $state.go('tab.tasks');
  }
  
  
});
