var fs=require('fs');
var http=require('http');
var server=http.createServer(function(req,res){
    if(req.url=="/"){
        fs.exists("demo.txt",function(result){
           if(result){
            res.end("file ace");
           }
           else{
            res.end("file nai");
           }
        });
    }
});
server.listen(5050);
console.log("server run success");
