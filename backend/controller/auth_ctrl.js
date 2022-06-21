const User = require('../models/User_model');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerUser = async(req,res)=>{
    const user = new User({
        name:req.body.name,
        lastname:req.body.lastname,
        email:req.body.email,
        isAdmin:req.body.isAdmin,
        contact:req.body.contact,
        password:req.body.password        
    });

    try {
        const registeredUser = await user.save();
        res.status(201).json(registeredUser);
        console.log('User Registered Successfully');
    } catch (err) {
        res.status(500).json(err);        
    }
}

let refreshTokens =[];

const generateAccessToken = (User)=>{
    return jwt.sign({email:User.email, isAdmin:User.isAdmin, _id:User._id},"Access_token_key", {expiresIn:'2d'});
}

const generateRefreshToken = (User)=>{
    return jwt.sign({email:User.email, isAdmin:User.isAdmin, _id:User._id},"Refresh_token_key");
}

exports.refresh = async (req,res)=>{
    const refreshToken = req.body.token;

    if(!refreshToken) return res.status(401).json("You're Not Authenticated by RefreshToken");

    if(!refreshTokens.includes(refreshToken)){
        return res.status(403).json('Refresh Token is not Valid');
    }

    jwt.verify(refreshToken,"Refresh_token_key", (err,user)=>{
        if(err){
            console.log("Error in Refresh Token ",err);
        }

        refreshTokens = refreshTokens.filter((token)=> token !== refreshToken);

        const newAccessToken =  generateAccessToken(User);
        const newRefreshToken =  generateRefreshToken(User);

        refreshTokens.push(newRefreshToken);

        res.status(200).json({
            accessToken : newAccessToken,
            refreshToken : newRefreshToken
        })
    })
}

exports.signin = async(req,res)=>{
    try {
     const {email, password} = req.body;
     if(!email || !password){
         res.status(400).json({error:'Please Enter The Valid Username & Password'});
     }
 
     const userData = await User.findOne({email:email});
     //console.log('User Data: ',userData);
 
     const isValidPswd = await bcrypt.compare(password, userData.password);
 
     if(!isValidPswd){
         res.status(404).json({Error:'Invalid Password'});
         
     }else{
         
            // const token = jwt.sign();
            console.log('1212');
            const AccessToken =  generateAccessToken(userData);
            console.log('222');
            const RefreshToken =  generateRefreshToken(userData);
            console.log('3333');
            refreshTokens.push(RefreshToken);
            //  console.log("token is ",token);
             const {password, ...others} = userData._doc; 
             console.log('4444 ', others );      
             res.status(200).json({...others,AccessToken, RefreshToken, "login":"success"});
     }
        
    } catch (error) {
        res.status(500).json({Error:'Sorry'})
    }
 }