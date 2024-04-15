import express from "express"
import formidable from "express-formidable"
const router = express.Router()

// controllers
import { addProduct ,
        updateProductDetails, 
        deleteProduct,
        fetchProducts,
        fetchProductById,
        fetchAllProducts,
        addProductReview,
        fetchTopProducts,
        fetchNewProducts,
} from '../controllers/productController.js'

import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js'
import checkId from '../middlewares/checkId.js'

// formiddable : because we are going to work with the FORM data
router.route('/').get(fetchProducts).post(authenticate, authorizeAdmin,formidable(), addProduct)

// for client side
router.route('/allproducts').get(fetchAllProducts)

// for reviews
router
    .route('/:id/reviews')
    .post(authenticate, authorizeAdmin,checkId, addProductReview)

// for fetching the top products by rating
router.get('/top', fetchTopProducts)
// for fetching the newest added products
router.get('/new', fetchNewProducts)

// for updating the product // for admin
router
    .route('/:id')
    .get(fetchProductById)
    .put(authenticate,authorizeAdmin,formidable(), updateProductDetails)
    .delete(authenticate,authorizeAdmin,formidable(), deleteProduct)

export default router