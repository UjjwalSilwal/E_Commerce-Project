import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

const addProduct = asyncHandler(async(req,res)=>{
    res.send('hello')
})

export {addProduct}