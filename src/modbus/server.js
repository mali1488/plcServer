// Node functionality
var express = require('express'), cors = require('cors') , app = express();
app.use(cors());

// Modbus functionality
var FC = require('./modbus/modbus-stack').FUNCTION_CODES;
var client = require('./modbus/client').createClient(502);

/*app.get('/', function(req,res){
  console.log("qwe");
});
*/
// http get request
app.get('/', function (req, res) {

  var arg = {response : "args", all : { func: req.query.functionCode,
                                        dataStart: req.query.dataStart,
                                        dataLength: req.query.dataLength
                                      }};
  console.log(arg);
  var getResp = {response:"launching request to server via client api"};

  // Send modbus request to server request(Function Code,Start at address ,  Read 50 contiguous registers from 0 )
  client.request(FC.READ_INPUT_REGISTERS, req.query.dataStart, req.query.dataLength, function(err, response) {
    if (err) throw err;
    console.log(response);
    res.send([{arg, getResp, response:"got modbus answer from the request"}]);
  });

});

var server = app.listen(8080, function () {
  var host = server.address().address;
  var port = server.address().port;

  console.log('Example app listening at http://%s:%s', host, port);
});