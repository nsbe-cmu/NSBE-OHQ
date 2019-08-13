import { DatabaseWrapper } from '../database/db_wrapper.js';
import { requestHelp } from './Student/CourseHelpRequestHandler';
import {postAvailability} from './Tutor/CourseAvailabilityRequestHandler'
import {createNewUser} from './NewUser/NewUserRequestHandler';
import  express from 'express';
import bodyParser from 'body-parser';

export class AppServer{
    constructor(uri){
        this.db_manager = new DatabaseWrapper(uri);
        this.jsonParser = bodyParser.json();
        this.app = express();
        this.init_router(this.db_manager)
    }

    init_router(db_manager){
          
          this.app.post('/requestHelp',this.jsonParser, function (req, res) {
            requestHelp(req,res);  
          })
          
          this.app.post('/postAvailability',this.jsonParser, function (req, res) {
            postAvailability(req,res); 
              
          })
          
          this.app.post('/newUser',this.jsonParser,function(req,res){
            createNewUser(req,res,db_manager);
          })
          
          this.app.listen(3000);
    }
}
var k = require('../database/const.js');
let appServer = new AppServer(k.DB_URI);