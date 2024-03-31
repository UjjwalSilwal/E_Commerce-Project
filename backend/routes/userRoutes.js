// Once we define this We are able to create a user delete a user

import express from "express";

const router = express.Router()

router.route('/').post(createUser)

export default router