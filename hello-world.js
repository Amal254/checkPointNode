// 1.1 Create a file named hello-world.js
// touch hello workerData.js
//1.2 Write a program to print "HELLO WORLD" to the console
console.log("HELLO WORLD");

// 2.1 create a server
// 2.2 Write a program that runs on port 3000 and responds with  '<h1>Hello Node!!!!</h1>\n' when someone reaches http://localhost:3000
var http = require("http");

http.createServer(function (request, response) {
   // Send the HTTP header 
   // HTTP Status: 200 : OK
   // Content Type: text/plain
   response.writeHead(200, {'Content-Type': 'text/plain'});
   
   // Send the response body as "Hello World"
   response.end('<h1>Hello Node!!!!</h1>\n');
}).listen(3000);

// Console will print the message
console.log('Server running at http://127.0.0.1:3000/');

// 3.1 First, require the file system to create a file named "welcome.txt" containing one line "Hello Node".
// 3.2 Second, create a program that reads and console.log data from hello.txt
var fs = require("fs");
fs.readFile('welcome.txt', function (err, data) {
   if (err) return;
   console.log(data.toString());
   console.log("Program Ended");
});

// 4.1 