const jwt = require('jsonwebtoken');
require('dotenv').config();

const checkAuth = async(req, res, next) => {
    const header = req.headers.authentication;
    console.log(header);

    if(header && header.contains('Bearer')){
        try {
            const token = header.split(' ')[1];
            if(token){
               const authenticated = await jwt.verify(token,process.env.JWT_SECRET);
               console.log(authenticated);

            //    if(authenticated){
            //         req.user = 
            //    }
            //    else{
            //        return res.status(403).json('Token is not valid')
            //    }

            }
            else{
                return res.status(401).json('Auth failed')
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    else{
        return res.status(401).json('Auth failed')
    }
}


module.exports = { checkAuth };