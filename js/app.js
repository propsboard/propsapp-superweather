var app = {
    AppLoad: function(data, app){
      var weatherInfo = JSON.parse(data.weatherData);
    }
  };

angular.module('myApp', [])
  .controller('MainCtrl',
    function($scope, $timeout) {
      $scope.date = {};

      var updateTime = function() {
        $scope.date.tz =
          moment().format('LTS');
        $timeout(updateTime, 1000);
      }

      $scope.weather = JSON.parse(window.propsApp.data.weatherData);
      console.log('weather', $scope.weather);
      //Weather.getWeatherForecast($scope.user.location)
      //  .then(function(data) {
      //    $scope.weather.forecast = data;
      //  });
      updateTime();
    });