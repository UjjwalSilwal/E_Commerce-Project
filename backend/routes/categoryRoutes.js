import express from "express";
const router = express.Router()
import { createCategory } from "../controllers/categoryController.js";

// i need authentication and authorization for my middleware
import {authenticate, authorizeAdmin} from '../middlewares/authMiddleware.js'

router.route("/").post(createCategory)

export default router 