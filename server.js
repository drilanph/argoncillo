//require modules
var express = require('express');
var path = require('path');
//instantiate express
var app = express();
//set port
app.set('port', (process.env.PORT || 5000));
//use static files
app.use(express.static(path.join(__dirname, 'public')));
//express routes
app.get('/up1', function(req, res){
  res.sendFile(path.join(__dirname, 'views/up1.html'));
});  
app.get('/up2', function(req, res){
  res.sendFile(path.join(__dirname, 'views/up2.html'));
});
app.get('/up3', function(req, res){
  res.sendFile(path.join(__dirname, 'views/up3.html'));
});
app.get('/up4', function(req, res){
  res.sendFile(path.join(__dirname, 'views/up4.html'));
});

//express server listen
var server = app.listen(app.get('port'), function(){
  console.log('Server listening on port ',app.get('port'));
});