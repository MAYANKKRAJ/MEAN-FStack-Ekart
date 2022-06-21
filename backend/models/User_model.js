const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const bcrypt = require('bcryptjs')

const userSchema = new Schema({
    name:{type:String, require:true},
    lastname:{type:String},
    email:{type:String, required:true},
    isAdmin:{ type:Boolean, default:false},
    contact:{type:Number, required:true},
    password:{type:String, required:true}
},
{
    timestamp:true
}
);

userSchema.pre('save', async function(next) {
    this.password = await bcrypt.hash(this.password,10);   
    next();
})

module.exports= mongoose.model('USER',userSchema);