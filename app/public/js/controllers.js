  app.controller('Toolbar', ['$scope', 'Window',
    function($scope, Window) {

      $scope.minimize = function() {
        Window.minimize();
      };

      $scope.toggleFullscreen = function() {
        Window.toggleKioskMode();
      };

      $scope.close = function() {
        Window.close();
      };
    }
  ])