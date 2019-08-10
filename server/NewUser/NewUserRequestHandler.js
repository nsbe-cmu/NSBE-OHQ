const url = require('url');

export function createNewUser(req,res){
    console.log(req.body  );
    
    res.json({ type: 'new user' })
}              