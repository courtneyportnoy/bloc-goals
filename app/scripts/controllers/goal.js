'use strict';

/**
 * @ngdoc function
 * @name blocGoalsAppApp.controller:GoalCtrl
 * @description
 * # GoalCtrl
 * Controller of the blocGoalsAppApp
 */
angular.module('blocGoalsAppApp').controller('GoalCtrl', function($scope, Restangular, $routeParams) {
  window.restangular = Restangular;
  window.scope = $scope;
  $scope.message = 'This is a Goal Detail View screen';

  Restangular.setBaseUrl('http://127.0.0.1:3000');
  $scope.goal_id = $routeParams.goal_id;
  
  $scope.goal = Restangular.one("goals", $scope.goal_id).get().then(function(goal){
    $scope.goal = goal;
  });
});