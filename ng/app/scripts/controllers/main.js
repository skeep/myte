angular.module('ngApp').controller('MainCtrl', function ($scope) {

  'use strict';

  var Expenses = Parse.Object.extend("expenses");
  var expense = new Expenses();
  var query = new Parse.Query(Expenses);

  $scope.expenseList = [];
  query.find({
    success : function(results){
      console.log(results);
      $scope.expenseList = results;
      $scope.$apply();
    },
    error : function(error){
      console.log(error);
    }
  });

  $scope.save = function () {
    expense.save({
      location: 'Bangalore',
      type: 'Travel',
      amount: 500,
      currency: 'INR'
    }, {
      success: function (expense) {
        // The object was saved successfully.
        console.log(expense);
      },
      error: function (expense, error) {
        console.log(error);
        // The save failed.
        // error is a Parse.Error with an error code and description.
      }
    });
  };




});
