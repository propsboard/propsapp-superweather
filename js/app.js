var app = {
    AppLoad: function(data, app){
      $('body').css('backgroundImage','url(img/bgs/'+ app.configValues.background +'.jpg)');
    }
  };

angular.module('myApp', [])
  .controller('MainCtrl',
    function($scope, $timeout) {
      $scope.date = {};

      var updateTime = function() {
        $scope.date.tz =
          moment().format('LT');
        $scope.date.day =
          moment().format('dddd, MMM Do');
        $timeout(updateTime, 1000);
      }

      $scope.appConfigValues = window.propsApp.app.configValues;
      $scope.weather = JSON.parse(window.propsApp.data.weatherData);

      updateTime();
    });