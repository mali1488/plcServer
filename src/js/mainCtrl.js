angular.module('plcServer')

.controller('mainCtrl',['$cookies','$cookieStore','$scope','$rootScope','$http','$location' , function($cookies,$cookieStore,AjaxReq,$scope, $rootScope,$http,$location) {
	$scope.message = "hello world and all";
	$scope.changeButton = true;
	$scope.inputText = "";
	$scope.dataFromServer = "";

	$scope.checkModel = {
	    read: false,
    	write: true
 	};



	$scope.sendRequest = function(inputText,dataStart,dataLength) {
		var functionCode;
		if ($scope.checkModel.read) {
			functionCode = 4;
		} else if ($scope.checkModel.write) {
			// Write multiple registers
			functionCode = 23;
		}
		$.ajax({
				url : inputText,
                //url : 'https://localhost/server/appServer/index.php&data=666',
                data : { 
                		functionCode : functionCode/*,
                		dataStart : dataStart,
                		dataLength : dataLength*/
                		},
                type : 'GET',
                crossDomain : true,
                error : function(jqXHR, textStatus, errorThrown) {
                		printError(jqXHR, textStatus, errorThrown);
                	}
                })
				.success( function(data) {
                	console.log(data);
                	//var parsedData = jQuery.parseJSON(data)
                	console.log(data.response);
                	$scope.$apply(function() {
						$scope.dataFromServer = data;
                	});
                });
		
	};
	function printError(jqXHR, textStatus, errorThrown) {
		console.log(errorThrown);
		console.log(textStatus);
		console.log(jqXHR);
	}
}]);
