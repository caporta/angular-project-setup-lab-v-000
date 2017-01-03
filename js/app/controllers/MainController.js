const MainController = $scope => $scope.name = 'Chris'

angular
  // getter
  .module('app')
  .controller('MainController', MainController)
