var app = angular.module('DoerApp', []);

app.controller('TodosController', ['$scope', '$http', function($scope, $http){

  $http.get('/api/todos').then(function(response){
    var data = response.data;
    $scope.todos = data.todos;
  });

  $scope.newTodo = {};

  $scope.createTodo = function(){
    $http.post('/api/todos', {todo: $scope.newTodo}).then(function( response ){
      var data = response.data;
      $scope.todos.push( data );
      $scope.newTodo = {};
    });
  };

  $scope.deleteTodo = function( id ){
    $http.delete('/api/todos/' + id).then(function( response ){
      var data = response.data;
      $scope.todos = data.todos;
    });
  }

  $scope.updateTodo = function( id ){
    $http.post('/api/todos/:' + id).then(function( response ){
      var data = response.data;
      $scope.todos = data.todos;
    })
  }

}]);
