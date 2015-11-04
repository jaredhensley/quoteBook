angular.module('quoteBook').controller('mainController', function ($scope, mainService) {
  $scope.searchTerm = '';
  $scope.newQuote = '';
  $scope.newAuthor = '';
  $scope.deleteMe = '';
  $scope.test = true;
  $scope.data = mainService.data;

  $scope.addQuote = function () {

    var newObj = {
      author: $scope.newAuthor,
      text: $scope.newQuote
    };

    mainService.addData(newObj);
    mainService.setStorage('quotes');
    $scope.newQuote = '';
    $scope.newAuthor = '';

  }

  $scope.deleteQuote = function () {
    mainService.removeData($scope.deleteMe);
    $scope.deleteMe = '';
    mainService.setStorage('quotes');
  }

  $scope.filterNow = function () {
    $scope.searchTerm = $scope.search;
  }

  $scope.getQuotes = function (name) {
    mainService.getStorage(name);
  }

});