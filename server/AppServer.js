import { DatabaseWrapper } from '../database/db_wrapper.js';
import { RequestHandler } from './RequestHandler.js';
import  express from 'express';
import bodyParser from 'body-parser';

export class AppServer{
    constructor(uri){
        this.db_manager = new DatabaseWrapper(uri);
        this.jsonParser = bodyParser.json();
        this.app = express();
        this.req_handler = new RequestHandler(this.db_manager);  
        this.init_router(this.req_handler)
    }

    init_router(req_handler){
          
          this.app.post('/requestHelp',this.jsonParser, function (req, res) {
            req_handler.requestHelp(req,res);  
          })
          
          this.app.post('/postAvailability',this.jsonParser, function (req, res) {
            req_handler.postAvailability(req,res); 
              
          })
          
          this.app.post('/newUser',this.jsonParser,function(req,res){
            req_handler.createNewUser(req,res);
          })

          this.app.get('/userInfo',this.jsonParser,function(req,res){
            req_handler.getUserInfo(req,res,db_manager);
          })
          
          this.app.listen(3000);
    }
}
var k = require('../database/const.js');
let appServer = new AppServer(k.DB_URI);