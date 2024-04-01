import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from './asyncHandler.js'

//For User authentication and authorization

const authenticate = asyncHandler(async (req, res, next) => {
    let token;

    //Read JWT from jwt cookie
    token = req.cookie.jwt 

    if (token) {
        try {

            const decoded = jwt.verify(token, process.env.JWT_SECRET)
            req.user = await User.findbyId(decoded.userId).select('-password')
            next();
            
        } catch (error) {
            res.status(401)
            throw new Error("Not authorized, token failed")
        }
    } else {
        res.status(401)
        throw new Error("Not authorized, no token")

    }
})

// Check for the admin 