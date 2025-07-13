var express=require("express");
var bodyParser = require("body-parser");
var app=express();
var http=require("http").Server(app);
var io=require("socket.io")(http);
var mongoose=require("mongoose");
var port=process.env.PORT || 5000;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));

var Message=mongoose.model('Message',{
  name:String,
  email:String,
  message:String
});

var dbUrl = process.env.MONGODB_URI || "mongodb://localhost:27017/chitchat";

app.get('/messages',(req,res)=>
{
  Message.find({},(err,messages)=>{
     res.send(messages);
  });
});

app.post('/messages', (req, res) => {
  var message = new Message(req.body);
  message.save((err) => {
    if (err){
      console.error('Error saving message:', err);
      res.sendStatus(500);
    } else {
      io.emit('message', req.body);
      res.sendStatus(200);
    }
  });
});

io.on('connection',(socket)=>{
  console.log('User Connected');
  socket.on('disconnect', () => {
    console.log('User Disconnected');
  });
});

mongoose.connect(dbUrl,(err)=>{
  if (err) {
    console.error('MongoDB connection error:', err);
  } else {
    console.log('MongoDB connection successful');
  }
});

var server=http.listen(port,()=>{
  console.log("server is listening on port %d",port);
});