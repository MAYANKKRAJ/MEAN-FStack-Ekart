const UserModel = require('../models/User_model');
const bcrypt = require('bcryptjs');


exports.update = async (req,res)=>{

   if(req.body.password){
    req.body.password = await bcrypt.hash(req.body.password,10); 
   }

   try{
    //console.log(req.body,'...........');
       const updatedUser = await UserModel.findByIdAndUpdate(req.params.id, {
           $set:req.body
       },
       {
           new:true
        });
       res.status(200).json(updatedUser);
   }catch{
       res.status(500).json({message:"failed Updating Records"})
   }
}

exports.findUsers = async(req,res)=>{
    try {
        const allUsers = await UserModel.find();
        res.status(200).json(allUsers);
        
    } catch (error) {
        res.status(401).json({message:"Unable to find The Users"});        
    }
}

exports.deleteUserbyId = async(req,res)=>{
    try {
        await UserModel.findByIdAndDelete(req.params.id)   
        res.status(200).json('User Has been deleted');     
        
    } catch (error) {
        res.status(500).json();        
    }
}

exports.findUserbyId = async(req,res)=>{
    try {
        console.log('11111');
        const dataid = await UserModel.findById(req.params.id)   
        //console.log(dataid);
        const {password, ...others} = dataid._doc;    
        console.log("Others ",others);
        //console.log("...Others ",...others);

        res.status(200).json(others);     
        
    } catch (error) {
        res.status(500).json();        
    }
}

