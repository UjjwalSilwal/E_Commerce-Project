import Category from "../models/categoryModel.js"
import asyncHandler from "../middlewares/asyncHandler.js"

const createCategory = asyncHandler(async(req, res)=>{
    try {
        const {name} = req.body
//The trim method in JavaScript is a built-in string method that removes whitespace characters from the beginning and end of a string.

        if(!name){
            return res.json({error : "Name is required"})
        }
        // Check for the existing category name and if it is already available
        const existingCategory = await Category.findOne({name})

        if(existingCategory){
            return res.json({error: "Already esists"})
        }

        const category = await new Category({name}).save()
        res.json(category)

    } catch (error) {
        console.log(error)
        return res.status(400).json(error)
    }
})

export {createCategory}