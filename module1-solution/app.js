(function () {
  'use strict'
  const app = angular.module('LunchCheck', [])
  app.controller('LunchCheckController', LunchCheckControllerFn)
    
  LunchCheckControllerFn.$inject = ['$scope']

  function LunchCheckControllerFn($scope){
    $scope.meals = ''
    $scope.message = ''
    
    $scope.checkMeals = function(){
      const mealsArray = $scope.meals.split(',')
      const mealsFiltered = mealsArray.filter( meal => meal)
      if(mealsFiltered.length === 0 ){
        $scope.message = 'Please enter data first ✏️'
      } 
      else if (mealsFiltered.length <= 3) {
        $scope.message = 'Enjoy 😋'
      }
      else if (mealsFiltered.length > 3) {
        $scope.message = 'Hohoho, welcome to the club 🐷'
      }
    }
  }
})()


