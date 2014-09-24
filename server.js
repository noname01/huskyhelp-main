
var express = require("express");
var app = express();

app.set("view engine", "jade");

app.use(express.favicon(__dirname + '/public/img/favicon.ico'));

//static middleware
var oneDay = 86400000;
app.use(express.compress());
app.use(express.static(__dirname + '/public', { maxAge: oneDay }));

app.get("/", function(req, res){
  res.render("index");
});

app.get("/application",function(req, res){
  res.sendfile("./public/files/application.docx");
});

app.get("*", function(req, res){
  res.render("notFound");
});

var server = app.listen(3000, function(){
  console.log("Listening on port %d", server.address().port);
});