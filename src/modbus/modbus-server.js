var FC = require('./modbus/modbus-stack').FUNCTION_CODES;

var handlers = {};

handlers[FC.READ_COILS] = function(request, response) {
	response.writeException(2);
}

handlers[FC.READ_INPUT_REGISTERS] = function(request, response) {
	console.log(request);
	setTimeout(function() {
		response.writeResponse(new Array(request.quantity));
	}, 800);
}

handlers[FC.READ_COILS] = function(request, response) {
	console.log("some request this is, read coils");
	response.writeException(2);
}

require('./modbus/server').createServer(handlers).listen(502);