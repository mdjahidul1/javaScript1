var express=require('express');
app=express();

// simple string response
// res.send()------->response body
// res.end()------->response ending point

// app.get("/one",function(req,res){
//     res.send("this is simple string response1");
// });

// app.post("/two",function(req,res){
//     res.end("this is simple string response2");
// });

// //response status code
// app.get("/three",function(req,res){
//     res.status(401).end("unothorise....");
// });

// //jason response code
app.get("/four",function(req,res){
    let MyJasonArray=[
        {
            name:"jahid",
            city:"dhaka",
            occupation:"engineer"
        },

        {
            name:"sintha",
            city:"dhaka",
            occupation:"edantal"
        },

        {
            name:"rakib",
            city:"dhaka",
            occupation:"edoctor"
        }
    ]
    
    
    res.json(MyJasonArray);
});

//response download
app.get("/five",function(req,res){
    res.download("./images/jahid.JPG");
});

//response redirect
app.get("/bangladesh",function(req,res){
   res.redirect("http://localhost:8000/pakisthan");
});

app.get("/pakisthan",function(req,res){
    res.send("this is pakisthan")
});


//response header
app.get("/six",function(req,res){
    res.append("name","jahidul islam");
    res.append("city","dhaka");
    res.append("occupation","engineer");
   
    res.status(404).end("hello jahid");


})

// response cookie

app.get("/seven",function(req,res){
    res.cookie('name','jahidu');
    res.cookie('city','tangail');
    res.cookie('occupation','engineer');
    res.end("cookie set success");
})

// response cookie clear

app.get("/eight",function(req,res){
    res.clearCookie('name');
    
    res.clearCookie('occupation');
    res.end("cookie clear success");
})







app.listen(8000, function(){
     console.log("surver run success");
});
