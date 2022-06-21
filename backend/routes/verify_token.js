const jwt = require('jsonwebtoken');
const multer = require('multer');
const path =require('path') 

const verifyToken = (req,res,next)=>{
    const token = req.headers.token;
    //console.log("tOKEN iS ",token);
   // console.log("Headers ",req.headers);
   // console.log("Body ",req.body);
    if(token){
       //const tokenn = token.split(" ")[1];
        jwt.verify(token,"token_key",(err,user)=>{            
            if(err){
                console.log('Error here err');
                res.status(403).json({message:'Invalid Token'});
            }
            else{
                console.log('Token Validated');
                //console.log('req.user: ',user);
                req.user = user;
                
                next();
            }
        })
    }else{
        return res.status(401).json({message:'You are not authenticated'});
    }
}

const verifyTokenAndAuth = (req,res,next)=>{
    verifyToken(req,res,()=>{        
        if(req.user._id === req.params.id || req.user.isAdmin){
            next();
        }else{
            res.status(403).json({message:'You are not Authorised'})
        }
    })
}

const verifyTokenAndAdmin = (req,res,next)=>{
    verifyToken(req,res,()=>{        
        if(req.user.isAdmin){
            console.log(req.user.isAdmin);
            next();
        }else{
            res.status(403).json({message:'You are not Authorised'})
        }
    })
}


const multerStorage = multer.diskStorage({
    destination: (req, file, cb) => {
        console.log(path.join(process.cwd()+'/Images'));
      cb(null, path.join(process.cwd()+'/Images'));
    },
    filename: (req, file, cb) => {
      const ext = file.mimetype.split("/")[1];
      //cb(null, `admin-${file.fieldname}-${Date.now()}.${ext}`);
      cb(null, `product-${Date.now()}-${file.originalname}`)
    },
  });

  const upload = multer({storage: multerStorage})



module.exports ={verifyToken, verifyTokenAndAuth,verifyTokenAndAdmin,upload}