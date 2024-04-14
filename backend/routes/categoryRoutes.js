import express from "express";
const router = express.Router()
import { createCategory,
        updateCategory,
        deleteCategory,
        listCategory,
        readCategory,
 } from "../controllers/categoryController.js";

// i need authentication and authorization for my middleware
import {authenticate, authorizeAdmin} from '../middlewares/authMiddleware.js'

// user should be authenticate and authorize as a Admin to create category
router.route("/").post(authenticate,authorizeAdmin, createCategory)

// updating the category
router.route("/:categoryId").put(authenticate,authorizeAdmin, updateCategory)
router.route("/:categoryId").delete(authenticate,authorizeAdmin, deleteCategory)

// Get all the category inside our data bases
// two cases :
// one is used for the shop (frontend)
//another is used for backend (for Admin)
router.route("/categories").get(listCategory)

// read a specific category
router.route("/:id").get(readCategory)

export default router 