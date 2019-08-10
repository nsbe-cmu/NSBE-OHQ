const url = require('url');

export function postAvailability(req,res){
    console.log(req.body  );
    res.json({ type: "post"})
}              