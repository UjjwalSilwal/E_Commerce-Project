// Once we define this We are able to create a user delete a user

import express from "express";
import { createUser,loginUser,logoutCurrentUser } from "../controllers/userController.js";

const router = express.Router()

router.route("/").post(createUser)

// For log-in the user
router.post('/auth', loginUser)
router.post('/logout',logoutCurrentUser)

export default router;