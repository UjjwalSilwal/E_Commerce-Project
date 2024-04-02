// Once we define this We are able to create a user delete a user

import express from "express";
import { createUser, loginUser, logoutCurrentUser ,getAllUsers,getCurrentUserProfile,updateCurrentUserProfile} from "../controllers/userController.js";
import { authenticate,authorizeAdmin } from "../middlewares/authMiddleware.js";

const router = express.Router()

// For create, authenticate, authorizeAdmin user
router.route("/").post(createUser).get(authenticate,authorizeAdmin,getAllUsers)

// For log-in the user
router.post('/auth', loginUser)
router.post('/logout', logoutCurrentUser)

router.route('/profile').get(authenticate,getCurrentUserProfile).put(authenticate,updateCurrentUserProfile)

export default router;