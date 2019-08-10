import { requestHelp } from './Student/CourseHelpRequestHandler';
import {postAvailability} from './Tutor/CourseAvailabilityRequestHandler'
var express = require('express');
var bodyParser = require('body-parser')
var jsonParser = bodyParser.json()
 
var app = express();

app.get('/', function(req,res){
  res.send("hello, world");
})

app.post('/requestHelp',jsonParser, function (req, res) {
  //handle auth shit
  requestHelp(req,res);  
})

app.post('/postAvailability',jsonParser, function (req, res) {
  //handle auth shit
  postAvailability(req,res); 
    
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