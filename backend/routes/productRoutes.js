import express from "express"
import formidable from "express-formidable"
const router = express.Router()

// controllers
import { addProduct } from '../controllers/productController.js'

import { authenticate, authorizeAdmin } from '../middlewares/authMiddleware.js'
import checkId from '../middlewares/checkId.js'

// formiddable : because we are going to work with the FORM data
router.route('/').post(authenticate, authorizeAdmin,formidable(), addProduct)

export default router