let mongoose=require('mongoose');

//create a model class
let contactSchema=mongoose.Schema({
name:String,
desc:String
},
{
    collection:"favortethings"
});



module.exports=mongoose.model('test',contactSchema);