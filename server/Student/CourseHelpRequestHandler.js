const url = require('url');

export function requestHelp(req,res){
    console.log(req.body  );
    res.json({ type: 'help' })
}              