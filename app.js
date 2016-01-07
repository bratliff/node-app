var express = require("express");
var app = express();


// "/" => "hi there!"

app.get("/", function(req, res) {
	res.send('Hi there Fuckwad!');
});

app.get("/bye", function(req, res) {
	res.send('Goodbye!');
});

app.get("/dog", function(req, res) {
	res.send('Meow!');
});

app.listen(process.env.PORT, process.env.IP function(){
	console.log('server has started');
});

// "/bye" => "Goodbye!"

// "/dog" => "meow!"