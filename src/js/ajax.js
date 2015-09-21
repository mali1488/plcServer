angular.module('ow-soap-shop')
.factory('AjaxReq', function ProductsFactory($http){
	var dbUrl = "https://localhost/ow-soap-shop/src/ajax.php";
	var regUrl = "https://localhost/ow-soap-shop/src/register.php";
	var logUrl = "https://localhost/ow-soap-shop/src/login.php";
	var logoutUrl = "https://localhost/ow-soap-shop/src/logout.php";
	var userUrl = "https://localhost/ow-soap-shop/src/user.php";
	var prodUrl = "https://localhost/ow-soap-shop/src/products.php";
	return {
		getData: function(index) {
			console.log("get data" + index);
			return $.ajax({
                url : dbUrl,
                data : { index : index },
                type : 'GET',
                crossDomain : true,
                error : function(jqXHR, textStatus, errorThrown) {
                		printError(jqXHR, textStatus, errorThrown);
                	}
                });
		},
		login: function(username,password) {
			console.log("trying to log in " + username + " " + password);
			return $.ajax({
				url : logUrl,
				type : 'POST',
				data : { username : username, password : password },
				crossDomain : true,
				error : function(jqXHR, textStatus, errorThrown) {
		                printError(jqXHR, textStatus, errorThrown);
				}
			});
		},
		logout: function() {
			console.log("Logging out!");
			return $.ajax({
				url : logoutUrl,
				type : 'GET',
				crossDomain : true,
				error : function(jqXHR, textStatus, errorThrown) {
										printError(jqXHR, textStatus, errorThrown);
				}
			});
		},
		register: function(username,password,email) {
			console.log("trying to register");
			return $.ajax({
				url : regUrl,
				type : 'POST',
				data : { email : email, username : username, password : password },
				crossDomain : true,
				error : function(jqXHR, textStatus, errorThrown) {
		                printError(jqXHR, textStatus, errorThrown);
				}
			});
		},
		/* request can be:
			all, firstName,middleName,lastName,ip,mainAddress ...
		*/
		getData: function(request) {
			return $.ajax({
				url : userUrl,
				type : 'GET',
				data : { request : request},
				crossDomain : true,
				error : function(jqXHR, textStatus, errorThrown) {
						printError(jqXHR, textStatus, errorThrown);
				}
			});
		},
		/* request can be:
			all, soap, schampoo, offers ...
		*/
		getProducts: function(request) {
			return $.ajax({
				url : prodUrl,
				type : 'GET',
				data : { request : request },
				crossDomain : true,
				error : function(jqXHR, textStatus, errorThrown) {
						printError(jqXHR, textStatus, errorThrown);
				}
			});
		},
		getProduct: function(id) {
			return $.ajax({
				url : prodUrl,
				type : 'GET',
				data : { id : id},
				crossDomain : true,
				error : function(jqXHR, textStatus, errorThrown) {
						printError(jqXHR, textStatus, errorThrown);
				}
			});
		}
	}
	function printError(jqXHR, textStatus, errorThrown) {
		console.log(errorThrown);
		console.log(textStatus);
		console.log(jqXHR);
	}
});
