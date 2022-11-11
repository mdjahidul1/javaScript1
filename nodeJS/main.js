
/*
var http=require('http');

var server=http.createServer(function (req,res) {
    res.end("hello world")
});

server.listen(8080);
console.log("server run success");

*/

var http=require('http');
var server=http.createServer(function (req,res){
    if(req.url=="/"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>this is home page</h1>')
        res.end();
    }

    else if(req.url=="/about"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>this is about page</h1>')
        res.end();
    }

    else if(req.url=="/contact"){
        res.writeHead(200,{'content-type':'text/html'})
        res.write('<h1>this is contact page</h1>')
        res.end();
    }
});

server.listen(8080);
console.log("server is run");
