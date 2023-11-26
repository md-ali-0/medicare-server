require("dotenv").config();
const jwt = require('jsonwebtoken');
const verifyToken = async (req, res, next) => {
    const token = req.headers.token.split(' ')[1]
    if (!token) {
        return res.status(401).send({message: 'unAuthorized access'})
    }
    try {
        const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRET)
        req.user= decoded
        next()
    } catch (error) {
        return res.status(401).send({ message: "unauthorized access" });
    }
};

module.exports = verifyToken;
