import express from "express";
const router = express.Router()
import { createCategory,
        updateCategory
 } from "../controllers/categoryController.js";

// i need authentication and authorization for my middleware
import {authenticate, authorizeAdmin} from '../middlewares/authMiddleware.js'

// user should be authenticate and authorize as a Admin to create category
router.route("/").post(authenticate,authorizeAdmin, createCategory)

// updating the category
router.route("/:categoryId").put(authenticate,authorizeAdmin, updateCategory)

export default router 