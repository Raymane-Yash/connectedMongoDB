const mongoose= require('mongoose')

const userSchema = new mongoose.Schema({
    name:String,
    email:{type:String, required:true, unique:true},
    message:String
})

module.exports=mongoose.model('users', userSchema)