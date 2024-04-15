import express from "express"
import formidable from "express-formidable"
const router = express.Router()

// controllers
import { addProduct ,
        updateProductDetails, 
        deleteProduct,
        fetchProducts,
} from '../controllers/productController.js'

import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js'
import checkId from '../middlewares/checkId.js'

// formiddable : because we are going to work with the FORM data
router.route('/').get(fetchProducts).post(authenticate, authorizeAdmin,formidable(), addProduct)

// for updating the product
router
    .route('/:id')
    .put(authenticate,authorizeAdmin,formidable(), updateProductDetails)
    .delete(authenticate,authorizeAdmin,formidable(), deleteProduct)

export default router