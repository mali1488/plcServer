// Node functionality
var express = require('express'), cors = require('cors') , app = express();
app.use(cors());

// Modbus functionality
var FC = require('./modbus/modbus-stack').FUNCTION_CODES;
var client = require('./modbus/client').createClient(502);

// http get request
app.get('/', function (req, res) {
  // Se modbus specification protocol for function codes
  var functionCode = req.query.functionCode;
  var data1 = req.query.data1;
  var data2 = req.query.data2;

  var arg = {response : "args", all : { func: req.query.functionCode,
                                        dataStart: req.query.data1,
                                        dataLength: req.query.data2
                                      }};
  var getResp = {response:"launching request to server via client api"};

  // Send modbus request to server request(Function Code,Start at address ,  Read 50 contiguous registers from 0 )
  client.request(functionCode, data1, data2, function(err, response) {
    if (err) {
      console.log("error: " + err);
      res.send({error: err});
    } else {
      console.log(response);
      res.send([{arg, getResp, response:"got modbus answer from the request"}]);
    }
  });

});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});