const mongoose = require('mongoose')
const validator = require('validator')
const userSchema = new mongoose.Schema({
    firstname :{
        type : String,
        required : true, 
        trim : true
    },
    lastname :{
        type : String,
        required : true, 
        trim : true
    },
    email:{
        type : String,
        required: true,
        trim :true, 
        lowercase : true,
        validate(value){
            if(!validator.isEmail(value)){
                throw new Error('email is not valid..please provide valid email')
            }
        }
    },
    address :{
        type : String,
        required : true, 
        trim : true
    },
    class :{
        type : Number,
        required : true, 
        trim : true
    },
    type :{
        type : String,
        required : true, 
        trim : true
    },
    password : {
        type : String,
        required: true,
        trim :true,
        minlength :6
    }

})
userSchema.pre('save',()=>{
    
})
const User = mongoose.model('User',userSchema);
module.exports = User;