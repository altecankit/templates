var express = require('express');
var body_parser = require('body-parser');

var app = new express();


//setting body-parser
app.use(body_parser.json());
app.use(body_parser.urlencoded({extended:true}));

app.get('/checkserver',function(req,res){
	res.status(200).json({status:true,message:'Server running'});
});

var routes=require('./routes/routes.js');
routes(app);

app.listen(3000,()=>{
	console.log("Server running");
})