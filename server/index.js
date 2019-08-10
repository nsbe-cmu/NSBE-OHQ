import { requestHelp } from './Student/CourseHelpRequestHandler';
import {postAvailability} from './Tutor/CourseAvailabilityRequestHandler'
import {createNewUser} from './NewUser/NewUserRequestHandler';
var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
 
var app = express();

app.get('/', function(req,res){
  res.send("hello, world");
})

app.post('/requestHelp',jsonParser, function (req, res) {
  requestHelp(req,res);  
})

app.post('/postAvailability',jsonParser, function (req, res) {
  postAvailability(req,res); 
    
})

app.post('/newUser',jsonParser,function(req,res){
  createNewUser(req,res);
})

app.listen(3000);

// /*
// Student -
// - POST - to request help
// Tutor - 
// - POST - to add availability

// BOTH
// - Login -
// GET & POST
// check/add to database

// */