import asyncHandler from "../middlewares/asyncHandler.js";
import Product from "../models/productModel.js";

const addProduct = asyncHandler(async(req,res)=>{
    try {
        const {name, description, price, category, quantity, brand} = req.fields
        // console.log(name)
        // console.log(description)
        // console.log(price)
        // console.log(category)
        // console.log(quantity)
        // console.log(brand)
        // go to postman : body : form-data

        // Validation

        switch(true){
            case !name:
                return res.json({error:"Name is required"})

            case !description:
                return res.json({error:"Description is required"})

            case !price:
                return res.json({error:"Price is required"})

            case !category:
                return res.json({error:"Category is required"})
                
            case !quantity:
                return res.json({error:"Quantity is required"})

            case !brand:
                return res.json({error:"Brand is required"})

        }  
        
        const product = new Product({...req.fields})
        await product.save()
        res.json(product)

    } catch (error) {
        console.error(error)
        res.status(400).json(error.message)
    }

})

export {addProduct}