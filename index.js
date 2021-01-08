var http = require("http");

var exports = module.exports={};

exports.AddNumber = function(a,b) {
   return a+b
};

exports.MultiplyNumber = function(a,b) {
   return a*b
};

exports.SubstractionNumber = function(a,b) {
   return a-b
};

exports.divisionNumber = function(a,b) {
   return a/b
};

var valueAdd = exports.AddNumber(2,4);
var valueMultiply = exports.MultiplyNumber(4,4);

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end("Hello World ");
}).listen(8081);

// Console will print the message
console.log('Server running at http://127.0.0.1:8081/');