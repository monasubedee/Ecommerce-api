const jwt = require('jsonwebtoken');
require('dotenv').config();

const verifyToken = (req, res, next) => {
    const header = req.headers.authorization;

    if (header) {
        try {
            const token = header.split(' ')[1];
            if (token) {
                const decodedData = jwt.verify(token, process.env.JWT_SECRET);

                req.user = decodedData;

                next();

            }
            else {
                return res.status(401).json('Auth failed')
            }
        } catch (error) {
            return res.status(500).json(error);
        }
    }
    else {
        return res.status(401).json('Auth failed')
    }
}


const verifyTokenAndAuthorization = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.userId === req.params.id || req.user.isAdmin) {
            next();
        }
        else {
            return res.status(403).json("You are not allowed to do that!")
        }
    })
}


const verifyTokenAndAdmin = (req, res, next) => {
    verifyToken(req, res, () => {
        if (req.user.isAdmin) {
            next();
        }
        else {
            return res.status(403).json("You are not allowed to do that!");
        }
    })
}


module.exports = { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin };