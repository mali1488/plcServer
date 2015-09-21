'use strict';

angular.module('plcServer',['ngCookies','ngRoute','ngResource','ui.bootstrap'])

.config(['$routeProvider', function($routeProvider) {
	$routeProvider.when('/plcServer', {
		templateUrl : 'src/view/plcServer.html',
    	controller: 'mainCtrl'
  	})
  	.when('/modbus', {
  		templateUrl : 'src/view/modbus.html',
    	controller: 'mainCtrl'
  	})
    .otherwise({
    	redirectTo: '/plcServer'
  	});
}]);
