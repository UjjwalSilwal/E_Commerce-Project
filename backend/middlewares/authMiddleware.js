import jwt from 'jsonwebtoken'
import User from '../models/userModel.js'
import asyncHandler from './asyncHandler.js'

//For User authentication and authorization

const authenticate = async (req, res, next) => {
    try {
      let token;
  
      // Read JWT from jwt cookie
      token = req.cookies.jwt;
  
      if (!token) {
        res.status(401);
        throw new Error("Not authorized, no token");
      }
  
      const decoded = jwt.verify(token, process.env.JWT_SECRET);
      if (!decoded) {
        res.status(401);
        throw new Error("Not authorized, token invalid");
      }
  
      // Assuming User.findById returns a promise
      const user = await User.findById(decoded.userId).select("-password");
      if (!user) {
        res.status(401);
        throw new Error("Not authorized, user not found");
      }
  
      req.user = user;
      next();
    } catch (error) {
      next(error); // Pass the error to the error handling middleware
    }
  };
  

// Check for the admin

const authorizeAdmin = (req, res, next) => {
    if (req.user && req.user.isAdmin) {
        next()
    } else {
        res.status(401).send("Not authorized as an Admin")
    }
}

export {authenticate,authorizeAdmin}