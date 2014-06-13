'use strict';

angular.module('velibAndFurious')
    .controller('stationCtrl', ['$scope', '$http', function ($scope, $http) {

            /*Retrieve stations list*/
            $scope.stationList = function () {

                var apiKey = 'e5bc60b81a3a39b0d932e3d7a09cf07184ba8d29';
                https://api.jcdecaux.com/vls/v1/stations?apiKey=e5bc60b81a3a39b0d932e3d7a09cf07184ba8d29
                $http.jsonp('https://api.jcdecaux.com/vls/v1/stations?apiKey='+apiKey+'&callback=JSON_CALLBACK').
                    success(function (data) {
                        $scope.stations = data;
                        console.log(data);
                    }).
                    error(function (data) {
                        console.log(data);
                    });

            };
        
            $scope.stationList();
    }]);


