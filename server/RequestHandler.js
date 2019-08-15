export class RequestHandler{
    constructor(db_manager){
        this.db_manager = db_manager;
    }
    requestHelp(req,res){
        this.db_manager.addServiceRequest(user_id,req.body);
        res.json({ type: 'help' })
    }   
    createNewUser(req,res){
        this.db_manager.createUser(req.body);
        res.json({ type: 'new user' })
    }     
    postAvailability(req,res){
        res.json({ type: "post"})
    }   
    getUserInfo(req,res,){
        db.getUserInfo(req.body);
        res.json({ type: "userInfo"})
    }                    
    
}