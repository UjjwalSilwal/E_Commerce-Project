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

const updateProductDetails = asyncHandler(async(req,res)=>{
    try {
        
            const {name, description, price, category, quantity, brand} = req.fields
    
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

            const product =await Product.findByIdAndUpdate(
                req.params.id, 
                {...req.fields},
                {new: true} )

                // sending it to the database
                await product.save()

            res.json(product)

    } catch (error) {
        console.error(error)
        res.status(400).json(error.message)
    }
})

const deleteProduct = asyncHandler(async(req,res)=>{
    try {

        const product = await Product.findByIdAndDelete(req.params.id)

        res.json(product)
        
    } catch (error) {
        console.error(error)
        res.status(500).json({error : "Server Error"})
    }
})

const fetchProducts = asyncHandler(async(req,res)=>{
    try {

        const pageSize = 6;
        const keyword = req.query.keyword
        ?{name:{$regex: req.query.keyword,$options:"i", }}
         :{};

         const count = await Product.countDocuments({...keyword})
         const products = await Product.find({...keyword}).limit(pageSize)

         res.json({
            products,
            page:1, 
            pages : Math.ceil(count / pageSize),
            hasMore : false,
            })
        
    } catch (error) {
        console.error(error)
        res.status(500).json({error : "Server Error"})
    }
})

export {addProduct, updateProductDetails, deleteProduct, fetchProducts  }