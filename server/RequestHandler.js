export class RequestHandler{
    constructor(db_manager){
        this.db_manager = db_manager;
    }
    /*
    requestHelp: user requests help for given course
    @req: https request containing data
    ex:
    req.body = {
      _course: String
      digest_time: Date
      status: String
      user_id: ObjectID
    }
    @res: server response to request
    @return: Void
  */
    requestHelp(req,res){
        this.db_manager.addServiceRequest(user_id,req.body);
        res.json({ type: 'help' })
    }
    /*
    createNewUser: add new user to db
    @req: https request containing data
    ex:
    {
      first_name : String,
      last_name : String,
      email : String,
      profile_url : String,
      roles: Array
    }
    @res: server response to request
    @return: Void
  */   
    createNewUser(req,res){
        this.db_manager.addUser(req.body);
        res.json({ type: 'new user' })
    }    
    /*postAvailability: Add tutoring service request as per user (student).
    @req: https request containing data
    req.body = 
        {
        _course: string
        digest_time: Date
        status: String
        location: String
        availability: Object
        }
    @return: Void
    */ 
    postAvailability(req,res){
        res.json({ type: "post"})
    }   
    getUserInfo(req,res,){
        this.db_manager.getUserInfo(req.body);
        res.json({ type: "userInfo"})
    }                    
    static findTutor(course_req){
        console.log("finding tutor");
    }
}