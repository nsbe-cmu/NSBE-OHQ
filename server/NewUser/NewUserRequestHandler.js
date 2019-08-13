const url = require('url');

export function createNewUser(req,res,db){
    db.createUser(req.body);
    res.json({ type: 'new user' })
}              