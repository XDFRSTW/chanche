const express = require("express");
const { userRegister, userLogin, getUserProfile } = require("../controllers/userController");
const authMiddleware = require("../middlewares/auth");

const router = express.Router();

router.post("/login", userLogin);
router.post("/register", userRegister);

module.exports = router;