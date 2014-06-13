'use strict';

angular.module('velibAndFurious')
    .controller('stationCtrl', ['$scope', '$http', function ($scope, $http)
    {

    	/*Retrieve stations list*/
    	$scope.stationList = function ()
    	{
    		$http.get('/api/stations').
				success(function (data)
				{
					$scope.stations = data;
					console.log(data);
				}).
				error(function (data)
				{
					console.log(data);
				});

    	};

    	$scope.stationList();
    }]);