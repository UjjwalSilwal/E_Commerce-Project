import express from "express";
const router = express.Router()
import { createCategory,
        updateCategory,
        deleteCategory
 } from "../controllers/categoryController.js";

// i need authentication and authorization for my middleware
import {authenticate, authorizeAdmin} from '../middlewares/authMiddleware.js'

// user should be authenticate and authorize as a Admin to create category
router.route("/").post(authenticate,authorizeAdmin, createCategory)

// updating the category
router.route("/:categoryId").put(authenticate,authorizeAdmin, updateCategory)
router.route("/:categoryId").delete(authenticate,authorizeAdmin, deleteCategory)

export default router 