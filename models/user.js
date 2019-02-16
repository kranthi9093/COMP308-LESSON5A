//require modules for our user model

let mongoose=require('mongoose');
let passportlocalMongoose=require('passport-local-mongoose');

let userSchema=mongoose.Schema({
username:{
    type:String,
    default:'',
    trim:true,
    required:'username is required'
} ,
password:{
    type:String,
    default:'',
    trim:true,
    required:'password is required'
},
email:{
    type:String,
    default:'',
    trim:true,
    required:'email is required'
},
displayName:{
    type:String,
    default:'',
    trim:true,
    required:'email is required'
},
created:{
    type:Date,
    default:Date.now
},
updated:{
    type:Date,
    default:Date.now
}
},
{
    collection:"users"
}
);

let options=({
    missingPasswordError:"wrong username/password"

});

userSchema.plugin(passportlocalMongoose,options);

module.exports.User=mongoose.model('User',userSchema);