angular.module('quoteBook').controller('mainController', function ($scope, mainService) {
  $scope.searchTerm = '';
  $scope.newQuote = '';
  $scope.newAuthor = '';
  $scope.deleteMe = '';
  $scope.data = mainService.data;

  $scope.addQuote = function () {
    var newObj = {
      author: $scope.newAuthor,
      text: $scope.newQuote
    };

    mainService.addData(newObj);
    $scope.newQuote = '';
    $scope.newAuthor = '';
  }

  $scope.deleteQuote = function () {
    mainService.removeData($scope.deleteMe);
  }

});