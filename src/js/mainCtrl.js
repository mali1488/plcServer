angular.module('plcServer')

.controller('mainCtrl',['$cookies','$cookieStore','$scope','$rootScope','$http','$location' , function($cookies,$cookieStore,AjaxReq,$scope, $rootScope,$http,$location) {
	$scope.message = "hello world and all";
	$scope.changeButton = true;
	$scope.url = "";
	$scope.dataFromServer = "";
	$scope.data1 = "";
	$scope.data2 = "";

	$scope.checkModel = {
		readCoil : true,
	    readRegister: false,
    	writeCoil: false,
    	writeRegister : false
 	};

 	$scope.segment = function(press) {
 		switch(press) {
 			case 'READ_COIL':
				$scope.checkModel.readCoil = true;
				$scope.checkModel.writeCoil = false;
 				$scope.checkModel.readRegister = false;
 				$scope.checkModel.writeRegister = false;
 				break;
 			case 'READ':
 				$scope.checkModel.readCoil = false;
 				$scope.checkModel.writeCoil = false;
 				$scope.checkModel.readRegister = true;
 				$scope.checkModel.writeRegister = false;
 				break;
 			case 'WRITE':
 				$scope.checkModel.readCoil = false;
 				$scope.checkModel.writeCoil = true;
 				$scope.checkModel.readRegister = false;
 				$scope.checkModel.writeRegister = false;
 				break;
 			case 'WRITE_REGISTER':
 				$scope.checkModel.readCoil = false;
 				$scope.checkModel.writeRegister = true;
 				$scope.checkModel.readRegister = false;
 				$scope.checkModel.writeCoil = false;
 				break;
 			default:
 				break;
 		}
 	}

 	function makeAjaxRequest(url, data1, data2, functionCode){
 		console.log("url: " + url + ", data1: " + data1 + ", data2: " + data2 + ", functionCode: " + functionCode);
 		$.ajax({
				url : url,
                data : { 
                		functionCode : functionCode,
                		data1 : data1,
                		data2 : data2
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
 	}

	$scope.sendRequest = function(url,data1,data2) {
		var functionCode;
		if ($scope.checkModel.readRegister) {
			functionCode = 4;
		} else if ($scope.checkModel.writeCoil) {
			// Write sindle coil
			functionCode = 5;
		} else if ($scope.checkModel.readCoil) {
			functionCode = 1;
		} else if ($scope.checkModel.writeRegister) {
			functionCode = 6;
		}
		makeAjaxRequest(url,data1,data2,functionCode);
	};
	function printError(jqXHR, textStatus, errorThrown) {
		console.log(errorThrown);
		console.log(textStatus);
		console.log(jqXHR);
	}
}]);
