const url = require('url');

export function requestHelp(req,res){
    res.json({ type: 'help' })
}              