const user = require('../Models/user')
const auth = async(req,res,next) =>{
try{
var query = {};
query.email = req.headers.email;
query.password = req.headers.password;
const userInfo= user.findOne(query);
if(!userInfo){
    throw new Error();
}
req.userInfo = userInfo;
}catch(e){
    res.status(401).send({error:'Please authenticate'})
}

}
module.exports = auth;