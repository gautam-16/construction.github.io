const jwt = require("jsonwebtoken");

exports.isAuthenticated =async(req,res,next)=>{
    try {
        const authHeader = req.headers.authorization;
        if (authHeader) {
            const token = authHeader.split(' ')[1]
            const user= jwt.verify(token, process.env.JWT_SECRET)
              req.user = user;
              next();
        }else{
            return res.status(404).json("Please login first")
        }
       
          }
 catch (error) {
    return res.status(500).json({message:error.message}) 
    }
}